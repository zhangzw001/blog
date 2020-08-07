---
title: filebeat7收集mysql慢日志到es
copyright: true
date: 2019-10-30 16:56:37
tags:
  - filebeat7
  - elk7
  - elk
  - k8s
categories:
  - [elk7,filebeat7]
  - [k8s,elk7]
---
慢日志提供给开发查看, 采用elk统一提供,这里采用k8s环境搭建
<!--more-->


原文: [ELK收集mysql_slow.log](https://www.cnblogs.com/smail-bao/p/9528072.html)
其他: [filebeat （7.1.0）docker容器](https://blog.csdn.net/u012491646/article/details/90750571)


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### slowlog内容分析

- 5.5 版本慢查询日志
```
# Time: 191030 17:03:13
# User@Host: myuser[myuser] @  [10.10.0.1]
# Query_time: 3.329673  Lock_time: 0.000107 Rows_sent: 0  Rows_examined: 3971182
SET timestamp=1572426193;
select * from a where name = 1 limit 1;
```

- 5.6 版本慢查询日志
```
# Time: 191030 17:03:13
# User@Host: myuser[myuser] @  [10.10.0.1] Id: 1111
# Query_time: 3.329673  Lock_time: 0.000107 Rows_sent: 0  Rows_examined: 3971182
use db_name;
SET timestamp=1572426193;
select * from a where name = 1 limit 1;
```

- 5.7 版本慢查询日志
```
# Time: 2019-10-06T13:25:38.703546+08:00
# User@Host: myuser[myuser] @  [10.10.0.1] Id: 1111
# Query_time: 3.329673  Lock_time: 0.000107 Rows_sent: 0  Rows_examined: 3971182
SET timestamp=1572426193;
select * from a where name = 1 limit 1;
```


- 除以上格式以外,还需要注意慢查询代码块,可能并不是每次都有 # Time


> 一条完整的日志：最终将以# User@Host: 开始的行，和以SQL语句结尾的行合并为一条完整的慢日志语句


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 开始部署filebeat7 </font>
</center>

### 准备镜像
```
docker pull store/elastic/filebeat:7.2.0
```

### filebeat配置文件
```
filebeat.inputs:
- type: log
  enabled: true
  paths:
    - /opt/slow.log

  exclude_lines: ['^\# Time']

  multiline.pattern: '^\# Time|^\# User'
  multiline.negate: true
  multiline.match: after

  tail_files: true

output.elasticsearch:
  enabled: true
  hosts: ["10.0.0.100:9200"]
  protocol: "http"
  indices:
    - index: "es-index-name"
```

### k8s部署文件
```
k8s-filebeat-7.2.0.yml
kind: Deployment
apiVersion: apps/v1beta2
metadata:
  labels:
    elastic-app: filebeat
  name: filebeat
  namespace: ns-elastic7
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      elastic-app: filebeat
  template:
    metadata:
      labels:
        elastic-app: filebeat
    spec:
      containers:
        - name: filebeat
          image: store/elastic/filebeat:7.2.0
          volumeMounts:
            - name: filebeat-config
              mountPath: /usr/share/filebeat/filebeat.yml
            - name: mysql-dev-252
              mountPath: /opt/php-mysql-dev-0-slow.log
      volumes:
        - name: filebeat-config
          hostPath:
            path: /data/k8s-container/elk-7.2.0/filebeat-7.2.0/filebeat.yml
        - name: mysql-dev-252
          hostPath:
            path: /data/k8s-container/mysql5.5/slow.log
```

### logstash分析mysql日志
> 省略input的kafka 和ouput的es

```
    if [type] == "showlog1" or [type] == "showlog2" {
        json {
                source => "message"
        }

        mutate {
                gsub => [ "message", "\n", "" ]
        }
        grok {
                match => ["message","(?m)^# User@Host: %{USER:user}\[[^\]]+\] @  \[%{IP:clientip}\]  Id: %{NUMBER:Id:int}# Query_time: %{NUMBER:query_time:float}\s+Lock_time: %{NUMBER:lock_time:float}\s+Rows_sent: %{NUMBER:rows_sent:int}\s+Rows_examined: %{NUMBER:rows_examined:int}(?<dbnameall>.*)SET\s+timestamp=%{NUMBER:timestamp_mysql:int};(?<query>.*)"]
        }
        date {
                match => ["timestamp_mysql", "UNIX"]
                target => "@timestamp"
        }
    }
```
