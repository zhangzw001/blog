---
title: mysql5.7二进制部署
copyright: true
date: 2019-09-26 15:11:05
tags:
  - mysql
  - mysql5.7
categories:
  - 技术文档
  - mysql
---

> 二进制方式部署mysql5.7

<!-- more -->

### 下载glibc二进制包
```
#打开下载页面, 可能会有小版本更新(注意：选择操作系统时选Linux-Generic）
https://dev.mysql.com/downloads/mysql/5.7.html#downloads

# 最新的可能有小版本变化
wget https://cdn.mysql.com/Downloads/MySQL-5.7/mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
```

### 安装配置 
```
tar -xvf mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
mv mysql-5.7.24-linux-glibc2.12-x86_64 /usr/local/
cd /usr/local/

# 我的镜像是安装过5.5mysql, 所以需要mv一下
mv mysql mysql-5.5.37

# 由于以前安装过php指定了该mysq目录, 这可能导致以前安装的php缺少libmysqlclient.so.18
ln -s /usr/local/mysql-5.5.37/lib/libmysqlclient.so.18 /usr/local/mysql-5.7.24-linux-glibc2.12-x86_64/lib/libmysqlclient.so.18
ln -s mysql-5.7.24-linux-glibc2.12-x86_64 mysql

# 添加启动文件
\cp mysql/support-files/mysql.server /etc/init.d/mysqld
echo "PATH=$PATH:/usr/local/mysql/bin/" >>~/.bashrc

# 可选
wget http://centos.mirrors.ucloud.cn/centos/6/os/x86_64/Packages/numactl-2.0.9-2.el6.x86_64.rpm
yum localinstall numactl-2.0.9-2.el6.x86_64.rpm
\rm numactl-2.0.9-2.el6.x86_64.rpm

useradd mysql

# 配置下mysql的数据目录
cd /data/
mkdir u01
mkdir u02
chown -R mysql.mysql u01
chown -R mysql.mysql u02
chmod 750 u01
chmod 750 u02
cd /data/u01/

# 初始化
/usr/local/mysql/bin/mysqld --initialize-insecure --user=mysql --basedir=/usr/local/mysql --datadir=/data/u01
cat auto.cnf

# 启动服务 (在这之前准备好 /etc/my.cnf)
/etc/init.d/mysqld start

# 记录下variables
mysql -e "show global variables" >mysql_option_default.log
```


### my.cnf
```
[client]
port = 3306
socket = /data/u01/mysql.sock

[mysql]
prompt="\u@m1-u [\d]> "
no-auto-rehash

[mysqld]
user = mysql
port = 3306
basedir = /usr/local/mysql
datadir = /data/u01
socket = /data/u01/mysql.sock
pid-file = /data/u01/m1-u.pid
tmpdir = /data/u02
server-id = 1001
character-set-server = utf8
skip_name_resolve = 1
innodb_file_per_table = 1
explicit_defaults_for_timestamp = 0

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
log_error = /data/u02/mysqld.log

# slow-log
slow_query_log = 1
slow_query_log_file = /data/u02/slow.log
long_query_time = 0.1
log_queries_not_using_indexes =1
log_throttle_queries_not_using_indexes = 60
min_examined_row_limit = 100
log_slow_admin_statements = 1
log_slow_slave_statements = 1

# general log
#general-log = 1
general_log_file=/data/u02/query.log

# binlog
binlog_format = row
binlog_checksum = 1
log-bin = /data/u02/bdm1-bin
log-bin-index = /data/u02/bdm1-bin.index
sync_binlog = 0
binlog_cache_size = 4M
max_binlog_cache_size = 2G
max_binlog_size = 512M
expire_logs_days = 15

# GTID
gtid_mode = on
enforce_gtid_consistency = 1
log_slave_updates

# Replication
master_info_repository = TABLE
relay_log_info_repository = TABLE
slave-rows-search-algorithms = 'INDEX_SCAN,HASH_SCAN'
relay_log_recovery = 1
relay_log_purge = 1
relay-log=/data/u02/bdm1-relay-bin
relay-log-index=/data/u02/bdm1-relay-bin.index

# innodb-buffer&cache
innodb_buffer_pool_size = 2G
innodb_buffer_pool_instances = 4
#innodb_additional_mem_pool_size = 16M
innodb_max_dirty_pages_pct = 50

# innodb log
innodb_data_file_path = ibdata1:1G:autoextend
innodb_log_file_size = 1G
innodb_log_files_in_group = 2
innodb_flush_log_at_trx_commit = 2
innodb_log_buffer_size = 32M
#innodb_max_undo_log_size = 4G
#innodb_undo_directory = undolog
innodb_undo_tablespaces = 4

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

innodb_online_alter_log_max_size = 2G

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
