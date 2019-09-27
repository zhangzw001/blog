---
title: centos6安装nginx1.16+php7.2
copyright: true
date: 2019-09-27 14:39:07
tags:
  - nginx
  - php7
categories:
  - [技术文档]
  - [nginx]
---

记录简单的安装nginx和php的配置,仅供参考

<!-- more -->

### 先准备环境
```
# 更新源
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-6.repo
yum clean all
yum makecache
yum install -y epel-release

# 安装一些依赖包
yum -y install gcc make cmake ncurses-devel libxml2-devel libtool-ltdl-devel gcc-c++ autoconf automake bison  zlib-devel openssl-devel pcre-devel libxml2 libxml2-devel libcurl libcurl-devel autoconf automake  libtool-ltdl libtool-ltdl-devel libjpeg  libjpeg-turbo-devel libmcrypt-devel libpng-devel

```


### centos6编译安装nginx
```
#首先官网下载1.16
cd /usr/local/src/
wget http://nginx.org/download/nginx-1.16.0.tar.gz
tar -xvf nginx-1.16.0.tar.gz

# 编译简单的模块
./configure --prefix=/usr/local/nginx/  --with-http_ssl_module --with-http_stub_status_module  --with-http_stub_status_module
make -j4
make install

# 通过启动脚本启动
chmod +x /etc/init.d/nginx
service nginx start
# 开机启动
chkconfig nginx on
```

### nginx 启动脚本 /etc/init.d/nginx
```
#!/bin/bash
# nginx Startup script for the Nginx HTTP Server
# it is v.0.0.2 version.
# chkconfig: - 85 15
# description: Nginx is a high-performance web and proxy server.
#              It has a lot of features, but it's not for everyone.
# processname: nginx
# pidfile: /var/run/nginx.pid
# config: /usr/local/nginx/conf/nginx.conf

nginx=/usr/local/nginx/sbin/nginx
nginx_config=/usr/local/nginx/conf/nginx.conf
nginx_pid=/var/run/nginx.pid

RETVAL=0
prog="nginx"
# Source function library.
.  /etc/rc.d/init.d/functions
# Source networking configuration.
.  /etc/sysconfig/network
# Check that networking is up.
[ ${NETWORKING} = "no" ] && exit 0
[ -x $nginx ] || exit 0
# Start nginx daemons functions.
start() {
if [ -e $nginx_pid ];then
   echo "nginx already running...."
   exit 1
fi
   echo -n $"Starting $prog: "
   daemon $nginx -c ${nginx_config}
   RETVAL=$?
   echo
   [ $RETVAL = 0 ] && touch /var/lock/subsys/nginx
   return $RETVAL
}
# Stop nginx daemons functions.
stop() {
        echo -n $"Stopping $prog: "
        killproc $nginx
        RETVAL=$?
        echo
        [ $RETVAL = 0 ] && rm -f /var/lock/subsys/nginx /usr/local//nginx/logs/nginx.pid
}

reload() {
    echo -n $"Reloading $prog: "
    #kill -HUP `cat ${nginx_pid}`
    killproc $nginx -HUP
    RETVAL=$?
    echo
}
# See how we were called.
case "$1" in
start)
        start
        ;;
stop)
        stop
        ;;
reload)
        reload
        ;;
restart)
        stop
        start
        ;;
status)
        status $prog
        RETVAL=$?
        ;;
*)
        echo $"Usage: $prog {start|stop|restart|reload|status|help}"
        exit 1
esac
exit $RETVAL
```

### nginx.conf简单配置
```
user  nobody nobody;
worker_processes  auto;

worker_rlimit_nofile 102400;
pid        /var/run/nginx.pid;

events {
    use epoll;
    worker_connections 102400;
}


http {
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                 '"$http_user_agent" "$http_x_forwarded_for"';

    ###定义一个log_format
    log_format  main '[ $host $request_time  $upstream_addr $upstream_response_time ] ' '$status ' '$remote_addr - $remote_user [$time_local] "$request" '  '$body_bytes_sent "$http_referer" "$http_user_agent" "$http_x_forwarded_for " "$bytes_sent" " $request_body"' ;


    ###日志目录配置
    #日志全部写入/nginx_logs/access.log 文件中。关闭最后两个server_name的日志
    access_log  /data/nginx_logs/access.log  server_name_main;
    error_log /data/nginx_logs/error.log notice;

    ###杂项配置
    charset utf-8;
    #server name的hash表，
    server_names_hash_bucket_size 128;
    #请求头如果过小，那么会引起400错误。一般如果cookie过大，会引起问题。getconf PAGESIZE系统分页
    client_header_buffer_size 8k;
    client_body_buffer_size  512k;
    large_client_header_buffers 16 16k;
    client_max_body_size 30m;
    sendfile on;
    tcp_nopush     on;
    keepalive_timeout 60;
    tcp_nodelay on;

    #fastcgi通用配置
    fastcgi_connect_timeout 600;
    fastcgi_send_timeout 600;
    fastcgi_read_timeout 600;
    fastcgi_buffer_size 128k;
    fastcgi_buffers 8 256k;
    fastcgi_busy_buffers_size 256k;
    fastcgi_temp_file_write_size 256k;

    ###代理有关的配置
    proxy_connect_timeout    600;
    proxy_read_timeout       600;
    proxy_send_timeout       600;
    proxy_buffer_size        512k;
    proxy_buffers            6 512k;
    proxy_busy_buffers_size 512k;
    proxy_temp_file_write_size 512k;

    #或许在于测试,代理服务器不主动关闭客户端，防止499错误
    proxy_ignore_client_abort on;


    ###gzip配置
    gzip on;
    gzip_min_length  1k;
    gzip_buffers     4 16k;
    gzip_http_version 1.0;
    gzip_comp_level 2;
    gzip_types       text/plain application/x-javascript text/css application/xml;
    gzip_vary on;


    include             /usr/local/nginx/conf/mime.types;
    default_type        application/octet-stream;

    # 隐藏nginx版本信息
    server_tokens off;

    server {
        listen       80 default_server;
        server_name  _;
        #server_name  localhost;
        index  index.html index.htm;
        root   html;
        deny all;

        location / {
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }


}
```

### centos6编译安装php7
```
# 首先安装freetype2.4
tar -xvf freetype-2.4.0.tar.gz
cd freetype-2.4.0
./configure --prefix=/usr/local/freetype
make -j4 && make install


# 编译php7(不需要的可以去掉)
tar -xvf php-7.2.2.tar.gz
cd php-7.2.2
./configure    --prefix=/usr/local/php   --with-libxml-dir=/usr/   --with-pdo-mysql=mysqlnd   --with-zlib   --with-libxml-dir   --with-openssl   --enable-mysqlnd   --enable-mbstring   --with-config-file-path=/usr/local/php/etc/   --with-config-file-scan-dir=/usr/local/php/etc/conf.d   --enable-fpm --with-freetype-dir=/usr/local/freetype  --with-jpeg-dir --with-png-dir --with-gd --enable-gd-native-ttf --enable-pdo --enable-mbstring --enable-bcmath

make -j 4 && make install

# 安装composer
curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/bin/composer
```

### 配置
```
# php.ini配置(具体配置内容自行修改)
cp php.ini-production /usr/local/php7/etc/php.ini
cp /usr/local/php7/etc/php-fpm.conf.default /usr/local/php7/etc/php-fpm.conf
cp /usr/local/php7/etc/php-fpm.d/www.conf.default /usr/local/php7/etc/php-fpm.d/www.conf

# 启动脚本
cp ./sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
chmod +x /etc/init.d/php-fpm

# 创建link
ln -s /usr/local/php7 /usr/local/php
```

### 启动php-fpm
```
service php-fpm start
chkconfig php-fpm on
```
