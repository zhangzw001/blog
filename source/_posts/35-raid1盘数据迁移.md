---
title: raid1盘数据迁移
copyright: true
date: 2020-02-27 09:54:38
tags:
  - raid
categories:
  - [技术文档]
  - [raid]
---

dell PowerEdge 1950 服务器两块盘做raid1的linux操作系统, 开机后无限重启的一次数据迁移

<!-- more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


> 考虑到raid1数据是互为备份,直接取一块盘应该能够拿到所有数据


1. 首先对dell PowerEdge 1950 服务器 开机, 在提示ctrl +c的页面上进入sas页面, 进入选中磁盘后回车, 然后选择 SAS Topology页面, 可以看到是两块盘做的raid1

>  raid1 信息确认完毕


2. 关闭1950服务器, 取下其中一块盘,  这里看到硬盘是sata盘

3. 考虑到该盘不确定是否支持热插拔, 这里是将sata盘放入usb盘接到某台Linux服务器, 然后挂载, 挂载注意fdisk -l 看下具体分区, 我这里是/dev/sdb3

    mount /data /dev/sdb3

4. 进入/data, 就会看到raid1硬盘中保留的所有数据

