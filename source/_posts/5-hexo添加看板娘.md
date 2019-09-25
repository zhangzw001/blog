---
title: hexo添加看板娘
copyright: true
date: 2019-09-24 17:46:17
tags:
  - hexo6
  - 特效
categories:
  - 有趣
  - 博客
---

### hexo6 左下角添加看板娘
<!--more-->

github地址: [张书樵大神](https://github.com/stevenjoezhang/live2d-widget)

### 下载大神项目 (会说话,换人物,小游戏等功能)
```
cd themes/nextv6/source
git clone https://github.com/stevenjoezhang/live2d-widget.git
```

#### github说明比较详细, 这里简单说明
> 由于这里是克隆到了source目录, hexo d -g的时候会生成到public目录, 相当于站点根目录了
```
# 直接开启autoload.js注释
const live2d_path = "/live2d-widget/";

# 修改 themes/nextv6/layout/_layout.swig, 最后一行添加如下
<!-- 看板娘 -->
<script src="/live2d-widget/autoload.js"></script>
```


### 一般小白简单教程(只有看鼠标方向功能)

> hexo 官方支持版
#### 需要安装模板
```
npm install --save hexo-helper-live2d
```

#### 修改主题配置文件
[各种宠物预览](https://blog.csdn.net/wang_123_zy/article/details/87181892#live2dwidgetmodelchitose_12)
```
# Live2D
## https://github.com/EYHN/hexo-helper-live2d
live2d:
  enable: true
  # enable: false
  scriptFrom: local # 默认
  pluginRootPath: live2dw/ # 插件在站点上的根目录(相对路径)
  pluginJsPath: lib/ # 脚本文件相对与插件根目录路径
  pluginModelPath: assets/ # 模型文件相对与插件根目录路径
  # scriptFrom: jsdelivr # jsdelivr CDN
  # scriptFrom: unpkg # unpkg CDN
  # scriptFrom: https://cdn.jsdelivr.net/npm/live2d-widget@3.x/lib/L2Dwidget.min.js # 你的自定义 url
  tagMode: false # 标签模式, 是否仅替换 live2d tag标签而非插入到所有页面中
  debug: false # 调试, 是否在控制台输出日志
  model:
    use: live2d-widget-model-haruto # npm-module package name
    # use: wanko # 博客根目录/live2d_models/ 下的目录名
    # use: ./wives/wanko # 相对于博客根目录的路径
    # use: https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json # 你的自定义 url
  display:
    position: left
    width: 150
    height: 300
  mobile:
    show: true # 手机中是否展示
```
