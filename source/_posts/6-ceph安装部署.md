---
title: ceph安装部署
copyright: true
date: 2019-09-26 11:13:40
tags:
  - ceph
  - cephfs
  - k8s
  - k8s存储
categories:
  - [技术文档]
  - [存储,ceph]
---

Ceph是一个统一的分布式存储系统，设计初衷是提供较好的性能、可靠性和可扩展性。

<!-- more-->

### 简单了解什么是块存储/对象存储/文件系统存储？

ceph 目前提供对象存储（RADOSGW）、块存储RDB以及 CephFS 文件系统这 3 种功能。对于这3种功能介绍，分别如下：

1. 对象存储，也就是通常意义的键值存储，其接口就是简单的GET、PUT、DEL 和其他扩展，代表主要有 Swift 、S3 以及 Gluster 等；

2. 块存储，这种接口通常以 QEMU Driver 或者 Kernel Module 的方式存在，这种接口需要实现 Linux 的 Block Device 的接口或者 QEMU 提供的 Block Driver 接口，如 Sheepdog，AWS 的 EBS，青云的云硬盘和阿里云的盘古系统，还有 Ceph 的 RBD（RBD是Ceph面向块存储的接口）。在常见的存储中 DAS、SAN 提供的也是块存储；

3. 文件存储，通常意义是支持 POSIX 接口，它跟传统的文件系统如 Ext4 是一个类型的，但区别在于分布式存储提供了并行化的能力，如 Ceph 的 CephFS (CephFS是Ceph面向文件存储的接口)，但是有时候又会把 GlusterFS ，HDFS 这种非POSIX接口的类文件存储接口归入此类。当然 NFS、NAS也是属于文件系统存储；


### 参考教程
[Kubernetes 集成 Ceph 后端存储教程](https://blog.csdn.net/shida_csdn/article/details/78579043)
[centos7安装ceph集群](https://blog.csdn.net/zcc_heu/article/details/79017624)

###  准备
#### 配置源
```
cat >/etc/yum.repos.d/ceph.repo<<EOF
[ceph]
name=ceph
baseurl=http://mirrors.aliyun.com/ceph/rpm-jewel/el7/x86_64/
gpgcheck=0
priority=1

[ceph-noarch]
name=cephnoarch
baseurl=http://mirrors.aliyun.com/ceph/rpm-jewel/el7/noarch/
gpgcheck=0
priority=1

[ceph-source]
name=Ceph source packages
baseurl=http://mirrors.163.com/ceph/rpm-jewel/el7/SRPMS
enabled=0
gpgcheck=1
type=rpm-md
gpgkey=http://mirrors.163.com/ceph/keys/release.asc
priority=1
EOF

```


#### 安装过卸载
```
ceph-deploy purge dk1-t dk2-t
ceph-deploy purgedata dk1-t dk2-t
ceph-deploy forgetkeys

```


### 在dk2-t节点创建集群 mon模块
```
yum install ceph-deploy -y
ceph-deploy --version

mkdir /data/ceph
cd /data/ceph
ceph-deploy new dk2-t

# 查看配置文件
ls -l

# 配置ceph.conf
[global]
...
# 如果有多个网卡，应该配置如下选项，
# public network是公共网络，负责集群对外提供服务的流量
# cluster network是集群网络，负载集群中数据复制传输通信等
# 本次实验使用同一块网卡，生境环境建议分别使用一块网卡
public network = 192.168.0.0/22
cluster network = 192.168.0.0/22
osd pool default size = 2


# 安装 ceph 包
# 如果按照官方文档安装方法 会重新配置安装官方ceph源
# 由于网络问题，安装可能会出错，需要多次执行
# ceph-deploy install 其实只是会安装 ceph ceph-radosgw 两个包
# ceph-deploy install lab1 lab2 lab3
# 推荐使用阿里源安装，因为使用ceph-deploy安装会很慢
# 使用如下命令手动安装包，替代官方的 ceph-deploy install 命令
# 如下操作在所有node节点上执行
export CEPH_DEPLOY_REPO_URL=http://mirrors.163.com/ceph/rpm-luminous/el7
export CEPH_DEPLOY_GPG_URL=http://mirrors.163.com/ceph/keys/release.asc

# 先执行是因为 ceph-deploy install太慢
yum install -y ceph ceph-radosgw
ceph-deploy install dk2-t


# 部署monitor和生成keys
ceph-deploy mon create-initial
ls -l *.keyring

# 复制文件到node节点
ceph-deploy dk1-t dk2-t

# 额外mon节点，mon节点也需要高可用
ceph-deploy mon add dk1-t
```


### 在dk2-t节点创建集群 mgr模块
```
# 部署manager （luminous+）12及以后的版本需要部署
# 本次部署 jewel 版本 ，不需要执行如下命令
 ceph-deploy mgr create dk2-t
```

### 在dk2-t节点创建集群 osd模块
```
# 12的版本(这里挂载一个 10G的磁盘 /dev/sdb)
# create 命令一次完成准备 OSD 、部署到 OSD 节点、并激活它。 create 命令是依次执行 prepare 和 activate 命令的捷径。
ceph-deploy osd create --data /dev/sdb dk2-t
ceph-deploy osd create --data /dev/sdc dk1-t
```


### 如何卸载osd
```
# 查看
ceph osd tree

# 节点状态标记为out
ceph osd out osd.0

# 从crush中移除节点
ceph osd crush remove osd.0

# 删除节点
ceph osd rm osd.0

# 删除节点认证（不删除编号会占住）
ceph auth del osd.0
```


#### 查看 mon 信息

```
ceph mon dump

dumped monmap epoch 1
epoch 1
fsid 4620d0c7-4458-4ff9-9296-d1318058bafc
last_changed 2019-06-19 14:44:41.361005
created 2019-06-19 14:44:41.361005
0: 192.168.0.134:6789/0 mon.dk2-t
```

#### 配置文件内容 /etc/ceph/ceph.conf
```
[global]
public network = 192.168.0.0/22
cluster network = 192.168.0.0/22
osd pool default size = 2
fsid = 4620d0c7-4458-4ff9-9296-d1318058bafc
mon_initial_members = dk2-t
mon_host = 192.168.0.134
auth_cluster_required = cephx
auth_service_required = cephx
auth_client_required = cephx
mon_max_pg_per_osd = 1000
```



### ceph 一些测试命令

####  创建 rbd pool，名字叫做 kube
```
ceph osd pool create kube 256 256
```

#### 如何取得admin的密钥

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


---




### 在k8s 手动创建存储类
#### 创建ceph pg
```
# Total PGs = (Total_number_of_OSD * 100) / max_replication_count
# pg = 1 * 100 /2 ~ 64(取2的次方数)

# 这里准备创建2个pool, 每个pool
ceph osd pool create rbd-k8s 16

# 查看
ceph osd lspools

# 创建image
rbd create rbd-k8s/cephimageredis --size 500M

# 查看list
rbd list rbd-k8s

# 处理新特性
# 查看info
rbd info rbd-k8s/cephimageredis

# 关闭exclusive-lock object-map fast-diff deep-flatten 这些特性
rbd feature disable  rbd-k8s/cephimageredis exclusive-lock object-map fast-diff deep-flatten
```

#### 首先创建secret
```
#获取key
grep key /etc/ceph/ceph.client.admin.keyring |awk '{printf "%s", $NF}'|base64
```

- **ceph-secret.yaml**
```
apiVersion: v1
kind: Secret
metadata:
  name: ceph-secret
type: "kubernetes.io/rbd"
data:
  key: QVFCTFo2dGNGNXFLRnhBQXBGTXJEdm5CY2k2UGtwZmZrN0JSVEE9PQ==
```

#### 其次创建pv, pv是没有namespace概念的
> persistentVolumeReclaimPolicy是清理规则 (retain: 不清理, Recycle: 回收)
- **redis-ceph-pv.yml**
```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: redis2-ceph-rbd-pv
spec:
  capacity:
    storage: 100Mi
  accessModes:
    - ReadWriteOnce
  rbd:
    monitors:
      - '192.168.0.134:6789'
    pool: rbd-k8s
    image: cephimageredis
    user: admin
    secretRef:
      name: ceph-secret
    fsType: ext4
    readOnly: false
  persistentVolumeReclaimPolicy: Recycle
```

- **执行部署pv**
```
kubectl create -f redis-ceph-pv.yml
```

#### 然后创建pvc
- **redis-ceph-pvc.yml**

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: redis2-ceph-rbd-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi
```

- **执行部署pvc**
```
kubectl create -f redis-ceph-pvc.yml
```

#### 最后在rancher上选择挂载rbd

![rancher-pv](https://zhangzw001.github.io/images/blog6/rancher-pv.png)


---




