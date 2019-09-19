---
title: 1. 首次搭建hexo博客系统
date: 2019-09-19 17:24:53
tags:
---
### 1 在mac上安装
```
# 安装node
brew install node npm
# 安装hexo
npm install -g hexo
```

### 2 初始化
```
cd /data/github/
# 初始化

hexo init blog
# 框架安装
npm install

#安装 Hexo 关于启动服务器的插件
npm install hexo-server --save

# 启动服务器, 本地查看效果, 如果不指定端口，默认为4000
hexo server

```

### 3 主题和配置
- 下载主题：[https://github.com/iissnan/hexo-theme-next](https://github.com/iissnan/hexo-theme-next)
```
unzip hexo-theme-next-master.zip
mv hexo-theme-next-master $blog/themes/
```

- 修改 _config.yml 中的其他属性
```
title: Zhangzhiwei's Blog
...
theme: hexo-theme-next
```

### 4. 编写更新博客

- 创建博客
```
hexo new '第一个博客'
```

- cat source/_posts/第一个博客.md
```
title: 第一个博客
date: 2019-09-19 16:58:01
tags:
  - hexo
categories:
  - hexo学习
```

- github 创建一个项目
```
1. 项目名字必须是 xxx.github.io
2. 在settings中 勾选Template repository
3. 之后会看到如下提示
```



- github配置
```
 # 安装 hexo 关于 git 的组件
npm install hexo-deployer-git --save
```

- 在_config.yml 中为 git 添加配置
```
deploy:
  type: git
  repository: git@github.com:*/*.github.io.git
  branch: master
```

- 部署
```
hexo g
hexo d
```
