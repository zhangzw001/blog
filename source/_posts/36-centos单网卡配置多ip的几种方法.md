---
title: centos单网卡配置多ip的几种方法
copyright: true
date: 2020-02-27 11:48:51
tags:
  - linux
  - ip
categories:
  - [技术文档]
  - [linux]
  - [网卡]
---
centos单网卡配置多ip的几种方法
<!-- more -->


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 方法一 新建IP别名
> 临时设置, 不需要重启
```
ifconfig enp0s3:1 172.16.53.109/24
ifconfig enp0s3:1 down
```

> 配置文件设置, 需要重启
```
#cat ifcfg-enp0s3:1
DEVICE=enp0s3
IPADDR=172.16.53.109
NETMASK=255.255.255.0

# 重启网络
service network restart

# 查看(ifconfig 也可以查看)
ip a 或ifconfig
```


### 方法二  临时设置, 不需要重启
```
ip addr add 172.16.53.110/24 dev enp0s3 label enp0s3:2
```

### 方法三  临时设置, 不需要重启

```
ifconfig enp0s3:3 172.16.53.111 netmask 255.255.255.0
```

### 方法四 同一个配置文件设置, 需要重启。IP地址没有别名不好进行管理。
```
#cat ifcfg-enp0s3
DEVICE=enp0s3
IPADDR=172.16.53.106
IPADDR1=172.16.53.112
IPADDR2=172.16.53.113
PREFIX=24
PREFIX1=24
PREFIX2=24

# 重启网络
service network restart

# 查看(ifconfig 不可以查看)
ip a 
```

> 注:
这里奇怪的是, 实际配置中,出现个别ip使用方法二,三时仅部分内网可以联通,例如
10.10.76.1 通过方法二配置, 从10.10.76.2上可以ping通, 但是从10.10.53.1上无法ping通(10.10.53.1和10.10.76.2是可以ping通)
但是通过方法四配置就正常... 目前没有找到原因... 或与公司路由器有关
