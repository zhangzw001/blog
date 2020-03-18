---
title: 记一次nginx的request_time 和upstream_response_time差值很大问题
copyright: true
date: 2020-03-18 10:43:34
tags:
  - nginx
categories:
  - [技术文档]
  - [nginx,问题总结]
---
遇到一个接口, 经过了nginx反向代理,request_time时间是60s+, upstream_response_time 在0.5s左右

<!--more-->


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

首先问题描述我们发现后端响应时间没问题, 从前端和后端的日志都发现响应状态是200, 说明请求都是正常的

那为啥会响应时间这么长呢?

显然我们知道request_time:  指的是 从接受用户请求的第一个字节 到发送完响应数据的时间(包括接受请求数据时间,程序响应时间,输出响应时间)
