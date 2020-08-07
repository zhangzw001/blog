---
title: hexo部署到coding.net开启静态网站
copyright: true
date: 2020-08-07 16:00:08
tags:
  - hexo6
  - 特效
categories:
  - [有趣]
  - [博客,美化]
---
由于访问github会比较慢,百度抓取问题等, hexo同时部署到coding.net并开启静态网站
<!--more-->

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 首先得有coding.net 网站的账户,并配置自己的公钥

> 右上角点击 个人账户设置 -> SSH公钥



### 创建好项目之后, 修改hexo的_config.yml
```yaml
deploy:
  type: git
#  repository: git@github.com:zhangzw001/zhangzw001.github.io.git
  repo:
    github: git@github.com:zhangzw001/zhangzw001.github.io.git
    coding: git@e.coding.net:k1s/blog/blog.git
  branch: master
```


### 开启 静态网站 部署功能

> 点击项目进去 -> 左下角项目设置 -> 功能开关 -> 持续部署
![](//zhangzw001.github.io/images/53/img1.jpg)


> 回到项目 持续部署 -> 静态网站 

![](//zhangzw001.github.io/images/53/img2.jpg)

### 现在将自己的域名绑定到该项目 

> 点击 设置 

![](//zhangzw001.github.io/images/53/img3.jpg)

> 注意绑定域名前, 先去dns添加一条cname记录(记录值为你的coding-pages.com)

![](//zhangzw001.github.io/images/53/img4.jpg)


