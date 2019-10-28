---
title: mysql简单记录
copyright: true
date: 2019-10-10 10:40:20
tags:
  - mysql
categories:
  - [技术文档]
  - [mysql]
top: 10
---
简单记录一些mysql知识点
<!-- more -->

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 清空表
```
删除表信息的方式有两种 :
truncate table table_name;
delete * from table_name;
注 : truncate操作中的table可以省略，delete操作中的*可以省略

truncate、delete 清空表数据的区别 :
1> truncate 是整体删除 (速度较快)，delete是逐条删除 (速度较慢)
2> truncate 不写服务器 log，delete 写服务器 log，也就是 truncate 效率比 delete高的原因
3> truncate 不激活trigger (触发器)，但是会重置Identity (标识列、自增字段)，相当于自增列会被置为初始值，又重新从1开始记录，而不是接着原来的 ID数。而 delete 删除以后，identity 依旧是接着被删除的最近的那一条记录ID加1后进行记录。如果只需删除表中的部分记录，只能使用 DELETE语句配合 where条件

```
<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 备份
```
# 全量锁表备份(不可写)
mysqldump --lock-all-tables --all-databases > ALLDB.sql

# 仅导出所有表的结构
mysqldump --opt -d 数据库名 -u root -p > xxx.sql


```
<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### slave 中修改master_host
```
# 查看 master.info中信息

# 查看 show slave status\G 中 Master_Host

# 修改的步骤需要先停止slave
1 stop slave ;
2 change master to master_host='xxx.xxx.xxx';
  首次配置主库:
  CHANGE MASTER TO MASTER_HOST='a_master.b.com',MASTER_PORT=3306,MASTER_USER='repl_user',MASTER_PASSWORD='xxxx',MASTER_LOG_FILE='m1-master-bin.000001',MASTER_LOG_POS=88;
3 start slave ;
```



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### mysql问题: navicat连接数据库很慢
```
报错: 2013-Lost connection to MYSQL server at 'reading for initial communication packet'
说明: 只有windows 的navicat会出现上面报错, windows上通过mysql命令连接时 也很慢

#添加如下内容:
[mysqld]
skip-name-resolve
```


---

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### mysql问题: mysql5.7 错误总结-ERROR 1067 (42000): Invalid default value for TIMESTAMP
```
show variables like 'sql_mode';
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| Variable_name | Value                                                                                                                                     |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
| sql_mode      | ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION |
+---------------+-------------------------------------------------------------------------------------------------------------------------------------------+
```
这是因为sql_mode中的NO_ZEROR_DATE导制的，在strict mode中不允许'0000-00-00'作为合法日期

将上面的NO_ZERO_DATE改为下面的 ALLOW_INVALID_DATES
```
set sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
set session  sql_mode='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

```
上面的设置是临时设置，在重新登陆后，该设置又恢复为NO_ZERO_DATE

---

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### mysql5.5主+mysql5.7从 问题
```
ERROR 1794 (HY000): Slave is not configured or failed to initialize properly. You must at least set --server-id to enable either a master or a slave. Additional error messages can be found in the MySQL error log.
server_uuid是5.6的gtid特性引入的一个配置，
把mysql5.7的 rpl_slave.cc文件中get_master_uuid函数换成5.6对应的函数就可以了。
```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>
### mysql一些info信息统计
```
#tbl_size.sql
use information_schema;
SELECT
    TABLE_NAME,
 ENGINE,
    ROUND((DATA_LENGTH/1024/1024),2) as DataM ,
    ROUND((INDEX_LENGTH/1024/1024),2) as IndexM,
    ROUND(((DATA_LENGTH+INDEX_LENGTH)/1024/1024),2) as AllM,
    TABLE_ROWS,
 TABLE_COMMENT
FROM
    TABLES
WHERE
    TABLE_SCHEMA = 'hzkj_zh'
ORDER BY AllM DESC;

# 生成excel表格
mysql test <tbl_size.sql >tbl_info_20191028.txt
```
