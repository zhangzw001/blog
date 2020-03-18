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

request_time:  		指的是 (Nginx 建立连接 到 接收完数据并关闭连接)
从代理nginx到后端(这里是php)建立连接到接受完数据然后关闭连接为止的时间

upstream_response_time:	指的是 (接受用户请求的第一个字节 到 发送完响应数据)
从接受用户请求的第一个字节 到发送完响应数据的时间(包括接受请求数据时间,程序响应时间,输出响应时间)

通过查看日志发现响应返回的字节量在 300k左右, 于是去看了下前端nginx的带宽, 并没有发现超过100%, 而且日志的同一时间的并不是所有请求都超过60s+

因此看起来服务端也正常, 应该是客户端问题

通过询问开发, 发现是测试在本机疯狂的点击,导致并发高, 而测试的网络环境是限速5m, 显然客户端带宽接收数据限制导致了服务端发送延迟.

