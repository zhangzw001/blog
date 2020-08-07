---
title: 记一次跨域的nginx配置问题
copyright: true
date: 2020-03-18 18:26:35
tags:
  - nginx
categories:
  - [技术文档]
  - [nginx,问题总结]
---
nginx跨域的Access-Control-Allow-Origin的配置 和多域名配置的问题
<!--more-->

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 简单配置 </font>
</center>

### 1. nginx 配置单个域名
```
        add_header Access-Control-Allow-Origin "a.test.com";
        add_header Access-Control-Allow-Methods GET,HEAD,PUT,PATCH,POST,DELETE;
        add_header Access-Control-Allow-Headers authorization,sign,vary-client;
```

### 2. nginx 配置所有域名
```
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Methods GET,HEAD,PUT,PATCH,POST,DELETE;
        add_header Access-Control-Allow-Headers authorization,sign,vary-client;
```

### 3. nginx 配置多域名

> 一开始我是这样配置的:
```
        ###################这里是配置多域名跨域配置
	set $F_Allow_Origin "127.0.0.1";
        #如果是允许的域名则设置Access-Control-Allow-Origin 为该$http_origin
        if ( "$http_origin" ~ "[a-z]+.zhangzw.com" ) {
               set $F_Allow_Origin "$http_origin";
        }
        add_header F_Allow_Origin "$http_origin";
        add_header Access-Control-Allow-Origin "$http_origin";
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Methods GET,HEAD,PUT,PATCH,POST,DELETE;
        add_header Access-Control-Allow-Headers authorization,sign,vary-client;
        ###################这里是配置多域名跨域配置
```

测试之后发现页面还是报没有Access-Control-Allow-Origin 头, 原因是我这边由b.test.com -> a.test.com, F_Allow_Origin自定义头并没有向下传递.

```
        ###################这里是配置多域名跨域配置
        #如果是允许的域名则设置Access-Control-Allow-Origin 为该$http_origin
        #if ( "$http_origin" !~ "[a-z]+.zhangzw.com" ) {
        #       return 403;
        #}
        add_header Bq_F_Allow_Origin "$http_origin";
        #add_header Access-Control-Allow-Origin "$http_origin";
        add_header Access-Control-Allow-Origin "*";
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Methods GET,HEAD,PUT,PATCH,POST,DELETE;
        add_header Access-Control-Allow-Headers authorization,sign,vary-client;
        ###################这里是配置多域名跨域配置
```


