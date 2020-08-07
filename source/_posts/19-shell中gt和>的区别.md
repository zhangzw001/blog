---
title: shell中gt和>的区别
copyright: true
date: 2019-10-17 11:48:22
tags:
  - linux
  - shell
categories:
  - [linux,shell]
---
shell中 gt 和 > 的一些相关问题介绍和测试
<!-- more-->


> 以下是bash的测试, 注意如果你是zsh可能会不同喔😯

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=4> [[]] , [] 和test比较 </font>
</center>

[] 和test:	两者是一样的，在命令行里test expr和[ expr ]的效果相同。test中可用的比较运算符只有==和!=，两者都是用于字符串比较的，不可用于整数比较，整数比较只能使用-eq, -gt这种形式。
通过which [ 和which test 可以看到是命令

> [] 和test 例子

```
[root@dk-centos6 ~]# a="abcdef"
[root@dk-centos6 ~]# test "$a" = "abcdef"
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [ "$a" = "abcdef" ]
[root@dk-centos6 ~]# echo $?
0
```

[[ ]]具体功能:	
- [[是 bash 程序语言的关键字。并不是一个命令，[[ ]] 结构比[ ]结构更加通用。在[[和]]之间所有的字符都不会发生文件名扩展或者单词分割，但是会发生参数扩展和命令替换。

- 支持字符串的模式匹配（使用=~操作符时甚至支持shell的正则表达 式）,右边的字符串不加双引号的情况,可以把右边作为模式. 比如[[ hello == hell? ]]，结果为真。当然加引号就是文本字符串比较.

- 使用[[ ... ]]条件判断结构，而不是[ ... ]，能够防止脚本中的许多逻辑错误。比如，&&、||、<和> 操作符能够正常存在于[[ ]]条件判断结构中，但是如果出现在[ ]结构中的话，会报错。比如可以直接使用if [[ $a != 1 && $a != 2 ]], 如果不适用双括号, 则为if [ $a -ne 1] && [ $a != 2 ]或者if [ $a -ne 1 -a $a != 2 ]。


---


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=4> 纯数字比较 </font>
</center>

### > 通过比较ASCII值,gt仅能比较数字

```
[root@dk-centos6 ~]# [ 2 \> 1 ]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [ 2 -gt 1 ]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [[ 2 > 1 ]]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [[ 2 -gt 1 ]]
[root@dk-centos6 ~]# echo $?
0
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font  face="黑体" size=4> 字符串比较 </font>
</center>

### 单括号中如果要比较符号 "<" ">", 需要转义, 否则判断结果错误

```
[root@dk-centos6 ~]# [ "b" > "a" ]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [ "b" < "a" ]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [ "b" \< "a" ]
[root@dk-centos6 ~]# echo $?
1
```

### 双括号不用转义 , 直接执行即可

```
[root@dk-centos6 ~]# [[ "b" > "a" ]]
[root@dk-centos6 ~]# echo $?
0
[root@dk-centos6 ~]# [[ "b" < "a" ]]
[root@dk-centos6 ~]# echo $?
1
```
