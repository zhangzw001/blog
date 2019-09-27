---
title: linux遇到一些问题统计总结
copyright: true
date: 2019-09-26 17:33:38
tags:
  - linux
categories:
  - 技术文档
  - linux
top: 20
---
记录一些Linux,nginx或其他服务一些问题

<!-- more -->

### nginx 隐藏版本信息
```
Syntax:  server_tokens on | off | build | string;
Default:  server_tokens on;
Context:  http, server, location
```

### linux 禁ping
```
# 一次性修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 开机自动修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 永久禁用,加入到/etc/sysctl.conf
net.ipv4.icmp_echo_ignore_all=1
```

### nginx 日志出现encode内容如何查看
```
# python2 执行decode
>>> print "\x22content\x22\x0D\x0A\x0D\x0A\xE8\x8A\x8A\xE8\x8A\x8A\xE8\xBF\x98\xE6\x80\x95\xE5\xA6\x9E\xE5\xA6\x9E\xE4\xB8\x8D\xE8\x80\x81\xE5\xAE\x9E\xEF\xBC\x8C\xE7\x89\xB9\xE5\x9C\xB0\xE8\xBF\x87\xE6\x9D\xA5\xE8\xA7\x86\xE5\xAF\x9F\xE4\xB8\x80\xE4\xB8\x8B\x0D\x0A".decode('utf-8')
```

### nginx default配置未设置
nginx 未设置default时, 如果直接访问服务器外网ip, 会去请求到第一个匹配的server段, 有可能会请求到后端的服务器的内容, 这很有可能暴露我们不想暴露的服务
一般来说开头添加如下配置
```
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        deny all;
	}
```

nginx 配置已经配置域名方式访问, 如果访问ip会返回403, 正常来说返回403已经不会对服务器造成压力了

> 可是万万没想到虽然返回了403, 但是也有700字节大小, 大量请求对小带宽来说还是有压力的

```
# 
server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        return 499;
   }

#其他location,if配置,
if ($host != a.example.com) {
    return 499;
}

```
