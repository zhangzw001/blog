---
title: 6-ceph安装部署
copyright: true
date: 2019-09-26 11:13:40
tags:
  - ceph
  - cephfs
  - k8s存储
categories:
  - 技术文档
  - ceph
---


### 参考教程
[Kubernetes 集成 Ceph 后端存储教程](https://blog.csdn.net/shida_csdn/article/details/78579043)
[centos7安装ceph集群](https://blog.csdn.net/zcc_heu/article/details/79017624)

### 1 准备
```
在 /etc/yum.repos.d/目录下创建 ceph.repo然后写入以下内容

[Ceph]
name=Ceph packages for $basearch
baseurl=http://mirrors.163.com/ceph/rpm-jewel/el7/$basearch
enabled=1
gpgcheck=0
type=rpm-md
gpgkey=https://mirrors.163.com/ceph/keys/release.asc
priority=1

[Ceph-noarch]
name=Ceph noarch packages
baseurl=http://mirrors.163.com/ceph/rpm-jewel/el7/noarch
enabled=1
gpgcheck=0
type=rpm-md
gpgkey=https://mirrors.163.com/ceph/keys/release.asc
priority=1

[ceph-source]
name=Ceph source packages
baseurl=http://mirrors.163.com/ceph/rpm-jewel/el7/SRPMS
enabled=1
gpgcheck=0
type=rpm-md
gpgkey=https://mirrors.163.com/ceph/keys/release.asc
priority=1

sudo scp /etc/yum.repos.d/ceph.repo dk-centos6:/etc/yum.repos.d/
sudo scp /etc/yum.repos.d/ceph.repo dk-centos7:/etc/yum.repos.d/

```

```
172.16.54.251 dk-centos5
172.16.54.252 dk-centos6
172.16.54.253 dk-centos7

useradd ceph
passwd ceph

vim /etc/sudoers
ceph All=(root) NOPAASSWD:ALL

su - ceph

sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://dl.fedoraproject.org/pub/epel/7/x86_64/
sudo yum install --nogpgcheck -y epel-release
sudo rpm --import /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
sudo rm /etc/yum.repos.d/dl.fedoraproject.org*
```

### 2 安装过请卸载

```
sudo ceph-deploy purge dk-centos5 dk-centos6 dk-centos7
sudo ceph-deploy purgedata dk-centos5 dk-centos6 dk-centos7
sudo ceph-deploy forgetkeys

```

### 3 安装ceph创建集群

```

sudo yum install ceph-deploy
ceph-deploy --version

#安装ceph,在deploy节点上建立cephinstall目录，我们首先来创建一个ceph cluster，这个环节需要通过执行ceph-deploy new {initial-monitor-node(s)}命令
sudo ceph-deploy new dk-centos5 dk-centos6 dk-centos7

# ceph.conf
[global]
osd pool default size = 2

# 安装ceph-release会报错,yum install ceph-release的是1.1版本
sudo ceph-deploy install --release jewel --repo-url http://mirrors.163.com/ceph/rpm-jewel/el7  dk-centos5 dk-centos6 dk-centos7
sudo ceph-deploy install dk-centos5 dk-centos6 dk-centos7
//配置初始 monitor(s)、并收集所有密钥
ceph-deploy mon create-initial
```

### 4 新建osd
#### 添加两个 OSD ，登录到 Ceph 节点、并给 OSD 守护进程创建一个目录。

```
ssh dk-centos6
sudo mkdir /var/local/osd0
exit

ssh dk-centos7
sudo mkdir /var/local/osd1
exit
```

#### 然后，从管理节点执行 ceph-deploy 来准备 OSD

```
ceph-deploy osd prepare dk-centos6:/var/local/osd0 dk-centos7:/var/local/osd1 dk-centos5:/var/local/osd2

//最后，激活 OSD
ceph-deploy osd activate dk-centos5:/var/local/osd2 dk-centos6:/var/local/osd0 dk-centos7:/var/local/osd1

//确保你对 ceph.client.admin.keyring 有正确的操作权限。
sudo chown -R ceph:ceph /etc/ceph

//检查集群的健康状况
ceph health 等 peering 完成后，集群应该达到 active + clean 状态。
```

#### 更新keyring文件到节点

```
scp *.keyring dk-centos5:/etc/ceph/
scp *.keyring dk-centos6:/etc/ceph/
scp *.keyring dk-centos7:/etc/ceph/
```

#### ceph health

```
HEALTH_WARN 64 pgs degraded; 64 pgs stuck degraded; 64 pgs stuck unclean; 64 pgs stuck undersized; 64 pgs undersized
```

### 5 配置k8s
#### 查看 mon 信息

```
ceph mon dump

dumped monmap epoch 1
epoch 1
fsid edd43684-b6ab-4cb1-a1f6-0ec4c036bc7d
last_changed 2018-07-20 16:03:58.763683
created 2018-07-20 16:03:58.763683
0: 172.16.54.251:6789/0 mon.dk-centos5
1: 172.16.54.252:6789/0 mon.dk-centos6
2: 172.16.54.253:6789/0 mon.dk-centos7
```

#### 为 kubernetes 准备 ceph 存储池,创建 rbd pool，名字叫做 kube

```
ceph osd pool create kube 256 256
```

#### 取得admin的密钥,后面用到

```
ceph auth get client.admin 2>&1 |grep "key = " |awk '{print  $3}'
AQAn/19bbb21GBAA1kc0HRWoGjeoPTRQziA03A==
```

#### 测试ceph是否正常

```
rbd create kube/test --size 1024 --image-format 2
rbd ls kube
rbd map kube/test
    # 如果报错, 警用
    rbd info kube/test
    rbd feature disable kube/test exclusive-lock object-map fast-diff deep-flatten

rbd map kube/test
rbd showmapped
mkfs.ext4 /dev/rbd0
mkdir /data/rbd0
mount /dev/rbd0 /data/rbd0
cd /data/rbd0 && echo test > test.txt

```

### k8s集成ceph
> 部署 rbd provisioner
在集群各机器导入 quay.io/external_storage/rbd-provisioner:v0.1.0 容器镜像

```
docker pull quay.io/external_storage/rbd-provisioner:v0.1.0
```

> 创建 kubernetes secret 密钥，注意使用实际获取到的密钥（245节点）
>
> [ 注意，任何需要使用 ceph 存储的 namespace 都需要配置，各命名空间不共享密钥 ]

```
mkdir /data/docker-ce-data/ceph
cd /data/docker-ce-data/ceph
echo "AQAn/19bbb21GBAA1kc0HRWoGjeoPTRQziA03A==" > secret
kubectl create secret generic ceph-admin-secret --from-file=secret --namespace=kube-system
kubectl create secret generic ceph-admin-secret --from-file=secret --namespace=default
```

