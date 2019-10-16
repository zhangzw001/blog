---
title: Dockerfile介绍
copyright: true
date: 2019-10-16 15:33:17
tags:
  - docker
categories:
  - [docker,Dockerfile]
---

Dockerfile 是用于build 一个docker image, 写的好的dockerfile 会让image 更精简 build更快捷
<!-- more -->

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font face="黑体" size=30> Dockerfile </font>
</center>

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
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font face="黑体" size=30> 容器的原理 </font>
</center>


容器镜像中最重要的概念就是layers，即镜像层。

<img src="http://zhangzw001.github.io/images/16/容器的原理-1.png" style="border: 0"/>

镜像层依赖于一系列的底层技术，比如文件系统(filesystems)、写时复制(copy-on-write)、联合挂载(union mounts)等技术
查看Docker 官方文档![https://docs.docker.com/storage/storagedriver/](https://docs.docker.com/storage/storagedriver/)进行学习。
