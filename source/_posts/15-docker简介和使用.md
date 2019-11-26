---
title: docker简介和使用
copyright: true
date: 2019-10-16 15:31:08
tags:
  - docker
categories:
  - [docker]

---

简单介绍docker 

<!-- more -->

### docker

### k8s支持的docker 版本查看

这里我们使用年份命名版本的docker-ce，假设我们要安装v1.16.3的k8s，我们去 [https://github.com/kubernetes/kubernetes](https://github.com/kubernetes/kubernetes) 里进对应版本的`CHANGELOG-1.16.md`里搜`The list of validated docker versions remain`查找支持的docker版本，docker版本不一定得在支持列表里，实际上19.03也能使用，这里我们使用docker官方的安装脚本安装docker(该脚本支持centos和ubuntu)
```
export VERSION=19.03
curl -fsSL "https://get.docker.com/" | bash -s -- --mirror Aliyun

```
