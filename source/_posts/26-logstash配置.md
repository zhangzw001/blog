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

### logstash排除一些信息
```
# 排除sqlDuring = 0 (数字,如果是字符需要引号) 的整条json数据
if [sqlDuring] == 0 {
    drop {}
    }
   }

# logstash5.5 可以使用<
if [sqlDuring] < 5 {
    drop {}
    }
   }

# 在logstash7.1 测试发现会报错:
[2019-11-14T15:43:03,001][FATAL][logstash.runner          ] An unexpected error occurred! {:error=>java.lang.IllegalStateException: java.lang.NullPointerException, :backtrace=>["org.logstash.execution.WorkerLoop.run(org/logstash/execution/WorkerLoop.java:85)", "java.lang.reflect.Method.invoke(java/lang/reflect/Method.java:498)", "org.jruby.javasupport.JavaMethod.invokeDirectWithExceptionHandling(org/jruby/javasupport/JavaMethod.java:440)", "org.jruby.javasupport.JavaMethod.invokeDirect(org/jruby/javasupport/JavaMethod.java:304)", "usr.local.logstash_minus_7_dot_1_dot_1.logstash_minus_core.lib.logstash.java_pipeline.start_workers(/usr/local/logstash-7.1.1/logstash-core/lib/logstash/java_pipeline.rb:235)", "org.jruby.RubyProc.call(org/jruby/RubyProc.java:295)", "org.jruby.RubyProc.call(org/jruby/RubyProc.java:274)", "org.jruby.RubyProc.call(org/jruby/RubyProc.java:270)", "java.lang.Thread.run(java/lang/Thread.java:748)"]}
[2019-11-14T15:43:03,063][ERROR][org.logstash.Logstash    ] java.lang.IllegalStateException: Logstash stopped processing because of an error: (SystemExit) exit


```
