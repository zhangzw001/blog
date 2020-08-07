title: es集群节点出现overhead脱机的问题
copyright: true
date: 2020-03-12 15:23:35
tags:
  - elasticsearch5
categories:
  - [elk,elasticsearch5]
---
elasticsearch 日志提示 overhead, 导致集群出现问题
<!--more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5>  问题说明 </font>
</center>

### elasticsearch 日志提示 overhead
```
[2020-03-12T14:38:03,565][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][old][3008939][256208] duration [18.4s], collections [1]/[18.9s], total [18.4s]/[5.7h], memory [7.3gb]->[7.3gb]/[7.9gb], all_pools {[young] [17.5mb]->[3.3mb]/[532.5mb]}{[survivor] [0b]->[0b]/[66.5mb]}{[old] [7.3gb]->[7.3gb]/[7.3gb]}
[2020-03-12T14:38:03,593][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][3008939] overhead, spent [18.4s] collecting in the last [18.9s]


[2020-03-12T14:37:44,632][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][old][3008938][256207] duration [24.8s], collections [1]/[25.5s], total [24.8s]/[5.7h], memory [7.3gb]->[7.3gb]/[7.9gb], all_pools {[young] [8.5mb]->[17.5mb]/[532.5mb]}{[survivor] [0b]->[0b]/[66.5mb]}{[old] [7.3gb]->[7.3gb]/[7.3gb]}
[2020-03-12T14:37:44,632][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][3008938] overhead, spent [24.8s] collecting in the last [25.5s]
```

查看elasticsearch 配置 heap size 是8G

ES 内存使用和GC指标——默认情况下，主节点每30秒会去检查其他节点的状态，如果任何节点的垃圾回收时间超过30秒（Garbage collection duration），则会导致主节点任务该节点脱离集群。

设置过大的heap会导致GC时间过长，这些长时间的停顿（stop-the-world）会让集群错误的认为该节点已经脱离。

所以通过增加ping_timeout的时间，和增加ping_retries的次数来防止节点错误的脱离集群，可以使节点有充足的时间进行full GC。

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5>  问题解决 </font>
</center>

### 这里将默认的超时时间增加, 增加重试次数, 增加间隔时间

```
#超时时间设为5分钟，超过6次心跳没有回应，则认为该节点脱离master，每隔60s发送一次心跳。
 discovery.zen.fd.ping_timeout: 300s
 discovery.zen.fd.ping_retries: 6
 discovery.zen.fd.ping_interval: 60s
```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5>  gc 垃圾回收算法 </font>
</center>

> 摘自原文: [https://www.jianshu.com/p/1f450826f62e](https://www.jianshu.com/p/1f450826f62e)


### 标记-清除 算法(Mark Sweep)
该算法很简单，使用通过可达性分析分析方法标记出垃圾，然后直接回收掉垃圾区域。它的一个显著问题是一段时间后，内存会出现大量碎片，导致虽然碎片总和很大，但无法满足一个大对象的内存申请，从而导致 OOM，而过多的内存碎片（需要类似链表的数据结构维护），也会导致标记和清除的操作成本高，效率低下，如下图所示：

<center>
<img src="//zhangzw001.github.io/images/38/gc1.jpg">
</center>


### 复制算法(Copying)
有人提出了复制算法。它将可用内存一分为二，每次只用一块，当这一块内存不够用时，便触发 GC，将当前存活对象复制(Copy)到另一块上，以此往复。这种算法高效的原因在于分配内存时只需要将指针后移，不需要维护链表等。但它最大的问题是对内存的浪费，使用率只有 50%

<center>
<img src="//zhangzw001.github.io/images/38/gc2.jpg">
</center>


### 标记-整理算法(Mark Compact)

该算法解决了第1中算法的内存碎片问题，它会在回收阶段将所有内存做整理

<center>
<img src="//zhangzw001.github.io/images/38/gc3.jpg">
</center>

### 分代收集算法(Generation Collection)

既然大部分 Java 对象是朝生夕死的，那么我们将内存按照 Java 生存时间分为 新生代(Young) 和 老年代(Old)，前者存放短命僧，后者存放长寿佛，当然长寿佛也是由短命僧升级上来的。然后针对两者可以采用不同的回收算法，比如对于新生代采用复制算法会比较高效，而对老年代可以采用标记-清除或者标记-整理算法。这种算法也是最常用的。JVM Heap 分代后的划分一般如下所示，新生代一般会分为 Eden、Survivor0、Survivor1区，便于使用复制算法。

<center>
<img src="//zhangzw001.github.io/images/38/gc4.jpg">
</center>

将内存分代后的 GC 过程一般类似下图所示：

<center>
<img src="//zhangzw001.github.io/images/38/gc5.jpg">
</center>

1 对象一般都是先在 Eden区创建
2 当Eden区满，触发 Young GC，此时将 Eden中还存活的对象复制到 S0中，并清空 Eden区后继续为新的对象分配内存
3 当Eden区再次满后，触发又一次的 Young GC，此时会将 Eden和S0中存活的对象复制到 S1中，然后清空Eden和S0后继续为新的对象分配内存
4 每经过一次 Young GC，存活下来的对象都会将自己存活次数加1，当达到一定次数后，会随着一次 Young GC 晋升到 Old区
5 Old区也会在合适的时机进行自己的 GC





<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5>  elasticsearch gc说明 </font>
</center>

Elasticsearch 默认的 GC 配置是CMS GC ，其 Young 区用 ParNew，Old 区用CMS，大家可以在 config/jvm.options中看到如下的配置：

```
## GC configuration
-XX:+UseConcMarkSweepGC
-XX:CMSInitiatingOccupancyFraction=75
-XX:+UseCMSInitiatingOccupancyOnly
```

### 何时进行回收
```
1 Young 区的GC 都是在 Eden 区满时触发
2 Serial Old 和 Parallel Old 在 Old 区是在 Young GC 时预测Old 区是否可以为 young 区 promote 到 old 区 的 object 分配空间，如果不可用则触发 Old GC。这个也可以理解为是 Old区满时。
3 CMS GC 是在 Old 区大小超过一定比例后触发，而不是 Old 区满。这个原因在于 CMS GC 是并发的算法，也就是说在 GC 线程收集垃圾的时候，用户线程也在运行，因此需要预留一些 Heap 空间给用户线程使用，防止由于无法分配空间而导致 Full GC 发生。
```

### gc 日志说明
```
[2020-03-12T14:38:03,565][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][old][3008939][256208] duration [18.4s], collections [1]/[18.9s], total [18.4s]/[5.7h], memory [7.3gb]->[7.3gb]/[7.9gb], all_pools {[young] [17.5mb]->[3.3mb]/[532.5mb]}{[survivor] [0b]->[0b]/[66.5mb]}{[old] [7.3gb]->[7.3gb]/[7.3gb]}

[2020-03-12T14:38:03,593][WARN ][o.e.m.j.JvmGcMonitorService] [es7-u] [gc][3008939] overhead, spent [18.4s] collecting in the last [18.9s]
```

本次是old gc, 这是第3008939次GC检查, 从java启动至今这是第256208次 gc 共花18.4s, [从上次检查至今共发生一次gc][从上次检查至今已经过去18.9s],[本次gc18.4s]/[从 JVM 启动至今发生的 GC 总耗时为5.7h],  [ GC 前 Heap memory 空间]->[GC 后 Heap memory 空间]/[Heap memory 总空间]

{[young 区][GC 前 Memory ]->[GC后 Memory]/[young区 Memory 总大小] } {[survivor 区][GC 前 Memory ]->[GC后 Memory]/[survivor区 Memory 总大小] }{[old 区][GC 前 Memory ]->[GC后 Memory]/[old区 Memory 总大小] }
