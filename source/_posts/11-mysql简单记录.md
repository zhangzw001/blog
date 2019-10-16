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

### mysql命令
#### 1. 清空表
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

#### 2. 备份
```
# 全量锁表备份(不可写)
mysqldump --lock-all-tables --all-databases > ALLDB.sql

# 仅导出所有表的结构
mysqldump --opt -d 数据库名 -u root -p > xxx.sql


```

#### 3. slave 中修改master_host
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
