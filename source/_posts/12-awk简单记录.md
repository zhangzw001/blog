---
title: awk简单记录
copyright: true
date: 2019-10-11 15:23:48
tags:
  - linux
  - awk 
categories:
  - [linux,awk]
---

记录一些简单使用
<!-- more -->


### 实例1: 计算nginx日志中某个接口的次数和平均响应时间
#### 例如我的a.txt nginx日志格式如下

```
a.b.com 1.1.1.1 [08/Sep/2019:23:57:01 +0800] "GET /v1/actionname?xxxx HTTP/1.1" 200 386 "-" "Mozilla/5.0 (Linux; Android 9; V1831A Build/P00610; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36" "-" "0.023"
a.b.com 1.1.1.1 [08/Sep/2019:23:57:01 +0800] "GET /v1/actionname2?xxxx HTTP/1.1" 200 386 "-" "Mozilla/5.0 (Linux; Android 9; V1831A Build/P00610; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.91 Mobile Safari/537.36" "-" "0.016"
```

> 这里我只想取出接口名: /v1/actionname 和 0.023 响应时间

#### 首先我取出这两列
```
cat a.txt|awk -F '"' '{print $(NF-1),$2}'|awk -F '?' '{print $1}'|awk '{print $1" "$3}' > b.txt


cat b.txt
0.023 /v1/actionname
0.016 /v1/actionname2
...
```


#### 命令详解
```
> 第一步 响应时间求和
{s[$2]+=$1}: 每遇到一个$2,比如遇到/v1/actionname,记录一个数组s[/v1/actionname] = 所有$1的值的总和
> 第二步 算接口的次数
{m[$2]++}:  每遇到一个$2,比如遇到/v1/actionname,记录一个数组m[/v1/actionname] = 所有$1的个数
> 第三步 取平均值

# 这里输出csv文件
cat b.txt|awk '{m[$2]++} {s[$2]+=$1} ; END {for(i in m) {print s[i]/m[i] "," m[i] "," i}}'|awk -F "," '$2 > 20'|sort -k2nr > test.csv
```

#### 例如计算总响应时间,总数,平均值
```
# 这里$17 是接口名 : /v4.5/?xxx , $4 是响应时间 
# 每遇到一个$17, 就把$4响应时间累加存到 s中,  s可能是 s["/v4.5/?xxx"]=4.75, s["/v3.8/?xxx"]=1.469
# 同理m一样,  m["/v4.5/?xxx"]=313, m["/v3.8/?xxx"]=64

tail -1000 openapi.access.log |awk '{s[$17]+=$4} {m[$17]++} END {for(i in s) {print m[i],"\t",s[i],"\t",s[i]/m[i],"\t",i} }'|sort -k1nr|head -10

313   4.75   0.0151757   /v4.5/?xxx
64   1.469   0.0229531   /v3.8/?xxx
```

