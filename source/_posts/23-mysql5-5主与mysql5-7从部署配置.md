---
title: mysql5.5主与mysql5.7从部署配置
copyright: true
date: 2019-10-29 14:56:55
tags:
  - mysql
  - mysql5.7
categories:
  - [技术文档]
  - [mysql,主从]
---
由于需要将旧版mysql5.5的数据同步到新mysql5.7, 并且会对部分表分库
<!-- more -->



参考教程: [mysql从5.5直接升级到5.7](https://www.cnblogs.com/qq931399960/p/10243758.html)

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> mysql5.5升级到mysql5.7 </font>
</center>


### 采用mysql5.5数据目录升级为mysql5.7
```
1 从mysql5.5的从库 copy /data数据
2 修改新的mysql5.7配置文件 my.cnf，添加datadir，指向5.5数据目录
3 新安装数据库执行(本次不需要执行)
  /usr/local/mysql57/bin/mysqld --defaults-file=/etc/my57.cnf --initialize-insecure --user=mysql --basedir=/usr/local/mysql --datadir=/disk/u01
4 启动mysql
5 此时数据目录还是5.5的，需要执行mysql_upgrade进行升级，在执行表修复前，需要确认一个参数innodb_file_per_table，mysql官网对该参数的解释如下
 该参数在5.5版本默认为OFF，所有表和索引都导入一个共享文件中，名为ibdata1,但在5.6.7及以后版本，改参数被默认设置为ON，即每张表都有对应的表和索引存储文件，每个schema下，每个frm文件都有对应的ibd文件。
 在执行mysql_upgrade时，会修复系统表，并且如果该参数在5.5和5.7版本均使用默认值，则会将之前共享表和索引的存储方式改为每张表单独存储表和索引的形式，故会出现拷贝复制的操作，如果数据量比较大，则用时就会很长，
 使用nnodb_file_per_table=1，及表和索引单独存储的优缺点，可查看mysql官网介绍。
6 使用mysql_upgrade检测并修复表
 /usr/local/mysql57/bin/mysql_upgrade -S /disk/u01/mysql.sock
```

> 以上已经完成对mysql5.5数据升级 在mysql5.7运行的功能


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 配置mysql5.5主与mysql5.7从 </font>
</center>


### 将msyql5.7作为mysql5.5的从库
```
 # 从库执行, POS位置以 show master status\G 查询为准
 stop slave;
 SET GLOBAL read_only=0;
 reset slave all;
 CHANGE MASTER TO MASTER_HOST='db_master.prod.zhangzw.com',MASTER_PORT=3306,MASTER_USER='xxx',MASTER_PASSWORD='xxx',MASTER_LOG_FILE='m1-master-bin.000001',MASTER_LOG_POS=107;
 start slave;
```

### 在主库测试创建表, 查看是否会同步到mysql5.7从库
```
create table tutorials_tbl(
   tutorial_id INT NOT NULL AUTO_INCREMENT,
   tutorial_title VARCHAR(100) NOT NULL,
   tutorial_author VARCHAR(40) NOT NULL,
   submission_date DATE,
   PRIMARY KEY ( tutorial_id )
);
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 修改mysql5.7库名 </font>
</center>

### 修改库名

> 没问题之后,我们需要将mysql5.7的mydatabase库改成mydatabasenew库名, 断开mysql5.5 和mysql5.7主从同步(最好设置mysql5.5只读,防止数据差异), 在mysql5.7上执行改库名, 以下有触发器的表会修改失败

> 测试执行时间在15s左右

```
#!/bin/bash
# 假设将sakila数据库名改为new_sakila
# MyISAM直接更改数据库目录下的文件即可
new_database=mydatabasenew
old_database=mydatabase

mysql -S /disk/u01/mysql.sock -e 'create database if not exists ${new_database}'
list_table=$(mysql -S /disk/u01/mysql.sock -Nse  "select table_name from information_schema.TABLES where TABLE_SCHEMA='${old_database}'")
for table in $list_table
do
    mysql -S /disk/u01/mysql.sock -e "rename table ${old_database}.$table to ${new_database}.$table"
done
```


### 此时在配置新的mysql5.7的主从机器


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 一些配置问题 </font>
</center>




---

### GTID_MODE 配置不统一

```
The replication receiver thread cannot start because the master has GTID_MODE = OFF and this server has GTID_MODE = ON.

# 永久修改
gtid_mode = off

# 一次性关闭步骤：
stop slave;
SET GLOBAL GTID_MODE = 'ON_PERMISSIVE';
SET GLOBAL GTID_MODE = 'OFF_PERMISSIVE';
SET GLOBAL GTID_MODE = 'OFF';
start slave;
```

### mysql5.7 sql_mode
```
sql_mode='ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'

```

---

### 注意一台机器多个mysql启动脚本修改问题
```
#以下两处修改 /etc/init.d/mysqld57 
parse_server_arguments `$print_defaults -c /etc/my57.cnf mysqld server mysql_server mysql.server`
$bindir/mysqld_safe --defaults-file=/etc/my57.cnf --pid-file="$mysqld_pid_file_path" $other_args >/dev/null &
```


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
<font color="blue" face="黑体" size=5> 一些info信息 </font>
</center>

### /usr/local/mysql57/bin/mysql_upgrade -S /disk/u01/mysql.sock 的部分记录

```
# /usr/local/mysql57/bin/mysql_upgrade -S /disk/u01/mysql.sock
Checking if update is needed.
Checking server version.
Running queries to upgrade MySQL server.
mysql_upgrade: (non fatal) [WARNING] 1642: Pre-4.1 password hash found. It is deprecated and will be removed in a future release. Please upgrade it to a new format.
Checking system database.
mysql.columns_priv                                 OK
mysql.db                                           OK
mysql.engine_cost                                  OK
mysql.event                                        OK
mysql.func                                         OK
mysql.general_log                                  OK
mysql.gtid_executed                                OK
mysql.help_category                                OK
mysql.help_keyword                                 OK
mysql.help_relation                                OK
mysql.help_topic                                   OK
mysql.host                                         OK
mysql.innodb_index_stats                           OK
mysql.innodb_table_stats                           OK
mysql.ndb_binlog_index                             OK
mysql.plugin                                       OK
mysql.proc                                         OK
mysql.procs_priv                                   OK
mysql.proxies_priv                                 OK
mysql.server_cost                                  OK
mysql.servers                                      OK
mysql.slave_master_info                            OK
mysql.slave_relay_log_info                         OK
mysql.slave_worker_info                            OK
mysql.slow_log                                     OK
...

```

### 附录 my57.cnf
```
[client]
port = 3308
socket = /disk/u01/mysql.sock

[mysql]
prompt="\u@m1_618_u [\d]> "
no-auto-rehash

[mysqld]
sql_mode='ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
replicate-wild-do-table=mydatabase.%

binlog-ignore-db=information_schema
binlog-ignore-db=mysql
binlog-ignore-db=performance_schema
binlog-ignore-db=test

binlog-do-db=mydatabase

user = mysql
port = 3308
basedir = /usr/local/mysql57
datadir = /disk/u01
socket = /disk/u01/mysql.sock
pid-file = /disk/u01/dbm1_u.pid
tmpdir = /disk/u02
server-id = 123
character-set-server = utf8
skip_name_resolve = 1
innodb_file_per_table = 1
explicit_defaults_for_timestamp = 0
read_only = 1

# buffer&cache
table_open_cache = 100
table_definition_cache = 400
table_open_cache_instances = 64
sort_buffer_size = 4M
join_buffer_size = 4M
read_buffer_size = 8M
read_rnd_buffer_size = 4M

# thread&connection
thread_stack = 256K
thread_cache_size = 768
back_log = 1024
max_connections = 3000
max_connect_errors = 1000000

# temptable
tmp_table_size = 32M
max_heap_table_size = 32M

# network
max_allowed_packet = 32M
#lock_wait_timeout = 3600
#interactive_timeout = 600
#wait_timeout = 600

# query cache
query_cache_size = 0
query_cache_type = 0

# 设置errorlog、slowlog和generallog的时区，默认UTC
log_timestamps = SYSTEM

# error-log
log_error = /disk/u02/mysqld.log

# slow-log
slow_query_log = 1
slow_query_log_file = /disk/u02/slow.log
long_query_time = 0.1
log_queries_not_using_indexes =1
log_throttle_queries_not_using_indexes = 60
min_examined_row_limit = 100
log_slow_admin_statements = 1
log_slow_slave_statements = 1

# general log
#general-log = 1
general_log_file=/disk/u02/query.log

# binlog
binlog_format = row
binlog_checksum = 1
log-bin = /disk/u02/m1-bin
log-bin-index = /disk/u02/m1-bin.index
sync_binlog = 0
binlog_cache_size = 4M
max_binlog_cache_size = 1G
max_binlog_size = 512M
expire_logs_days = 15

# GTID
gtid_mode = off
enforce_gtid_consistency = 1
log_slave_updates

# Replication
master_info_repository = TABLE
relay_log_info_repository = TABLE
slave-rows-search-algorithms = 'INDEX_SCAN,HASH_SCAN'
relay_log_recovery = 1
relay_log_purge = 1
relay-log=/disk/u02/m1-relay-bin
relay-log-index=/disk/u02/m1-relay-bin.index

# innodb-buffer&cache
innodb_buffer_pool_size = 1G
innodb_buffer_pool_instances = 4
#innodb_additional_mem_pool_size = 16M
innodb_max_dirty_pages_pct = 50

# innodb log
innodb_data_file_path = ibdata1:256M:autoextend
innodb_log_file_size = 256M
innodb_log_files_in_group = 2
innodb_flush_log_at_trx_commit = 2
innodb_log_buffer_size = 32M
#innodb_max_undo_log_size = 4G
#innodb_undo_directory = undolog
innodb_undo_tablespaces = 0

# innodb-io
innodb_flush_method = O_DIRECT
innodb_io_capacity = 600
innodb_io_capacity_max = 2000
innodb_flush_sync = 0
innodb_flush_neighbors = 0
#innodb_lru_scan_depth = 4000
innodb_write_io_threads = 8
innodb_read_io_threads = 8
innodb_purge_threads = 4
innodb_page_cleaners = 4

# transaction,lock
#innodb_sync_spin_loops = 100
#innodb_spin_wait_delay = 30
innodb_lock_wait_timeout = 10
innodb_print_all_deadlocks = 1
innodb_rollback_on_timeout = 1

innodb_open_files = 65535

innodb_online_alter_log_max_size = 1G

# innodb status
innodb_status_file = 1
# 注意: 开启 innodb_status_output & innodb_status_output_locks 后, 可能会导致log-error文件增长较快
innodb_status_output = 0
innodb_status_output_locks = 0

#performance_schema
performance_schema = 1
performance_schema_instrument = '%=on'

#innodb monitor
innodb_monitor_enable="module_innodb"
innodb_monitor_enable="module_server"
innodb_monitor_enable="module_dml"
innodb_monitor_enable="module_ddl"
innodb_monitor_enable="module_trx"
innodb_monitor_enable="module_os"
innodb_monitor_enable="module_purge"
innodb_monitor_enable="module_log"
innodb_monitor_enable="module_lock"
innodb_monitor_enable="module_buffer"
innodb_monitor_enable="module_index"
innodb_monitor_enable="module_ibuf_system"
innodb_monitor_enable="module_buffer_page"
innodb_monitor_enable="module_adaptive_hash"

# MyISAM
key_buffer_size = 1024M
bulk_insert_buffer_size = 64M
myisam_sort_buffer_size = 128M
myisam_repair_threads = 1


[mysqldump]
quick
max_allowed_packet = 32M
```
