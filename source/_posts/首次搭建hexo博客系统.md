---
title: 首次搭建hexo博客系统
date: 2019-09-19 17:24:53
copyright: true
tags:
  - hexo6
  - hexo美化
categories: 
  - [有趣]
  - [博客,美化]
description: "介绍一些hexo常用的配置和优化"
---
首次搭建hexo博客系统, 简单记录一下一些用法和注意事项
<!--more-->
### 1 安装hexo
- 1.1 在mac上安装
```
# 安装node
brew install node npm
```

- 1.2 在linux安装
```
# 安装node10
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
yum install -y nodejs
```

- 1.3 安装hexo
```
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
- 下载主题：[https://github.com/theme-next/hexo-theme-next](https://github.com/theme-next/hexo-theme-next)
```
unzip hexo-theme-next-master.zip
mv hexo-theme-next-master $blog/themes/
```

- 修改主题配置 _config.yml 中的其他属性
```
title: Zhangzhiwei's Blog
...
theme: hexo-theme-next
...
scheme: Mist
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

- github 创建一个Repository仓库
```
1. 仓库名字必须是 xxx.github.io
2. 在settings中 勾选Template repository
3. 记得添加自己的ssh
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

- 查看是否能提交代码github
```
ssh -T -ai ~/.ssh/id_rsa git@github.com
```

- 部署
```
hexo g
hexo d
或者
hexo d -g
```

### 5. next6让首页文字预览显示
- 5.1 方法一: 自动形成摘要,默认截取的长度为 150 字符
```
1. 找到主题的配置文件(themes/next/_config.yml)
2. 修改auto_excerpt,把enable改为对应的false改为true
3. hexo d -g
```

- 5.2 方法二: 博客内容中添加 < !--more-->
```
# 安装node
brew install node npm
 <!-- more -->
```

- 5.3 方法三: 在文章中的front-matter中添加description，并提供文章摘录,这种方式只会在首页列表中显示文章的摘要内容，进入文章详情后不会再显示。
```
title: 部署elk7.2.0
date: 2019-09-19 17:59:53
copyright: true
tags:
  - k8s
  - elk
  - elk7
categories:
  - 技术文档
  - elk
description: 本文主要是简单单机版部署elk7体验,  并非高可用集群方式部署, 部分安装步骤省略. 主要是记录yml配置文件, 仅供参考. 详细内容请点击下方阅读全文, 非常感谢!
```


### 6. next6添加搜索功能
```
1. npm install hexo-generator-searchdb --save
2. 全局配置文件_config.yml
search:
  path: search.xml
  field: post
  format: html
  limit: 10000
3. 修改主题的_config.yml
local_search:
  enable: true
```

### 7. next6 Mist字体的 首页文章间距和首页页宽,字体
- 7.1 首页文章间距

	```
	增加一些内容: source/css/_schemes/Mist/_posts-expanded.styl
	.posts-expand .post {
	  margin-top: 30px;
	  margin-bottom: 30px;
	}
	
	```

- 7.2 页宽

	```
	source/css/_variables/base.styl
	$content-desktop                = 900px
	$content-desktop-large          = 1000px
	$content-desktop-largest        = 1100px
	```

- 7.3 字体大小

	```
	themes/next/source/css/_variables/base.styl
	
	$font-size-base           = 0.95em;
	$font-size-base           = unit(hexo-config('font.global.size'), em) if hexo-config('font.global.size') is a 'unit';
	$font-size-smallest       = .75em;
	$font-size-smaller        = .8125em;
	$font-size-small          = .855em;
	$font-size-medium         = 0.95em;
	$font-size-large          = 0.975em;
	$font-size-larger         = 1.em;
	$font-size-largest        = 1.125em;
	```

### 8. 添加网格
-  8.1 自定义方式修改

	```
	# 新创建自定义文件
	cat themes/next/source/css/_custom/custom.styl
	// 主页文章添加阴影效果
	.post {
	margin-top: 60px;
	margin-bottom: 60px;
	padding: 25px;
	-webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);
	-moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);
	}

	# 修改config文件
	vim ./themes/next/_config.yml
	custom: custom
	```

- 8.2 next6版本修改方式
	> 参考: [hexo6--next美化整理](https://www.jianshu.com/p/ec2e6c8a1d89)

	1. 修改 themes/next/layout/_layout.swig
	```
	{% if theme.canvas_nest %}
	<script type="text/javascript" src="//cdn.bootcss.com/canvas-nest.js/1.0.0/canvas-nest.min.js">
	</script>
	{% endif %}
	```

	> 将上述代码防止在< /body> 前就可以了(注意不要放在< /head>的后面)。

	2. 修改主题的_config.yml

	```
	canvas_nest: true

	//color: 线条颜色, 默认: '0,0,0'；三个数字分别为(R,G,B)
	//opacity: 线条透明度（0~1）, 默认: 0.5
	//count: 线条的总数量, 默认: 150
	//zIndex: 背景的z-index属性，css属性用于控制所在层的位置, 默认: -1
	```
> 注意:
我这里打开提示缺少 canvas-nest.min.js文件,这里是手动copy的一份写到 source/lib/canvas-nest/canvas-nest.min.js

```
!function(){function o(w,v,i){return w.getAttribute(v)||i}function j(i){return document.getElementsByTagName(i)}function l(){var i=j("script"),w=i.length,v=i[w-1];return{l:w,z:o(v,"zIndex",-1),o:o(v,"opacity",0.5),c:o(v,"color","0,0,0"),n:o(v,"count",99)}}function k(){r=u.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,n=u.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(){e.clearRect(0,0,r,n);var w=[f].concat(t);var x,v,A,B,z,y;t.forEach(function(i){i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>r||i.x<0?-1:1,i.ya*=i.y>n||i.y<0?-1:1,e.fillRect(i.x-0.5,i.y-0.5,1,1);for(v=0;v<w.length;v++){x=w[v];if(i!==x&&null!==x.x&&null!==x.y){B=i.x-x.x,z=i.y-x.y,y=B*B+z*z;y<x.max&&(x===f&&y>=x.max/2&&(i.x-=0.03*B,i.y-=0.03*z),A=(x.max-y)/x.max,e.beginPath(),e.lineWidth=A/2,e.strokeStyle="rgba("+s.c+","+(A+0.2)+")",e.moveTo(i.x,i.y),e.lineTo(x.x,x.y),e.stroke())}}w.splice(w.indexOf(i),1)}),m(b)}var u=document.createElement("canvas"),s=l(),c="c_n"+s.l,e=u.getContext("2d"),r,n,m=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(i){window.setTimeout(i,1000/45)},a=Math.random,f={x:null,y:null,max:20000};u.id=c;u.style.cssText="position:fixed;top:0;left:0;z-index:"+s.z+";opacity:"+s.o;j("body")[0].appendChild(u);k(),window.onresize=k;window.onmousemove=function(i){i=i||window.event,f.x=i.clientX,f.y=i.clientY},window.onmouseout=function(){f.x=null,f.y=null};for(var t=[],p=0;s.n>p;p++){var h=a()*r,g=a()*n,q=2*a()-1,d=2*a()-1;t.push({x:h,y:g,xa:q,ya:d,max:6000})}setTimeout(function(){b()},100)}();%

```

### 9. 添加评论功能

- 9.1 注册leancloud
 ```
 注册-> 验证邮箱-> 实名认证 -> 设置获取appid和appkey
 ```

- 9.2 修改配置文件
 ```
 valine:
   enable: true 
   appid: 'appid' 
   appkey: 'appkey' 
   placeholder: "ヾﾉ≧∀≦)o 来呀！快活呀！~啦啦啦~ 啦啦啦啦~" 
   visitor: true //这个打开页会统计文章阅读数
 ```




### 10. next6添加字数统计 和阅读时长

> [hexo-symbols-count-time](https://github.com/theme-next/hexo-symbols-count-time)

- 10.1 安装node扩展
 ```
 npm install hexo-symbols-count-time --save
 ```

- 10.2 修改全局配置 _config.yml
 ```
 symbols_count_time:
   symbols: true
   time: true
   total_symbols: true
   total_time: true
   exclude_codeblock: false
 ```

- 10.3 修改主题配置 _config.yml
 ```
 symbols_count_time:
   separated_meta: true
   item_text_post: true
   item_text_total: false
   awl: 4
   wpm: 275
   suffix: mins.
 ```



### 11. next6 文章置顶功能

- 11.1 安装node扩展 
 ```
 npm uninstall hexo-generator-index --save
 npm install hexo-generator-index-pin-top --save
 ```

- 11.2 在文章开头添加置顶标识
 ```
 top: 10
 ```

- 11.3 首页添加明显置顶标识
 ```
 themes/next/layout/_macro/post.swig 在<div class="post-meta"> 下添加如下代码
 {% if post.top %}
     <i class="fa fa-thumb-tack"></i>
     <font color=green>置顶</font>
     <span class="post-meta-divider">|</span>
 {% endif %}
 ```

### 12. next6 开启标签和分类

- 12.1 创建tags相关目录
```
hexo new page tags
hexo new page categories
```

- 12.2 开启tags标签和分类
```
vim themes/next/_config.yml
tags: /tags/ || tags
categories: /categories/ || th
```

- 12.3 修改tags站点文件
```
cat source/tags/index.md
---
title: tags
date: 2019-09-24 10:08:59
type: "tags"
layout: "tags"
comments: false
---
```

- 12.4 修改categories站点文件
```
cat source/categories/index.md
---
title: categories
date: 2019-09-24 10:09:55
type: "categories"
layout: "categories"
comments: false
---
```

- 12.5 去掉xxx.github.io/tags/ 页面的post-title(因为我的这个css左对齐了,默认是居中,所以很丑)
```
# 注释下面这段代码
vim themes/nextv/layout/page.swig 
<!-- {% include '_partials/page/page-header.swig' %} -->
```

- 12.6 文章中多个tag和categories
```
tags:
  - k8s
  - k8s安装
categories:
  - [k8s,安装]
  - [技术文档]
```

- 12.7 对于自定义的html不想转成hexo的格式(比如一些baidu,google的收录分析工具的验证文件)
```
# hexo clean 清理public目录

# hexo d -g 部署和更新, 此时会根据source目录生成html,css,js等文件

# 假如我有一个 source/baidu_verify_xxx.html 文件 不想被更改

# 需要修改_config.yml
skip_render:
  -  "*.html"

# 如果非必须在 / 根目录也可以自建目录, skip_render 设置自定义的目录即可
```
