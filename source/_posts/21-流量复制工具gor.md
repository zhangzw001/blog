---
title: 流量复制工具gor
copyright: true
date: 2019-10-28 14:04:37
tags:
  - gor
  - http流量复制工具
categories:
  - [流量复制工具,gor]
---
Gor 是一款go语言实现的简单的http流量复制工具，它的主要目的是使你的生产环境HTTP真实流量在测试环境和预发布环境重现
<!-- more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 流量复制工具 </font>
</center>


### 下载安装
github下载地址: [https://github.com/buger/goreplay/releases](https://github.com/buger/goreplay/releases)

```
tar -xvf gor_1.0.0_x64.tar.gz
mv gor /usr/bin/

which gor
```

###  命令
```
1   保存请求到文件
# 将本机所有80请求保存到gor-20171120_0.log文件(注意会生成很多文件)
gor --input-raw :80 --output-file gor-%Y%m%d.log

# --output-file-append 会生成gor-20171120.log文件
gor --input-raw :80 --output-file gor-%Y%m%d.log --output-file-append


2   根据文件回放请求
# 镜像qps回放
gor --input-file gor-aaaa-20171120.log --output-http aaaa-dev.test.com
# 两倍镜像qps回放
gor --input-file "gor-aaaa-20171120.log|200%" --output-http aaaa-dev.test.com


3   过滤url后保存请求到文件
# 排除s.test.com的请求
gor --input-raw :80 --output-file gor-%Y%m%d.log --output-file-append --http-disallow-header "Host: s.test.com" --http-disallow-header "Host: www.test.com"  --http-disallow-header "Host: bbs.test.com"
# 只存储aaaa.test.com的请求
gor --input-raw :80 --output-file gor-aaaa-%Y%m%d.log --output-file-append --http-allow-header "Host: aaaa.test.com"

# https的不能抓包
gor --input-raw :443 --output-file gor-ssl-aaaa-%Y%m%d.log --output-file-append --http-allow-header "Host: aaaa.test.com"





4   在线镜像复制请求
# 将生产aaaa.test.com的请求复制到 aaaa-dev.test.com 环境!
gor --input-raw :80 --output-http "aaaa-dev.test.com" --http-allow-header "Host: aaaa.test.com"
```


### 离线文件编辑
```
文件的每个请求通过 如下字符串分割!
ð<9f><90>µð<9f><99><88>ð<9f><99><89>
并且第一行是 请求的唯一码? 和时间戳!
1 9b366a8eab8d6cb8e557cb3bf43f69c36612cffb 1511165572419843000

所以可录制比如半小时的然后窃取需要的时间段!

```


### 问题  https 不能抓包!
> 通过添加代理, gor抓取8000端口

```
# SSL termination
server {
  listen 443 ssl;
  server_name aaaa.test.com;

  ssl_certificate /etc/ssl/nginx/server.crt;
  ssl_certificate_key /etc/ssl/nginx/server.key;

  location / {
    proxy_set_header Host $host;
    proxy_pass http://localhost:8000;
  }
}

server {
  listen 8000;
  server_name aaaa.test.com;

  location / {
    proxy_set_header Host $host;
    proxy_pass http://production_shop_api_site;
  }
}

```

