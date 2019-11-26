---
title: systemd一些命令
copyright: true
date: 2019-11-26 10:34:10
tags:
  - systemd
categories:
  - [linux,systemd]
  - [shell,systemd]

top: 20
---

记录一些需要systemd命令
<!--more-->


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### systemd命令
- 查看服务启动配置: systemctl cat k3s
- 查看开机启动的服务列表：systemctl list-unit-files|grep enabled
- 查看启动失败的服务列表：systemctl --failed

- 重启服务：systemctl restart firewalld.service
- 显示状态：systemctl status firewalld.service
- 开机启用服务：systemctl enable firewalld.service
- 开机禁用服务：systemctl disable firewalld.service
- 查看开机启动：systemctl is-enabled firewalld.service


