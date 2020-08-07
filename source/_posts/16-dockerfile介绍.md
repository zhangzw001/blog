---
title: Dockerfile介绍
copyright: true
date: 2019-10-16 15:33:17
tags:
  - docker
categories:
  - [docker,Dockerfile]
---


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=5> Dockerfile </font>
</center>

<!-- more -->

本文摘录于: [如何快速将容器云镜像大小精简98%？](https://mp.weixin.qq.com/s/LOXNMYtZbnYeDR2lBI56fw)


### Dockerfile 文件有自己的书写格式和支持的命令，常用的Dockerfile 指令有：

- FROM  指定基镜像。
- MAINTAINER  设置镜像的作者信息，如作者姓名、邮箱等。
- COPY  将文件从本地复制到镜像，拷贝前需要保证本地源文件存在。
- ADD  与 COPY 类似，复制文件到镜像。不同的是，如果文件是归档文件（tar, zip, tgz, xz 等），会被自动解压。
- ENV  设置环境变量，格式: ENV key=value或ENV key value，运行容器后，可直接在容器中使用。
- EXPOSE  暴露容器中指定的端口，只是一个声明，主要用户了解应用监听的端口。
- VOLUME  挂载卷到容器，需要注意的是，保存镜像时不会保存卷中的数据。
- WORKDIR  设置当前工作目录，后续各层的当前目录都被指定。
- RUN  在容器中运行指定的命令。
- CMD  容器启动时运行的命令。Dockerfile 中可以有多个 CMD 指令，但只有最后一个生效。CMD 可以被 docker run 之后的参数替换。
- ENTRYPOINT  设置容器启动时运行的命令。Dockerfile 中可以有多个 ENTRYPOINT 指令，但只有最后一个生效。CMD 或 docker run 之后的参数会被当做参数传递给 ENTRYPOINT，这个是与CMD的区别。

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=5> 容器的原理 </font>
</center>


容器镜像中最重要的概念就是layers，即镜像层。

> 容器的原理

![容器的原理](/images/16/容器的原理-1.png)

镜像层依赖于一系列的底层技术，比如文件系统(filesystems)、写时复制(copy-on-write)、联合挂载(union mounts)等技术
查看Docker 官方文档[https://docs.docker.com/storage/storagedriver/](https://docs.docker.com/storage/storagedriver/)进行学习。

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=5> 每条指令都创建一个镜像层，会增加镜像的大小 </font>
</center>

### 下面看个例子

这里我有一个1.2M的镜像
```
docker images|grep busybox
busybox                 latest              19485c79a9bb        5 weeks ago         1.22MB
```

我们基于busybox写一个Dockerfile来build
```
#cat Dockerfile
from busybox:latest

run mkdir /tmp/dir \
    && dd if=/dev/zero of=/tmp/dir/file1 bs=1M count=10

run rm -f /tmp/dir/file1

```

执行build
```
docker build -t busybox-test .
Sending build context to Docker daemon  2.048kB
Step 1/3 : from busybox:latest
 ---> 19485c79a9bb
Step 2/3 : run mkdir /tmp/dir     && dd if=/dev/zero of=/tmp/dir/file1 bs=1M count=10
 ---> Running in 0426f92c77ed
10+0 records in
10+0 records out
10485760 bytes (10.0MB) copied, 0.003785 seconds, 2.6GB/s
Removing intermediate container 0426f92c77ed
 ---> 5ec75db090c9
Step 3/3 : run rm -f /tmp/dir/file1
 ---> Running in 540e7d0a5aea
Removing intermediate container 540e7d0a5aea
 ---> 00041489cc0e
Successfully built 00041489cc0e
Successfully tagged busybox-test:latest
```

查看image大小
```
docker images|grep busybox
busybox-test            latest              00041489cc0e        10 minutes ago      11.7MB
busybox                 latest              19485c79a9bb        5 weeks ago         1.22MB
```

??? 我不是rm删除了创建的/tmp/dir/file1 文件吗? 难道它还在? 来,我们测试一下
```
# 查看目录下是否有文件
docker run -ti busybox-test ls /tmp/dir
```

结果显然是空...

喔,,, 因为"在Dockerfile中，每条指令都会创建一个镜像层，继而会增加镜像整体的大小", 在看我们写的Dockerfile,
我们第一个run 执行的时候, 这里假装叫 (run1层), 我们生成了file1文件
当执行第二个run的时候, 我们处在了 (run2层), (run1层)已经是父层,是个只读层了,只有当前层可写, 虽然我们在 (run2层)删除了这个文件,但删除的仅仅是份拷贝而已, 这就是写时复制.

所以以上的优化应该是: 写成一条run
```
#cat Dockerfile
from busybox:latest

run mkdir /tmp/dir \
    && dd if=/dev/zero of=/tmp/dir/file1 bs=1M count=10 \
    && rm -f /tmp/dir/file1

# build
docker build -t busybox-test2 .
```

结果显然
```
docker images|grep busybox
busybox-test2           latest              faf8b7d4f140        3 seconds ago       1.22MB
busybox-test            latest              00041489cc0e        10 minutes ago      11.7MB
busybox                 latest              19485c79a9bb        5 weeks ago         1.22MB
```

虽然说这里的测试没有干任何事情, 但我们在写Dockerfile的时候需要注意, 两个run之间是两个不同的 可写层!

简单总结精简镜像大小的方法:
```
1 使用更小的基础镜像,注意一些很小的镜像可能缺少很多依赖库,例如查看redis依赖库 ldd /usr/bin/redis-cli
2 合并Dockerfilec指令精简(可以的话写成一条run)
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font face="黑体" size=5> 一些小的镜像 </font>
</center>

- 1 scratch: 一个空的镜像, 无法pull -.-!!! , 写在Dockerfile是可以的

- 2 alpine: 5M的linux镜像,有包管理工具apk
```
FROM scratch
ADD alpine-minirootfs-3.10.2-x86_64.tar.gz /
CMD ["/bin/sh"]
```

- 3 busybox: 1M多的镜像,称为嵌入式linux的瑞士军刀, Linux和unix一些常用的命令



<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font face="黑体" size=5> 注意事项 </font>
</center>

1. 镜像构建的顺序会影响缓存的有效性,经常修改的内容应该放到最后
2. 尽可能的写到同一个RUN,删除不必要的例外 --no-install-recommends, 并且记得删除包管理缓存 rm -rf /var/lib/apt/lists/*
3. 多阶段构建的使用
```
from maven:3.6-jdk-8-alpine as mavencache
workdir /opt
copy pom.xml .
run mvn -e -B xx:xx
copy src ./src
run mvn -e -B xx

from openjdk:8-jdk-alpine
copy --from-mavencache /opt/target/xxx.jar /
cmd ["java", "-jar", "/xxx.jar"]
```
