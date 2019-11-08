---
title: 26-logstash配置
copyright: true
date: 2019-11-08 17:28:26
tags:
  - logstash
categories:
  - [elk,logstash]

---
记录一些logstash的配置问题
<!-- more -->

### logstash排除一些信息
```
# 排除sqlDuring = 0 (数字,如果是字符需要引号) 的整条json数据
if [sqlDuring] == 0 {
    drop {}
    }
   }

```
