---
title: Linux一些脚本汇总
copyright: true
date: 2019-11-01 17:50:26
tags:
  - shell
categories:
  - [linux,shell]
---
记录一些shell脚本
<!-- more -->

1 [清理es几天前的索引脚本](//zhangzw001.github.io/sh/clean_es_data.sh.sh)
2 [从mysql导出表到clickhouse脚本](//zhangzw001.github.io/sh/clickhouse_from_mysql.sh)


---
###命令汇总
####  生成字符串
```
tr -dc A-Za-z0-9_@$\%\^\/\+ < /dev/urandom|head -c 16|xargs

```

#### grep需要转义的字符
```
grep '"第一个转义\$第二个转义\[{'  a.txt
或者直接使用-F
grep -F '"$[{' a.txt
```

#### shell参数
```
while [ -n "$1" ]
do
 case "$1" in 
  -a) a=$2;shift 2;;
  -s) s=$2;shift 2;;
  *) ;;
 case
done
```

### #%处理变量
```
tmpDir=/dir1/dir2/dir3/my.file.txt
${tmpDir#*/}	-> dir1/dir2/dir3/my.file.txt	(左)删除从左往右第一个  /以及左边的所有内容
${tmpDir##*/}	-> my.file.txt			(左)删除从左往右最后一个/以及左边的所有内容
${tmpDir%/*}	-> /dir1/dir2/dir3/		(右)删除从右往左第一个  /以及右边的所有内容
${tmpDir%%/*}	-> 空				(右)删除从右往左最后一个/以及右边的所有内容
```
