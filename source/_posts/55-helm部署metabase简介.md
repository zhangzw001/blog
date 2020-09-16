---
title: helm部署metabase简介
copyright: true
date: 2020-09-16 18:18:05
tags:
  - helm
  - metabase
---
helm 简单部署metabase
<!-- more-->



### 版本统计
```
1. k8s:   1.15.11
2. metabase:  v0.36.3
3. mysql:  5.7.24
```

### 首先从charts拉取最新的模板
```
# 首先search查看一下
helm search metabase
NAME            CHART VERSION APP VERSION DESCRIPTION
stable/metabase 0.3.2         v0.27.2     The easy, open source way for everyone in your company to...

# 这里直接通过helm安装只有 v0.27.2的版本, 我们想要安装最新的版本
所以这里我从helm官方克隆了charts
git clone https://github.com/helm/charts.git

cd charts/stable/metabase

# 拉取配置
docker pull metabase/metabase:v0.36.3
docker tag metabase/metabase:v0.36.3 xxx.com/metabase:v0.36.3
docker push xxx.com/metabase:v0.36.3
```

### 修改values.yaml配置
```
# 这里改成私有镜像
image:
  repository: xxx.com/metabase

# 修改数据库配置
database:
  type: mysql
  host: k8s-db-t.xxx.com
  port: 3336
  dbname: metabase
  username: metabase
  password: metabase.123

# 修改时区
timeZone: Asia/Shanghai

# 修改nodeport
service:
  name: metabase
  type: NodePort
  externalPort: 80
  internalPort: 3000
  # Used to fix NodePort when service.type: NodePort.
  nodePort: 33000

# 这里也同时开启了ingress,
ingress:
  enabled: true
  # Used to create Ingress record (should used with service.type: ClusterIP).
  hosts:
    - metabase-dev.xxx.com

# 设置资源限制
resources:
  limits:
    cpu: 1000m
    memory: 4096Mi
  requests:
    cpu: 100m
    memory: 256Mi
```

### k8s-db-t上部署metabase
```
cd /data/k8s-config/helm/charts/stable/metabase

## 首次安装
helm install --name android-metabase-dev --namespace android .

## 更新
helm upgrade android-metabase-dev --namespace android .

```



### 部署mysql-configmap
- k8s-android-metabase-mysql-dev-configmap.yml


```
---
kind: ConfigMap
metadata:
  name: android-metabase-mysql-dev
  labels:
    app: android-metabase-mysql-dev
  namespace: db
apiVersion: v1
data:
  my.cnf: |
    [client]
    port = 3306
    socket = /data/mysql.sock

    [mysql]
    no-auto-rehash

    [mysqld]
    #关闭合并索引
    optimizer_switch="index_merge_intersection=off"
    #skip-slave-start
    sql_mode='ONLY_FULL_GROUP_BY,NO_ZERO_IN_DATE,ALLOW_INVALID_DATES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'

    binlog-ignore-db=information_schema
    binlog-ignore-db=mysql
    binlog-ignore-db=performance_schema
    binlog-ignore-db=test


    user = mysql
    port = 3306
    basedir = /usr/local/mysql
    datadir = /data/
    socket = /data/mysql.sock
    pid-file = /data/metabase.pid
    tmpdir = /data/
    server-id = 0
    character-set-server = utf8
    skip_name_resolve = 1
    innodb_file_per_table = 1
    explicit_defaults_for_timestamp = 0
    read_only = 0

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
    log_error = /data/mysqld.log

    # slow-log
    slow_query_log = 1
    slow_query_log_file = /data/metabase_slow.log
    long_query_time = 1
    log_queries_not_using_indexes =1
    log_throttle_queries_not_using_indexes = 60
    min_examined_row_limit = 100
    log_slow_admin_statements = 1
    log_slow_slave_statements = 1

    # general log
    #general-log = 1
    general_log_file=/data/query.log

    # binlog
    binlog_format = row
    binlog_checksum = 1
    log-bin = /data/metabase-bin
    log-bin-index = /data/metabase-bin.index
    sync_binlog = 0
    binlog_cache_size = 4M
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
    relay-log=/data/metabase-relay-bin
    relay-log-index=/data/metabase-relay-bin.index

    # innodb-buffer&cache
    innodb_buffer_pool_size = 1G
    innodb_buffer_pool_instances = 4
    #innodb_additional_mem_pool_size = 16M
    innodb_max_dirty_pages_pct = 50

    # innodb log
    innodb_data_file_path = ibdata1:512M:autoextend
    innodb_log_file_size = 512M
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
    key_buffer_size = 4G
    bulk_insert_buffer_size = 64M
    myisam_sort_buffer_size = 256M
    myisam_repair_threads = 1


    [mysqldump]
    quick
    max_allowed_packet = 32M
```


### 部署mysql
- k8s-android-metabase-mysql-dev.yml

```
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: android-metabase-mysql-dev
  name: android-metabase-mysql-dev
  namespace: db
spec:
  replicas: 1
  selector:
    matchLabels:
      app: android-metabase-mysql-dev
  template:
    metadata:
      labels:
        app: android-metabase-mysql-dev
    spec:
      containers:
       - name: android-metabase-mysql-dev
         image: xxx.com/mysql:5.7.24
         ports:
         - containerPort: 3306
           name: db-port
         resources:
           requests:
             cpu: "50m"
           limits:
             cpu: "1000m"
         env:
         - name: MYSQL_ROOT_PASSWORD
           value: "xxx.123"
         volumeMounts:
         - name: android-metabase-mysql-dev-data
           mountPath: /data
         - name: android-metabase-mysql-dev-conf
           mountPath: /etc/mysql/my.cnf
           subPath: my.cnf
      volumes:
        - name: android-metabase-mysql-dev-data
          nfs:
            server: xxx.xxx.xxx.194
            path: /disk/k8s-nfs-data/k8s-db-t/android-metabase-mysql-dev
        - name: android-metabase-mysql-dev-conf
          configMap:
            name: android-metabase-mysql-dev

---
kind: Service
apiVersion: v1
metadata:
  labels:
    app: android-metabase-mysql-dev
  name: android-metabase-mysql-dev
  namespace: db
spec:
  type: NodePort
  ports:
    - port: 3306
      name: db-port
      targetPort: 3306
      nodePort: 3336
      protocol: TCP
  selector:
    app: android-metabase-mysql-dev
```
