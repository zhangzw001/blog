---
title: k8s部署fluentd+kafka+logstash+es
copyright: true
date: 2020-04-09 17:40:58
tags:
  - fluentd
categories:
  - [elk7]
  - [fluentd]
---

客户端采集数据的软件比较多, 有logstash,flume,fluentd/fluent-bit,filebeat等,这里在k8s集群中部署fluentd开启UDP端口接收代码写入的json日志,并写入到kafka中
<!--more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 1. 一些服务版本
```
docker镜像: docker pull fluentd:v1.9.1-1.0
kafka: kafka-server-0.10.0+kafka2.1.0-1.2.1.0.p0.63.el6.noarch
fluent-plugin-kafka: 0.5.7
```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 2. fluentd 镜像安装kafka扩展 Dockerfile
> 由于fluent-plugin-kafka版本要求
> 我们的kafka是0.10, 所以高版本有问题, 安装了fluent-plugin-kafka 0.5.7 则正常

官方文档: [https://rubygems.org/gems/fluent-plugin-kafka/versions/0.5.7](https://rubygems.org/gems/fluent-plugin-kafka/versions/0.5.7)

```
from fluentd:v1.9.1-1.0

MAINTAINER zhangzw <zhangzw@xxx.com>

USER root

RUN fluent-gem install fluent-plugin-kafka -v 0.5.7

USER fluent

```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 3. fluentd配置文件 fluent-udp-to-kafka.conf
```

<source>
  @type udp
  @label @mainstream
  tag udplog # required
  <parse>
    @type regexp
    expression /^(?<message>.*)$/
  </parse>
  port 12301               # optional. 5160 by default
  bind 0.0.0.0             # optional. 0.0.0.0 by default
  message_length_limit 1MB # optional. 4096 bytes by default
</source>

<filter **>
  @type stdout
</filter>

<label @mainstream>
  <match **>
    @type kafka2

    # list of seed brokers，这个地方可以通过逗号写多个地址比如 host1:9092,host2:9092
    brokers 192.168.xxx.142:9092
    use_event_time true

    # buffer settings
    <buffer topic>
    @type file
    # 下面的path可能需要手动创建目录，并给写入权限，我直接给了777
    path /fluentd/log/td-agent/buffer/td
    flush_interval 3s
    </buffer>

    # data type settings
    <format>
    @type json
    </format>

    # kafka中创建的topic
    topic_key udplog
    # 默认topic
    default_topic udplog
    get_kafka_client_log true
    # producer settings
    required_acks -1
    compression_codec gzip
  </match>
</label>
```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 4. k8s部署 开启input udp 12301接收数据, 并output给kafka
```
k8s-fluentd-udplog-udp-to-kafka.yml
---
kind: Deployment
apiVersion: apps/v1beta2
metadata:
  labels:
    elastic-app: fluentd-udplog
  name: fluentd-udplog
  namespace: ns-elastic7
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      elastic-app: fluentd-udplog
  template:
    metadata:
      labels:
        elastic-app: fluentd-udplog
    spec:
      containers:
        - name: fluentd-udplog
          image: hub.xxx.com/bq/fluentd:v1.9.1-1.0-kafka-0.10
          ports:
            - containerPort: 12301
              name: port12301
              protocol: UDP
          resources:
            requests:
              cpu: "50m"
            limits:
              cpu: "500m"
          volumeMounts:
            - name: fluentd-udplog-logs
              mountPath: /fluentd/log
            - name: fluentd-udplog-cfg
              mountPath: /fluentd/etc/fluent.conf
      volumes:
        - name: fluentd-udplog-logs
          hostPath:
            path: /data/k8s-container/elk-7.2.0/fluentd/logs/
        - name: fluentd-udplog-cfg
          hostPath:
            path: /data/k8s-container/elk-7.2.0/fluentd/fluent-udp-to-kafka.conf

---
kind: Service
apiVersion: v1
metadata:
 labels:
   elastic-app: fluentd-udplog
 name: fluentd-udplog-service-nodeport
 namespace: ns-elastic7
spec:
 type: NodePort
 ports:
   - name: port12301
     port: 12301
     targetPort: 12301
     nodePort: 12301
     protocol: UDP
 selector:
   elastic-app: fluentd-udplog
```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 5. 修改logstash的配置

```
config/pipeline/logstash.conf
input {
 kafka{
  type =>"php-mysql-dev-252-log"
  bootstrap_servers => "192.168.xxx.142:9092"
  topics => "php-mysql-dev-0-slowlog"
 }

        kafka{
                type =>"udplog"
                bootstrap_servers => "192.168.xxx.142:9092"
                topics => "udplog"
        }

}



filter{

###############
    if [type] == "php-mysql-dev-252-log" {
 	json {
  		source => "message"
 	}

 	mutate {
     		gsub => [ "message", "\n", "" ]
  	}
 	grok {
  		match => ["message","(?m)^# User@Host: %{USER:user}\[[^\]]+\] @  \[%{IP:clientip}\]# Query_time: %{NUMBER:query_time:float}\s+Lock_time: %{NUMBER:lock_time:float}\s+Rows_sent: %{NUMBER:rows_sent:int}\s+Rows_examined: %{NUMBER:rows_examined:int}(?<dbnameall>.*)SET\s+timestamp=%{NUMBER:timestamp_mysql:int};(?<query>.*)"]
 	}
 	date {
  		match => ["timestamp_mysql", "UNIX"]
  		target => "@timestamp"
 	}
    }
######
    if [type] == "udplog" {
 	grok {
          match => {
            "message" => "<%{NUMBER:id:int}>%{NUMBER:id_N:int} (?<http_time>\S+) %{DATA:hostname} %{DATA:ident} %{NUMBER:pid:int} - - %{DATA:logLevel}: X-Request-Id:%{DATA:Request_Id} module:%{DATA:moduleName} act:%{DATA:Act} sql:(?<sql>(.*)) cost:%{NUMBER:sqlDuring:int}ms \[\] \[\]"
                }
     	}
       	grok {
         match => {"sql" =>" %{DATA:operation} "}
       	}

   	if "_grokparsefailure" not in [tags] {
      	 if [sqlDuring] < 5 {
          drop {}
        }
   }
   else {
    	 drop {}
   	}
    }

}

output {
###
   if [type] == "php-mysql-dev-252-log" {
      elasticsearch {
        hosts =>  [ "http://192.168.xxx.120:19230" ]
        index => "php-mysql-dev-252-%{+YYYY.MM.dd}"
      }
   }
###
    if [type] == "udplog" {
      elasticsearch {
        hosts =>  [ "http://192.168.xxx.120:19230" ]
        index => "udplog-%{+YYYY.MM.dd}"
      }
    }
}

```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 6. 部署k8s logstash 分析后写入到es中 k8s-logstash-7.2.0-kafka-to-es.yml
```
---
kind: Deployment
apiVersion: apps/v1beta2
metadata:
  labels:
    elastic-app:  slowlog-logstash-kafka-to-es
  name: slowlog-logstash-kafka-to-es
  namespace: ns-elastic7
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      elastic-app: slowlog-logstash-kafka-to-es
  template:
    metadata:
      labels:
        elastic-app: slowlog-logstash-kafka-to-es
    spec:
      containers:
        - name: slowlog-logstash-kafka-to-es
          image: hub.xxx.com/bq/logstash:7.2.0
          resources:
            requests:
              cpu: "50m"
            limits:
              cpu: "500m"
          volumeMounts:
            - name: slowlog-toes-cfg
              mountPath: /usr/share/logstash/config
      volumes:
        - name: slowlog-toes-cfg
          hostPath:
            path: /data/k8s-container/elk-7.2.0/mysqlslowlog-logstash-7.2.0/config
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule

```
