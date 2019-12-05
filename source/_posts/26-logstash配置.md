---
title: logstash配置
copyright: true
date: 2019-11-08 17:28:26
tags:
  - logstash
categories:
  - [elk,logstash]

---
记录一些logstash的配置问题
<!-- more -->


### 想要排除某些信息
[官方文档](https://www.elastic.co/guide/en/logstash/5.4/event-dependent-configuration.html#conditionals)


```
if "_grokparsefailure" not in [tags] {
        if [sqlDuring] < 5 {
                 drop {}
         }
}
else {
        drop {}
}
```

> 请务必注意 如果failure 可能会导致找不到 sqlDuring变量 而报错

```
[2019-12-05T17:53:03,017][FATAL][logstash.runner          ] An unexpected error occurred! {:error=>#<NoMethodError: undefined method `<' for nil:NilClass>, :backtrace=>["(eval):139:in `initialize'", "org/jruby/RubyArray.java:1613:in `each'", "(eval):137:in `initialize'", "org/jruby/RubyProc.java:281:in `call'", "(eval):96:in `filter_func'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/pipeline.rb:260:in `filter_batch'", "org/jruby/RubyProc.java:281:in `call'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/util/wrapped_synchronous_queue.rb:186:in `each'", "org/jruby/RubyHash.java:1342:in `each'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/util/wrapped_synchronous_queue.rb:185:in `each'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/pipeline.rb:258:in `filter_batch'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/pipeline.rb:246:in `worker_loop'", "/usr/local/logstash-5.0.2/logstash-core/lib/logstash/pipeline.rb:225:in `start_workers'"]}
```
