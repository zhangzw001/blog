---
title: linux遇到一些问题统计总结
copyright: true
date: 2019-09-26 17:33:38
tags:
  - linux
categories:
  - [技术文档]
  - [linux,问题总结]
top: 20
---
记录一些Linux,nginx或其他服务一些问题

<!-- more -->

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

### nginx问题: 静态文件分离

对于一般的nginx+php的方式, 我们php采用nobody用户,而代码/lumen采用web-www用户, 这样的好处是页面访问到/lumen时是nobody用户, 是无法修改代码的

可能我们需求是上用户upload图片等, 这时候就可能被传上某个a.php, 这就有可能被代码注入(一般来说图片是放cdn,配置单独域名回源的,这里是直接存在项目目录)

所以为了防止代码注入,我们需要限制upload目录的访问权限

```
# nginx配置如下
        location ~ /images/.*\.(gif|jpg|jpeg|png)$ {
            root /lumen/storage/uploads/;
        }

```

这样我们图片传到 /lumen/storage/uploads/images/ 目录, 访问是 www.xxx.com/images/x.png 来访问 且不允许其他类型文件访问.


### nginx问题: root 和alias
在配置文件映射的时候，如果使用了正则表达式，那么可能会出现无法访问文件，nginx可能会将所有的
文件都映射成为文件夹，导致文件映射失败的情况出现；

- root的例子
```
location /a/ {
	root /lumen/public;
}
这里实际访问的路径: www.xxx.com/a/ -> /lumen/public/a/
```

- alias的例子
```
# 注意这里目录最后加上/
location /a/ {
        alias /lumen/public/;
}
这里实际访问的路径: www.xxx.com/a/ -> /lumen/public/
```



### nginx问题: 隐藏版本信息
```
Syntax:  server_tokens on | off | build | string;
Default:  server_tokens on;
Context:  http, server, location
```

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

### mysql问题: mysql5.7 错误总结-ERROR 1067 (42000): Invalid default value for TIMESTAMP
```
show variables like 'sql_mode';
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| Variable_name | Value                                                                                                                                     |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| sql_mode      | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
```
这是因为sql_mode中的NO_ZEROR_DATE导制的，在strict mode中不允许'0000-00-00'作为合法日期

将上面的NO_ZERO_DATE改为下面的 ALLOW_INVALID_DATES
```
set sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
set session  sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

```
上面的设置是临时设置，在重新登陆后，该设置又恢复为NO_ZERO_DATE

