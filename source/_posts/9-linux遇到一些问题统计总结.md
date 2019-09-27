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

```


### linux问题: 禁ping
```
# 一次性修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 开机自动修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 永久禁用,加入到/etc/sysctl.conf
net.ipv4.icmp_echo_ignore_all=1
```


### Linux问题: 文件锁问题
```
问题描述: php slowlog 出现session_start() 慢
问题原因: 我们这边有A 和B 两个二级域名,A 会请求 B, 并且由于测试环境在同一台服务器,公用一个php,所以在发生调用的时候同时写了session,而php的sessions配置是默认的file方式, 这就造成了锁的问题
问题解决: 
1. 修改代码部分
2. php的session配置改成redis
    session.save_handler = redis
    session.save_path = "tcp://x.x.x.x:xxxx"
```

### linux问题: 内存释放问题
```
问题描述: 开发这边写了个统计脚本, 占用49G内存, 从日志发现脚本已经全部执行完成, 但是php脚本依然存在
问题原因: 通过 strace -p pid 观察进程, 发现是持续性的做内存释放操作 munmap(0x7f6db77ad000, 266240)          = 0
持续执行munmap函数是因为一直在释放内存(毕竟49G), 结果 =0 说明内存释放执行函数是返回正常了
问题解决: 
1. 修改代码降低内存
2. 等待一段时间内存会释放完成(测试80分钟释放完毕)
```
---




### nginx问题: 隐藏版本信息
```
Syntax:  server_tokens on | off | build | string;
Default:  server_tokens on;
Context:  http, server, location

### nginx问题: 日志出现encode内容如何查看
```
# python2 执行decode
>>> print "\x22content\x22\x0D\x0A\x0D\x0A\xE8\x8A\x8A\xE8\x8A\x8A\xE8\xBF\x98\xE6\x80\x95\xE5\xA6\x9E\xE5\xA6\x9E\xE4\xB8\x8D\xE8\x80\x81\xE5\xAE\x9E\xEF\xBC\x8C\xE7\x89\xB9\xE5\x9C\xB0\xE8\xBF\x87\xE6\x9D\xA5\xE8\xA7\x86\xE5\xAF\x9F\xE4\xB8\x80\xE4\xB8\x8B\x0D\x0A".decode('utf-8')
```

### nginx问题: default配置未设置
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



---




### mysql问题: navicat连接数据库很慢
```
报错: 2013-Lost connection to MYSQL server at 'reading for initial communication packet'
说明: 只有windows 的navicat会出现上面报错, windows上通过mysql命令连接时 也很慢

#添加如下内容:
[mysqld]
skip-name-resolve
```


---

