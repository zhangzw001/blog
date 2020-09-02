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

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>
### Linux问题: 2020-09-02 一次dnsmasq迁移问题

> 网卡配置如下
```
DEVICE=em1
HWADDR=x
TYPE=Ethernet
UUID=x
ONBOOT=yes
NM_CONTROLLED=yes
BOOTPROTO=static
IPADDR0=172.16.76.100
PREFIX0=24
GATEWAY=172.16.76.1
DNS1=172.16.76.100
DNS2=172.16.76.101
```
> 这里有个大问题, 由于本身就是dns服务器, 但配置的DNS1居然是本机, 这导致service network restart 的时候会去修改 /etc/resolv.conf 的配置为


### Linux问题: 升级内核

```
rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org
rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm

# 查看可升级的内核
yum --disablerepo="*" --enablerepo="elrepo-kernel" list available
yum --enablerepo=elrepo-kernel install kernel-ml

# 查看已经安装的内核
cat /boot/grub2/grub.cfg |grep menuentry

# 设置5.3的为默认
grub2-set-default 'CentOS Linux (5.3.13-1.el7.elrepo.x86_64) 7 (Core)'

# grub2-editenv list
saved_entry=CentOS Linux (5.3.13-1.el7.elrepo.x86_64) 7 (Core)
```

### linux问题: tcpdump抓包tcp第三次握手ack为1
- 执行命令监听: tcpdump -n port 80 (想要详细信息加 -vv)

> 客户端 telnet x.x.x.x 80

日志如下:

```
tcpdump  -n port 80
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on enp0s3, link-type EN10MB (Ethernet), capture size 262144 bytes
11:16:40.689157 IP 192.168.54.141.53444 > 192.168.53.106.http: Flags [SEW], seq 1306124348, win 65535, options [mss 1460,nop,wscale 5,nop,nop,TS val 458678777 ecr 0,sackOK,eol], length 0
11:16:40.689724 IP 192.168.53.106.http > 192.168.54.141.53444: Flags [S.E], seq 1553518959, ack 1306124349, win 64308, options [mss 1410,sackOK,TS val 4208119240 ecr 458678777,nop,wscale 7], length 0
11:16:40.690320 IP 192.168.54.141.53444 > 192.168.53.106.http: Flags [.], ack 1, win 4106, options [nop,nop,TS val 458678778 ecr 4208119240], length 0
```
这里第一和第二次握手都没有问题, 第三次 ack 1, 并非是seq+1

这里提一下ACK, ACK 是确认值, ack 是确认编号, 第一次握手ACK=0,在第二次握手开始ACK=1, 而ack是=seq+1(收到的随机数+1)

那么这里ack 1 是啥呢?  ... 应该就是默认tcpdump 显示成相对值了, 通过-S 参数会显示绝对值

- 执行命令监听: tcpdump -S  -n port 80

```
tcpdump: verbose output suppressed, use -v or -vv for full protocol decode
listening on enp0s3, link-type EN10MB (Ethernet), capture size 262144 bytes
11:16:54.806628 IP 192.168.54.141.53516 > 192.168.53.106.http: Flags [S], seq 316359286, win 65535, options [mss 1460,nop,wscale 5,nop,nop,TS val 458692791 ecr 0,sackOK,eol], length 0
11:16:54.806861 IP 192.168.53.106.http > 192.168.54.141.53516: Flags [S.], seq 1113466641, ack 316359287, win 64308, options [mss 1410,sackOK,TS val 4208133357 ecr 458692791,nop,wscale 7], length 0
11:16:54.807576 IP 192.168.54.141.53516 > 192.168.53.106.http: Flags [.], ack 1113466642, win 4106, options [nop,nop,TS val 458692792 ecr 4208133357], length 0
```

三次握手图
![三次握手图](/images/tcp三次握手图.png)

四次挥手图
![四次挥手图](/images/tcp四次挥手图.png)


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### linux问题: 禁ping

```
# 一次性修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 开机自动修改
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

# 永久禁用,加入到/etc/sysctl.conf
net.ipv4.icmp_echo_ignore_all=1
```

---

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### linux问题: 文件锁问题

```
问题描述: php slowlog 出现session_start() 慢
问题原因: 我们这边有A 和B 两个二级域名,A 会请求 B, 并且由于测试环境在同一台服务器,公用一个php,所以在发生调用的时候同时写了session,而php的sessions配置是默认的file方式, 这就造成了锁的问题
问题解决: 
1. 修改代码部分
2. php的session配置改成redis
    session.save_handler = redis
    session.save_path = "tcp://x.x.x.x:xxxx"
```

---
<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

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

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### nginx if 条件 && 的实现

- 1 允许所有人访问 a.php|b.php|c.php|d.php|e.php 
- 2 仅允许127.0.0.1|172.16.0.2 ip可以访问 aa.php|bb.php 

```
set $flag "allow";
# 以下php 所有人可以访问
if ( $fastcgi_script_name ~ (a.php|b.php|c.php|d.php|e.php) ) {
        set $flag "allow_php_ip";
}

# 以下php 仅固定ip可以访问
if ($fastcgi_script_name ~ (aa.php|bb.php)) {
        set $flag "${flag}_php";
}

if ( $proxy_add_x_forwarded_for ~ (127.0.0.1|172.16.0.2)) {
        set $flag "${flag}_ip";
}
# 写包含是 $flag 可能为 "allow_php_ip_ip" (在允许的ip服务器(127.0.0.1)上访问 /a.php)
if ( $flag !~ "allow_php_ip" ) {
        return 403;
}
```

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


---
<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

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



---
<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### nginx问题: 隐藏版本信息

```
Syntax:  server_tokens on | off | build | string;
Default:  server_tokens on;
Context:  http, server, location
```

---
<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### nginx问题: 日志出现encode内容如何查看

```
# python2 执行decode
>>> print "\x22content\x22\x0D\x0A\x0D\x0A\xE8\x8A\x8A\xE8\x8A\x8A\xE8\xBF\x98\xE6\x80\x95\xE5\xA6\x9E\xE5\xA6\x9E\xE4\xB8\x8D\xE8\x80\x81\xE5\xAE\x9E\xEF\xBC\x8C\xE7\x89\xB9\xE5\x9C\xB0\xE8\xBF\x87\xE6\x9D\xA5\xE8\xA7\x86\xE5\xAF\x9F\xE4\xB8\x80\xE4\xB8\x8B\x0D\x0A".decode('utf-8')
```

---
<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

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

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### nginx1.11以前trace_id 生成问题
- 如果是前端(upstream)

```
log_format  server_name_main '"$request_trace_id" [ $host $request_time ] ' '[ $upstream_addr $upstream_response_time ] ' '$status ' '$remote_addr - $remote_user [$time_local] "$request" '  '$body_bytes_sent "$http_referer" '
                     '"$http_user_agent" "$http_x_forwarded_for" "$bytes_sent"'    '{$request_body}' ;
...

server {
        set $request_trace_id $pid$connection$bytes_sent$msec;
            if ( $http_x_request_id != "" ){
                        set $request_trace_id $http_x_request_id;
                }
        add_header  Bq_F_Traceid $request_trace_id;
	# 一定要写到location中, 因为proxy_pass
	location / {

		proxy_pass http://xxxx;
                proxy_set_header  X-Request-Id        $request_trace_id;

	}
}
```

- 如果是后端节点

```
# 一定要写到server段, 否则后端可能报404错误
server {
	listen 80;
    	server_name  openapi-community-alpha.zhangzw.com ;
        set $request_trace_id trace-id-$pid-$connection-$bytes_sent-$msec;
                # 如果请求头中已有该参数,则获取即可;如果没有,则使用$request_id进行填充
                set $temp_request_id $http_x_request_id;
                if ($temp_request_id = "") {
                    set $temp_request_id $request_trace_id;
                }
                # 屏蔽掉原来的请求头参数
                # proxy_set_header  x_request_id        "";
                proxy_set_header  X-Request-Id "";
                # 设置向后转发的请求头参数
                proxy_set_header  X-Request-Id        $temp_request_id;
	location / {
		try_files $uri $uri/ /index.php?$query_string;
	}
}
```


### 修改swap

```
dd if=/dev/zero of=/data/swapfilenew bs=4096 count=4096000

swapoff -a 

/sbin/mkswap  /data/swapfilenew
/sbin/swapon  /data/swapfilenew

vim /etc/fstab
/data/swapfilenew none swap defaults 0 0
```
