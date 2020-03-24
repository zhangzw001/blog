---
title: kubeadm安装高可用k8s集群
copyright: true
date: 2020-03-24 11:10:41
tags:
  - k8s
categories:
  - [技术文档]
  - [k8s]

---
简单记录kubeadm方式安装k8s1.16.4高可用集群

![](http://zhangzw001.github.io/images/42/01.png)

<!--more -->



> [Centos7.6部署k8s v1.16.4高可用集群(主备模式)](https://www.kubernetes.org.cn/6632.html)
> [使用kubeadm搭建高可用k8s v1.16.3集群(keepalived+haproxy)](https://www.cnblogs.com/ssgeek/p/11942062.html)



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 一、 安装准备 </font>
</center>


- 1.1 主机名
```
172.16.53.106 master01.k8s.io
172.16.53.107 master02.k8s.io
172.16.53.108 master03.k8s.io
172.16.53.137 master.k8s.io
```

- 1.2 同步时间, 设置时区
```
* * * * * /usr/sbin/ntpdate time.nist.gov

timedatectl set-timezone Asia/Shanghai
或者
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

- 1.3 关闭SElinux
```
setenforce  0
sed -i "s/^SELINUX=enforcing/SELINUX=disabled/g" /etc/sysconfig/selinux
sed -i "s/^SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
sed -i "s/^SELINUX=permissive/SELINUX=disabled/g" /etc/sysconfig/selinux
sed -i "s/^SELINUX=permissive/SELINUX=disabled/g" /etc/selinux/config  
```

- 1.4 关闭swap(否则kubeadm init或join会报错)
```
> swapoff -a && sysctl -w vm.swappiness=0
vm.swappiness = 0
或 swapoff -a

#/etc/fstab也要注解掉SWAP挂载。
sed -i.$(date +%F).bak '/swap/s/^/#/' /etc/fstab
#sed -i 's/.*swap.*/#&/' /etc/fstab

```

- 1.5 配置系统内核参数
```
使流过网桥的流量也进入iptables/netfilter框架中，在/etc/sysctl.conf中添加以下配置
cat <<EOF > /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

sysctl -p /etc/sysctl.d/k8s.conf
```

> 如果出现报错
```
sysctl: cannot stat /proc/sys/net/bridge/bridge-nf-call-iptables: No such file or directory
sysctl: cannot stat /proc/sys/net/bridge/bridge-nf-call-ip6tables: No such file or directory
```
> 报错解决:
```
# 执行以下命令
1 modprobe br_netfilter
2 ls /proc/sys/net/bridge
3 sysctl -p /etc/sysctl.d/k8s.conf
```

- 1.6 设置k8s源
```
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

yum clean all
yum makecache -y
```

```
[] 中括号中的是repository id，唯一，用来标识不同仓库
name 仓库名称，自定义
baseurl 仓库地址
enable 是否启用该仓库，默认为1表示启用
gpgcheck 是否验证从该仓库获得程序包的合法性，1为验证
repo_gpgcheck 是否验证元数据的合法性 元数据就是程序包列表，1为验证
gpgkey=URL 数字签名的公钥文件所在位置，如果gpgcheck值为1，此处就需要指定gpgkey文件的位置，如果gpgcheck值为0就不需要此项了
```

- 1.7 免密登录配置

略


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 二、 docker版本安装 </font>
</center>




- 2.1 配置源
```
yum install -y yum-utils device-mapper-persistent-data lvm2 bash-completion
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum install docker-ce-18.09.9 docker-ce-cli-18.09.9 containerd.io -y

# 高版本降级
yum downgrade --setopt=obsoletes=0 -y docker-ce-18.09.9 docker-ce-cli-18.09.9
```

- 2.2 配置阿里云镜像加速器
> 登陆地址为：https://cr.console.aliyun.com ,未注册的可以先注册阿里云账户

  ```
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://0aqwccdy.mirror.aliyuncs.com"]
}
EOF
  ```

- 2.3 启动docker
```
systemctl restart docker
systemctl enable docker
```

- 2.4 修改Cgroup Driver
> 修改daemon.json，新增‘”exec-opts”: [“native.cgroupdriver=systemd”’
```
cat /etc/docker/daemon.json
{
  "registry-mirrors": ["https://0aqwccdy.mirror.aliyuncs.com"],
  "exec-opts": ["native.cgroupdriver=systemd"]
}
```

  > 重新加载docker

```
systemctl restart docker
systemctl enable docker
```

  > 修改cgroupdriver是为了消除告警：

```
[WARNING IsDockerSystemdCheck]: detected “cgroupfs” as the Docker cgroup driver. The recommended driver is “systemd”. Please follow the guide at https://kubernetes.io/docs/setup/cri/
```


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 三、 keepalived安装 </font>
</center>


- 3.1 安装
```
yum -y install keepalived
```

- 3.2 master01.k8s.io上配置
```
tee /etc/keepalived/keepalived.conf <<- 'EOF'
! Configuration File for keepalived
global_defs {
   router_id master01.k8s.io
}

vrrp_script check_haproxy {
    script "killall -0 haproxy"
    interval 3
    weight -2
    fall 10
    rise 2
}

vrrp_instance VI_1 {
    state MASTER
    interface enp0s3
    virtual_router_id 51
    priority 250
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        172.16.53.137
    }
    track_script {
        check_haproxy
    }
}
EOF
```

- 3.3 master02.k8s.io,master03.k8s.io上配置
```
tee /etc/keepalived/keepalived.conf <<- 'EOF'
! Configuration File for keepalived
global_defs {
   router_id master02.k8s.io
}

vrrp_script check_haproxy {
    script "killall -0 haproxy"
    interval 3
    weight -2
    fall 10
    rise 2
}

vrrp_instance VI_1 {
    state BACKUP
    interface enp0s3
    virtual_router_id 51
    priority 200
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
       172.16.53.137
    }
    track_script {
        check_haproxy
    }
}
EOF


tee /etc/keepalived/keepalived.conf <<- 'EOF'
! Configuration File for keepalived
global_defs {
   router_id master03.k8s.io
}

vrrp_script check_haproxy {
    script "killall -0 haproxy"
    interval 3
    weight -2
    fall 10
    rise 2
}

vrrp_instance VI_1 {
    state BACKUP
    interface enp0s3
    virtual_router_id 51
    priority 150
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        172.16.53.137
    }
    track_script {
        check_haproxy
    }
}
EOF
```

- 3.4 master02.k8s.io,master03.k8s.io上启动keepalived
```
service keepalived start
systemctl enable keepalived
```

- 3.5 测试
```
# 首先 ip a查看ip否则绑定成功

# ping 172.16.53.137 是否正常

# 在master01.k8s.io上 停止服务 service keepalived stop

# 在master02.k8s.io或master03.k8s.io上查看ip a是否存在172.16.53.137, 检查ping 172.16.53.137 是否正常
```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 四、 haproxy安装 </font>
</center>


- 4.1 安装

  ```
yum install -y haproxy
  ```

- 4.2 配置

  > 三台master节点的配置均相同，配置中声明了后端代理的三个master节点服务器，指定了haproxy运行的端口为16443等，因此16443端口为集群的入口，其他的配置不做赘述。


  ```
tee  /etc/haproxy/haproxy.cfg <<- 'EOF'
#---------------------------------------------------------------------
# Global settings
#---------------------------------------------------------------------
global
    # to have these messages end up in /var/log/haproxy.log you will
    # need to:
    # 1) configure syslog to accept network log events.  This is done
    #    by adding the '-r' option to the SYSLOGD_OPTIONS in
    #    /etc/sysconfig/syslog
    # 2) configure local2 events to go to the /var/log/haproxy.log
    #   file. A line like the following can be added to
    #   /etc/sysconfig/syslog
    #
    #    local2.*                       /var/log/haproxy.log
    #
    log         127.0.0.1 local2

    chroot      /var/lib/haproxy
    pidfile     /var/run/haproxy.pid
    maxconn     4000
    user        haproxy
    group       haproxy
    daemon

    # turn on stats unix socket
    stats socket /var/lib/haproxy/stats
#---------------------------------------------------------------------
# common defaults that all the 'listen' and 'backend' sections will
# use if not designated in their block
#---------------------------------------------------------------------  
defaults
    mode                    http
    log                     global
    option                  httplog
    option                  dontlognull
    option http-server-close
    option forwardfor       except 127.0.0.0/8
    option                  redispatch
    retries                 3
    timeout http-request    10s
    timeout queue           1m
    timeout connect         10s
    timeout client          1m
    timeout server          1m
    timeout http-keep-alive 10s
    timeout check           10s
    maxconn                 3000
#---------------------------------------------------------------------
# kubernetes apiserver frontend which proxys to the backends
#---------------------------------------------------------------------
frontend kubernetes-apiserver
    mode                 tcp
    bind                 *:16443
    option               tcplog
    default_backend      kubernetes-apiserver    
#---------------------------------------------------------------------
# round robin balancing between the various backends
#---------------------------------------------------------------------
backend kubernetes-apiserver
    mode        tcp
    balance     roundrobin
    server      master01.k8s.io   172.16.53.106:6443 check
    server      master02.k8s.io   172.16.53.107:6443 check
    server      master03.k8s.io   172.16.53.108:6443 check
#---------------------------------------------------------------------
# collection haproxy statistics message
#---------------------------------------------------------------------
listen stats
    bind                 *:1080
    stats auth           admin:awesomePassword
    stats refresh        5s
    stats realm          HAProxy\ Statistics
    stats uri            /admin?stats
EOF
  ```

- 4.3 启动

  ```
systemctl enable haproxy
systemctl start haproxy
systemctl status haproxy
netstat -lnptu|grep haproxy
  ```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 五、 k8s安装 </font>
</center>



- 5.1 版本查看

  ```
yum list kubelet --showduplicates | sort -r
  ```

  > 本文安装的kubelet版本是1.16.4，该版本支持的docker版本为1.13.1, 17.03, 17.06, 17.09, 18.06, 18.09。

- 5.2 安装kubelet、kubeadm和kubectl

  ```
yum install -y kubelet-1.16.4 kubeadm-1.16.4 kubectl-1.16.4
  ```

  > kubelet 运行在集群所有节点上，用于启动Pod和容器等对象的工具
  > kubeadm 用于初始化集群，启动集群的命令工具
  > kubectl 用于和集群通信的命令行，通过kubectl可以部署和管理应用，查看各种资源，创建、删除和更新各种组件

- 5.3 启动kubelet

  ```
systemctl enable kubelet
systemctl start kubelet
  ```

- 5.4 kubectl命令补全

  ```
# bash
echo "source <(kubectl completion bash)" >> ~/.bash_profile
source ~/.bash_profile
# zsh
echo "source <(kubectl completion zsh)" >> ~/.zshrc
source ~/.zshrc

  ```

- 5.5 下载镜像
  > 外网的慢, 从阿里云下载后打个官方tag即可

  ```
tee /root/image.sh <<- 'EOF'
#!/bin/bash
url=registry.cn-hangzhou.aliyuncs.com/loong576
version=v1.16.4
images=(`kubeadm config images list --kubernetes-version=$version|awk -F '/' '{print $2}'`)
for imagename in ${images[@]} ; do
  docker pull $url/$imagename
  docker tag $url/$imagename k8s.gcr.io/$imagename
  docker rmi -f $url/$imagename
done
EOF

# 下载
sh  /root/image.sh

# 验证
docker images|grep 1.16.4
k8s.gcr.io/kube-apiserver                  v1.16.4              3722a80984a0        3 months ago        217MB
k8s.gcr.io/kube-controller-manager         v1.16.4              fb4cca6b4e4c        3 months ago        163MB
k8s.gcr.io/kube-proxy                      v1.16.4              091df896d78f        3 months ago        86.1MB
k8s.gcr.io/kube-scheduler                  v1.16.4              2984964036c8        3 months ago        87.3MB
k8s.gcr.io/metrics-server-amd64            v0.3.5               abf04c0f54ff        6 months ago        39.9MB
k8s.gcr.io/etcd                            3.3.15-0             b2756210eeab        6 months ago        247MB
k8s.gcr.io/coredns                         1.6.2                bf261d157914        7 months ago        44.1MB
k8s.gcr.io/pause                           3.1                  da86e6ba6ca1        2 years ago         742kB
  ```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 六、初始化master </font>
</center>



- 6.1 kubeadm.1.16.4.conf

  > 在具有vip的master上操作，这里为master01.k8s.io

  ```
tee /data/k8s-config/kubeadm.1.16.4.conf <<- 'EOF'
apiVersion: kubeadm.k8s.io/v1beta2
kind: ClusterConfiguration
kubernetesVersion: v1.16.4
apiServer:
  certSANs:    #填写所有kube-apiserver节点的hostname、IP、VIP
  - master01.k8s.io
  - master02.k8s.io
  - master03.k8s.io
  - master.k8s.io
  - dk-node1
  - 172.16.53.106
  - 172.16.53.107
  - 172.16.53.108
  - 172.16.53.137
  - 172.16.76.136
  - 127.0.0.1
controlPlaneEndpoint: "master.k8s.io:16443"
networking:
  podSubnet: "10.244.0.0/16"
EOF
```

- 6.2 master初始化

  ```
kubeadm init --config=kubeadm.1.16.4.conf
```

  ```
You can now join any number of control-plane nodes by copying certificate authorities
and service account keys on each node and then running the following as root:

  kubeadm join master.k8s.io:16443 --token ynaob5.49rz8ofxavp6hzes \
    --discovery-token-ca-cert-hash sha256:6e7859f3b9d8ede08e2202d3cd63c42f56c7d2503dc8c6fb9dc5f050b5c17bac \
    --control-plane

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join master.k8s.io:16443 --token ynaob5.49rz8ofxavp6hzes \
    --discovery-token-ca-cert-hash sha256:6e7859f3b9d8ede08e2202d3cd63c42f56c7d2503dc8c6fb9dc5f050b5c17bac
```

- 6.3 加载环境变量

  ```
echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >> ~/.zshrc
source ~/.zshrc
```

  本文所有操作都在root用户下执行，若为非root用户，则执行如下操作：

  ```
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
```

- 6.4 安装flannel网络

  ```
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/2140ac876ef134e0ed5af15c65e414cf26827915/Documentation/kube-flannel.yml

podsecuritypolicy.policy/psp.flannel.unprivileged created
clusterrole.rbac.authorization.k8s.io/flannel created
clusterrolebinding.rbac.authorization.k8s.io/flannel created
serviceaccount/flannel created
configmap/kube-flannel-cfg created
daemonset.apps/kube-flannel-ds-amd64 created
daemonset.apps/kube-flannel-ds-arm64 created
daemonset.apps/kube-flannel-ds-arm created
daemonset.apps/kube-flannel-ds-ppc64le created
daemonset.apps/kube-flannel-ds-s390x created
```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 七、control plane节点加入集群 </font>
</center>

 

- 7.1 证书分发

  > 在master01.k8s.io上运行脚本cert-main-master.sh，将证书分发至master02.k8s.io

  ```
tee /root/cert-main-master.sh  <<- 'EOF'
USER=root # customizable
CONTROL_PLANE_IPS="172.16.53.107 172.16.53.108"
CONTROL_PLANE_pkidir="/etc/kubernetes/pki"

for host in ${CONTROL_PLANE_IPS}; do
    ssh root@${host} "mkdir -p ${CONTROL_PLANE_pkidir}/etcd"
    scp /etc/kubernetes/pki/ca.crt "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/ca.key "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/sa.key "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/sa.pub "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/front-proxy-ca.crt "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/front-proxy-ca.key "${USER}"@$host:${CONTROL_PLANE_pkidir}/
    scp /etc/kubernetes/pki/etcd/ca.crt "${USER}"@$host:${CONTROL_PLANE_pkidir}/etcd/ca.crt
    # Quote this line if you are using external etcd
    scp /etc/kubernetes/pki/etcd/ca.key "${USER}"@$host:${CONTROL_PLANE_pkidir}/etcd/ca.key
done
EOF

sh /root/cert-main-master.sh
```

- 7.2 master02.k8s.io,master03.k8s.io加入集群

  ```
  kubeadm join master.k8s.io:16443 --token ynaob5.49rz8ofxavp6hzes \
    --discovery-token-ca-cert-hash sha256:6e7859f3b9d8ede08e2202d3cd63c42f56c7d2503dc8c6fb9dc5f050b5c17bac \
    --control-plane
```

- 6.3 master02.k8s.io,master03.k8s.io加载环境变量

  ```
echo "export KUBECONFIG=/etc/kubernetes/admin.conf" >> ~/.zshrc
source ~/.zshrc
```

  本文所有操作都在root用户下执行，若为非root用户，则执行如下操作：

  ```
mkdir -p $HOME/.kube
cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
chown $(id -u):$(id -g) $HOME/.kube/config
```


- 7.4 集群节点查看
  ```

# kubectl get nodes
NAME              STATUS   ROLES    AGE   VERSION
master01.k8s.io   Ready    master   6m    v1.16.4
master02.k8s.io   Ready    master   99s   v1.16.4
master03.k8s.io   Ready    master   46s   v1.16.4

# kubectl get pod -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
coredns-5644d7b6d9-bdnxl                  1/1     Running   0          5m54s
coredns-5644d7b6d9-hsbpl                  1/1     Running   0          5m54s
etcd-master01.k8s.io                      1/1     Running   0          5m10s
etcd-master02.k8s.io                      1/1     Running   0          109s
etcd-master03.k8s.io                      1/1     Running   0          56s
kube-apiserver-master01.k8s.io            1/1     Running   0          5m11s
kube-apiserver-master02.k8s.io            1/1     Running   0          110s
kube-controller-manager-master01.k8s.io   1/1     Running   1          4m52s
kube-controller-manager-master02.k8s.io   1/1     Running   0          110s
kube-flannel-ds-amd64-84b6w               1/1     Running   0          5m15s
kube-flannel-ds-amd64-df99l               1/1     Running   0          56s
kube-flannel-ds-amd64-jzt62               1/1     Running   1          110s
kube-proxy-fgcmg                          1/1     Running   0          56s
kube-proxy-r9rz2                          1/1     Running   0          5m54s
kube-proxy-s47gj                          1/1     Running   0          110s
kube-scheduler-master01.k8s.io            1/1     Running   1          4m56s
kube-scheduler-master02.k8s.io            1/1     Running   0          110s

# kubectl get cs
NAME                 AGE
scheduler            <unknown>
controller-manager   <unknown>
etcd-0               <unknown>
```

  > 执行`kubectl get cs`显示`<unknown>`是一个`1.16`版本已知的`bug`，后续官方应该会解决处理，有大佬分析了源码并且提交了pr，可[点此参考](https://segmentfault.com/a/1190000020912684)


- 7.5 测试集群
```
# 1 查看leader
# kubectl get endpoints kube-controller-manager -n kube-system -o yaml |grep holderIdentity

control-plane.alpha.kubernetes.io/leader: '{"holderIdentity":"master01.k8s.io_4b4f63f3-551e-4514-8aa9-a8fdbb13f1b4","leaseDurationSeconds":15,"acquireTime":"2020-03-24T02:40:32Z","renewTime":"2020-03-24T02:45:47Z","leaderTransitions":1}'


# 2 在master01.k8s.io 上执行 init 0 关机 模拟宕机

# 3 controller-manager和scheduler也发生了迁移
# kubectl get endpoints kube-controller-manager -n kube-system -o yaml |grep holderIdentity

control-plane.alpha.kubernetes.io/leader: '{"holderIdentity":"master02.k8s.io_457a8d6d-d0e4-4a8e-afbe-0c37f0dadf8d","leaseDurationSeconds":15,"acquireTime":"2020-03-24T02:46:03Z","renewTime":"2020-03-24T02:50:50Z","leaderTransitions":2}'

# 4 集群此时还是能正常操作
# kubectl get nodes
NAME              STATUS     ROLES    AGE   VERSION
master01.k8s.io   NotReady   master   17m   v1.16.4
master02.k8s.io   Ready      master   12m   v1.16.4
master03.k8s.io   Ready      master   11m   v1.16.4
```

![](http://zhangzw001.github.io/images/42/02.png)

![](http://zhangzw001.github.io/images/42/03.png)


- 7.6 导入集群到rancher
```
# 这里请自行在rancher界面生成(我这里是rancherv2.3.5)
curl --insecure -sfL https://rancher-dev.xxx.com/v3/import/68nzw8nlch92gshktcx2v5d8xvlvlk57nfgffz9jr7hxwfkwcbbtpz.yaml | kubectl apply -f -
```

![](http://zhangzw001.github.io/images/42/04.png)

