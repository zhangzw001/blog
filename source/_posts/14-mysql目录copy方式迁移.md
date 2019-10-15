---
title: mysql5.5目录copy方式迁移
copyright: true
date: 2019-10-15 10:44:27
tags:
  - mysql
categories:
  - [技术文档]
  - [mysql]
---
从现有的一台 从库 全copy data目录到2台新机器上, 再配置mysql主从
<!--more-->


### 目录copy方式迁移

>  注意

- 不要删除ibdata1,会导致innodb表不存在
- 可以不删除ib_logfile0,ib_logfile1, 但my.cnf配置大小一致
- 区别目录权限为mysql,tmp目录存在
- 请自行安装好mysql5.5

```
1 首先停止mysql
/etc/init.d/mysqld stop

2 同步数据目录到新机器
/data/u01

3 确认新机器上mysql版本并配置/etc/my.cof
4 完整迁移时不需要删除内容(innodb_log_file_size = 256M 配置要一致)
5 启动mysql

```

### 配置主从
- 1 首先 目录copy方式 同步某个从库到2台新机器并启动完成, 此时两个mysql都开启了slave

- 2 暂停同步，并设置读写；

```
stop slave;
# 该执行仅主库上执行(配置可写)
SET GLOBAL read_only=0;
reset slave all;
-- RESET SLAVE ALL是清除从库的同步复制信息、包括连接信息和二进制文件名、位置
-- 从库上执行这个命令后，使用show slave status将不会有输出。
```

- 3 2台新的mysql中修改从库slave配置, 连接到新的主库地址(我这里通过域名解析)

```
CHANGE MASTER TO 
MASTER_HOST='a_master.b.com',MASTER_PORT=3306,MASTER_USER='repl_user',MASTER_PASSWORD='xxxx',MASTER_LOG_FILE='m1-master-bin.000001',MASTER_LOG_POS=88;
```


- 4 由于本机需要安装mysql5.5和mysql5.7所以注意一下

```
# 初始化指定配置文件
/usr/local/mysql57/bin/mysqld --defaults-file=/etc/my57.cnf --initialize-insecure --user=mysql --basedir=/usr/local/mysql57 --datadir=/data/u001

# 修改/etc/init.d/mysqld57
parse_server_arguments `$print_defaults -c /etc/my57.cnf mysqld server mysql_server mysql.server`
$bindir/mysqld_safe --defaults-file=/etc/my57.cnf --pid-file="$mysqld_pid_file_path" $other_args >/dev/null &
```

### 报错统计
- ERROR 1840 (HY000) at line 24: @@GLOBAL.GTID_PURGED can only be set when @@GLOBAL.GTID_EXECUTED is empty.

```
执行reset master; 
```

- The MySQL server is running with the--read-only option so it cannot execute this statement

```
执行 set global read_only=0;
```


