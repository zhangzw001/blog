---
title: centos8初体验
copyright: true
date: 2020-09-25 10:11:28
tags:
  - centos8
categories:
  - [centos]
---
简单记录下 centos8的一些新的内容
<!--more-->


### 1. 时间同步通过chrony 支持
```
dnf install -y chrony

systemctl start chronyd.service
systemctl enable chronyd.service

# 查看所有可用区
timedatectl list-timezones

# 设置时区
timedatectl set-timezone Asia/Shanghai

# 手动同步
chronyc -a makestep
```
