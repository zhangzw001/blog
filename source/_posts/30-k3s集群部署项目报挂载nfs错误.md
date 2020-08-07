---
title: k3s集群部署项目报挂载nfs错误
copyright: true
date: 2019-11-25 17:37:23
tags:
  - k3s
categories:
  - [技术文档]
  - [k3s]
  - [nfs]
---
体验轻量级k8s集群遇到一些nfs问题
<!-- more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>



### 部署服务器查看describe信息如下:

```
Mounting command: systemd-run
Mounting arguments: --description=Kubernetes transient mount for /var/lib/kubelet/pods/369daaef-1e90-446b-92ce-3d562f94b429/volumes/kubernetes.io~nfs/pvc-f462c606-5796-4c48-8928-7822f3fa0605 --scope -- mount -t nfs 192.168.x.x:/data-nfs/nfs/k3s/ns-elastic5-es520-2-dev-nfs-es520-2-dev-1-pvc-f462c606-5796-4c48-8928-7822f3fa0605 /var/lib/kubelet/pods/369daaef-1e90-446b-92ce-3d562f94b429/volumes/kubernetes.io~nfs/pvc-f462c606-5796-4c48-8928-7822f3fa0605
Output: Running scope as unit run-14829.scope.
mount: 文件系统类型错误、选项错误、192.168.x.x:/data-nfs/nfs/k3s/ns-elastic5-es520-2-dev-nfs-es520-2-dev-1-pvc-f462c606-5796-4c48-8928-7822f3fa0605 上有坏超级块、
       缺少代码页或助手程序，或其他错误
       (对某些文件系统(如 nfs、cifs) 您可能需要
       一款 /sbin/mount.<类型> 助手程序)
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 分析
- 猜测1 可能是nfs的系统格式和集群node节点文件格式不同
```
# 查看发现nfs是ext4, 然后集群中其他的磁盘都是xfs
df -T|egrep -v "contai|var|overl"

所以新挂了块磁盘,格式化为xfs然后再次实验,发现错误同样...
```

- 猜测2 可能是客户端无法识别nfs格式
```
# 做个测试
mkdir /tmp/abc
mount -t nfs 192.168.x.x:/data-nfs/nfs/k3s/ns-elastic5-es520-2-dev-nfs-es520-2-dev-1-pvc-f462c606-5796-4c48-8928-7822f3fa0605 /tmp/abc


# 果然报错
mount: wrong fs type, bad option, bad superblock on 192.168.x.x:/data-nfs/nfs/k3s/ns-elastic5-es520-2-dev-nfs-plugins,
       missing codepage or helper program, or other error
       (for several filesystems (e.g. nfs, cifs) you might
       need a /sbin/mount.<type> helper program)

       In some cases useful info is found in syslog - try
       dmesg | tail or so.
```

所以安装了nfs即可
```
yum install nfs
```

