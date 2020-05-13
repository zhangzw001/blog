---
title: docker安装nginx第三方模块
copyright: true
date: 2020-05-13 11:12:01
tags:
  - docker 
---

由于hub.docker.com 官方的nginx 并不会包括第三方包, 这里简要说明如何安装nginx_upstream_check_module模块

<!--more-->





### 健康检查
- [nginx_upstream_check_module github 地址](https://github.com/yaoweibin/nginx_upstream_check_module)




### docker安装nginx
> 如果使用官方的nginx镜像, 这里无法安装第三方模块,并没有像php的docker-php-ext-install 工具,  因此这里采用源码安装

> 这里镜像的大小也控制的还可以

```
# 自己源码安装的镜像
hub.xxx.com/nginx  1.16.1-debian-buster-slim    5b5884f7927e        34 seconds ago      120MB

# 官方镜像
nginx              1.16                         588bb5d559c2        6 weeks ago         127MB
```

#### dockerfile
```
FROM debian:buster-slim

LABEL maintainer="zhangzw zhangzw@xxx.com"

ENV NGINX_VERSION   1.16.1
workdir /opt


RUN apt-get update \
   && apt-get install wget unzip gcc make openssl libssl-dev libpcre3 libpcre3-dev zlib1g-dev net-tools patch -y\
   && wget http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz \
   && wget https://codeload.github.com/yaoweibin/nginx_upstream_check_module/zip/master \
   && tar -xvf  nginx-${NGINX_VERSION}.tar.gz \
   && unzip master \
   && cd nginx-${NGINX_VERSION} \
   && patch -p1 < ../nginx_upstream_check_module-master/check_1.16.1+.patch \
   && ./configure --prefix=/etc/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --pid-path=/var/run/nginx.pid --lock-path=/var/run/nginx.lock --user=nginx --group=nginx --with-compat --with-file-aio --with-threads --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module  --with-mail_ssl_module --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module  --add-module=../nginx_upstream_check_module-master/ && make && make install \
  && rm -rf /opt/* \
  && apt-get remove --purge -y wget unzip gcc make patch \
  && apt-get autoremove -y \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* \
  && useradd nginx

run  ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
 && echo 'Asia/Shanghai' >/etc/timezone

expose 80

CMD ["/usr/sbin/nginx", "-c", "/etc/nginx/nginx.conf", "-g", "daemon off;"]
```



