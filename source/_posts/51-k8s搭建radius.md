---
title: k8s搭建radius
copyright: true
date: 2020-07-27 10:19:25
tags:
  - k8s
  - freeradius
  - daloradius
categories:
  - [k8s]
  - radius
---

搭建lnmp+freeradius的账号认证服务

<!-- more -->


<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 一 记录
```
docker:   17.03.2-ce
k8s:   1.15.11
php:   7.0.13
mysql:   5.6
freeraidus:  3.0.21
daloradius:  1.1-2 / 08 Aug 2019

```

> 配置修改简单说明:

```
1. 数据库创建说明
create database radius;
grant all on radius.* to radius@'%' identified by 'xxx';
flush privileges;

# 导入表结构
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p < mods-config/sql/main/mysql/schema.sql
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p < daloradius-php/contrib/db/mysql-daloradius.sql
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p < daloradius-php/contrib/db/fr2-mysql-daloradius-and-freeradius.sql

2. 修改freeRADIUS配置
vim /etc/raddb/radiusd.conf
# 这里我是配合nginx,php统一路径
logdir = /nginx_logs 

3. 修改为sql认证
 cd /etc/raddb/mods-enabled
 ln -s ../mods-available/sql

4. 修改FreeRADIUS中的mysql 配置文件
 dialect = "mysql"
 //下列配置前的注释去掉
 server = "k8s-db-t.xxx.com" //mysql服务器地址,如果是同一个k8s集群, 写k8s内网的svc域名即可,例如: freeradius-mysql-dev 或 freeradius-mysql-dev.radius-dev.svc.cluster.local
 port = 3326 //mysql 端口号
 login = "radius" //myqsl 登录用户名
 password = "xxx" //mysql 登录密码
 read_clients = yes

5. 开放daloradius服务器验证权限
vim /etc/raddb/clients.conf
client php-fpm {
 ipaddr = php-fpm
 secret  = testing123
}

6. 修改daloradius默认php配置
vim daloradius-php/library/daloradius.conf.php
$configValues['CONFIG_MAINT_TEST_USER_RADIUSSERVER'] = 'radius';
$configValues['CONFIG_MAINT_TEST_USER_RADIUSSECRET'] = 'testing123';
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 二 首先搭建数据库

#### k8s-freeradius-mysql-dev_5.6.36-configmap.yml

```yaml
---
kind: ConfigMap
metadata:
  name: freeradius-mysql-dev
  labels:
    app: freeradius-mysql-dev
  namespace: db
apiVersion: v1
data:
  my.cnf: |

    [mysqld]
    innodb_file_per_table=1
    user=mysql

    datadir=/data
    socket=/data/mysql.sock
    symbolic-links=0

    binlog_format=mixed

    #log-bin=mysql-bin
    log-bin=/data/mysql-bin.log

    #general_log   = 1
    #general_log_file = /data/general.log


    #日志
    log-error=/data/mysqld.log

    innodb_log_file_size = 256M
    thread_cache_size = 50


    max_allowed_packet=16M
    max_binlog_size=500M
    #old_passwords=1
    character-set-server=utf8
    max_connections=3000
    skip-name-resolve
    max_allowed_packet=64M
    tmp_table_size=200M

    server-id=101
    port=3306

    skip_slave_start
    expire_logs_days=7


    [mysqld_safe]
    log-error=/data/mysqld.log
    pid-file=/data/mysqld.pid

    [mysql]
    no-auto-rehash
    user=root
    default-character-set=utf8
    socket=/data/mysql.sock

    [client]
    socket=/data/mysql.sock
```

#### k8s-freeradius-mysql-dev_5.6.36.yml

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: freeradius-mysql-dev
  name: freeradius-mysql-dev
  namespace: db
spec:
  replicas: 1
  selector:
    matchLabels:
      app: freeradius-mysql-dev
  template:
    metadata:
      labels:
        app: freeradius-mysql-dev
    spec:
      containers:
       - name: freeradius-mysql-dev
         image: hub.xxx.com/mysql:5.6.36-Asia
         ports:
         - containerPort: 3306
           name: db-port
         resources:
           requests:
             cpu: "50m"
           limits:
             cpu: "1"
         env:
         - name: MYSQL_ROOT_PASSWORD
           value: "xxx"
         volumeMounts:
         - name: freeradius-mysql-dev-data
           mountPath: /data
         - name: freeradius-mysql-dev-conf
           mountPath: /etc/mysql/my.cnf
           subPath: my.cnf
      volumes:
        - name: freeradius-mysql-dev-data
          nfs:
            server: xxx.xxx.xxx.194
            path: /disk/k8s-nfs-data/k8s-db-t/freeradius-mysql-dev
        - name: freeradius-mysql-dev-conf
          configMap:
            name: freeradius-mysql-dev

---
kind: Service
apiVersion: v1
metadata:
  labels:
    app: freeradius-mysql-dev
  name: freeradius-mysql-dev
  namespace: db
spec:
  type: NodePort
  ports:
    - port: 3306
      name: db-port
      targetPort: 3306
      nodePort: 3326
      protocol: TCP
  selector:
    app: freeradius-mysql-dev
```

#### 创建库和账号

```shell
create database radius;
grant all on radius.* to radius@'%' identified by 'xxxxxxxxxxxxxxxxxx';
flush privileges;

# 测试登录
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p
# 导入表结构
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p < mods-config/sql/main/mysql/schema.sql
mysql -hk8s-db-t.xxx.com -P3326 -uradius -p < daloradius-php/contrib/db/mysql-daloradius.sql
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 三 部署freeradius

#### deployment-freeradius.yml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: freeradius-dev
  labels:
    app: freeradius-dev
  namespace: radius-dev
spec:
  replicas: 1
  selector:
    matchLabels:
      app: freeradius-dev
  template:
    metadata:
      labels:
        app: freeradius-dev
    spec:
      containers:
      - name: freeradius-dev
        image: hub.xxx.com/freeradius-server:3.0.21
        ports:
        - containerPort: 1812
          name: port-1812
          protocol: UDP
        - containerPort: 1813
          name: port-1813
          protocol: UDP
        resources:
          requests:
            cpu: "30m"
          limits:
            cpu: "1"
        volumeMounts:
        - name: daloradius-freeradius-sql-dev
          mountPath: /etc/raddb/mods-available/sql
          subPath: sql
        - name: daloradius-freeradius-sql-dev
          mountPath: /etc/raddb/mods-enabled/sql
          subPath: sql
        - name: daloradius-freeradius-radiusd-dev
          mountPath: /etc/raddb/radiusd.conf
          subPath: radiusd.conf
        - name: daloradius-freeradius-clients-dev
          mountPath: /etc/raddb/clients.conf
          subPath: clients.conf
        - name: daloradius-freeradius-log
          mountPath: /nginx_logs
      volumes:
        - name: daloradius-freeradius-sql-dev
          configMap:
            name: daloradius-freeradius-sql-dev
        - name: daloradius-freeradius-radiusd-dev
          configMap:
            name: daloradius-freeradius-radiusd-dev
        - name: daloradius-freeradius-clients-dev
          configMap:
            name: daloradius-freeradius-clients-dev
        - name: daloradius-freeradius-log
          nfs:
            server: xxx.xxx.xxx.194
            path: /disk/k8s-nfs-data/k8s1-t/daloradius-php/nginx_logs
---
apiVersion: v1
kind: Service
metadata:
  name: freeradius-dev
  namespace: radius-dev
  labels:
    app: freeradius-dev
spec:
  type: ClusterIP
  ports:
    - name: port-1812
      port: 1812
      protocol: UDP
    - name: port-1813
      port: 1813
      protocol: UDP
  selector:
    app: freeradius-dev
---
kind: Service
apiVersion: v1
metadata:
  name: freeradius-dev-svc
  namespace: radius-dev
  labels:
    app: freeradius-dev
spec:
  type: NodePort
  ports:
    - name: port-1812
      port: 1812
      targetPort: 1812
      nodePort: 1812
      protocol: UDP
    - name: port-1813
      port: 1813
      targetPort: 1813
      nodePort: 1813
      protocol: UDP
  selector:
    app: freeradius-dev
```

#### configmap-freeradius-radiusd-conf.yaml 

```yaml
---
kind: ConfigMap
metadata:
  name: daloradius-freeradius-radiusd-dev
  labels:
    app: daloradius-freeradius-radiusd-dev
  namespace: radius-dev
apiVersion: v1
data:
  radiusd.conf: |
    prefix = /usr
    exec_prefix = /usr
    sysconfdir = /etc
    localstatedir = /var
    sbindir = ${exec_prefix}/sbin
    logdir = /nginx_logs
    raddbdir = /etc/freeradius
    radacctdir = ${logdir}/radacct


    name = freeradius
    confdir = ${raddbdir}
    modconfdir = ${confdir}/mods-config
    certdir = ${confdir}/certs
    cadir   = ${confdir}/certs
    run_dir = ${localstatedir}/run/${name}

    # Should likely be ${localstatedir}/lib/radiusd
    db_dir = ${raddbdir}


    libdir = /usr/lib/freeradius


    pidfile = ${run_dir}/${name}.pid

    correct_escapes = true


    max_request_time = 30

    cleanup_delay = 5

    max_requests = 16384

    hostname_lookups = no


    log {

     destination = files

     colourise = yes

     file = ${logdir}/radius.log

     syslog_facility = daemon

     stripped_names = no

     auth = yes

     # auth_accept = no
     # auth_reject = no
     auth_badpass = yes
     auth_goodpass = yes
     msg_denied = "You are already logged in - access denied"
    }

    checkrad = ${sbindir}/checkrad

    ENV {

    }


    security {

     user = freerad
     group = freerad

     allow_core_dumps = no

     max_attributes = 200

     reject_delay = 1

     status_server = yes


    }

    proxy_requests  = yes
    $INCLUDE proxy.conf

    $INCLUDE clients.conf

    thread pool {

     start_servers = 5

     max_servers = 32

     min_spare_servers = 3
     max_spare_servers = 10

     max_requests_per_server = 0

     auto_limit_acct = no
    }

    modules {

     $INCLUDE mods-enabled/
    }


    instantiate {

    }


    policy {
     $INCLUDE policy.d/
    }

    $INCLUDE sites-enabled/


```

#### configmap-freeradius-clients-conf.yaml

```yaml
---
kind: ConfigMap
metadata:
  name: daloradius-freeradius-clients-dev
  labels:
    app: daloradius-freeradius-clients-dev
  namespace: radius-dev
apiVersion: v1
data:
  clients.conf: |
    client php-fpm {
     ipaddr = php-fpm
     secret  = testing123
    }
    client localhost {
     ipaddr = 127.0.0.1
     proto = *
     secret = testing123
     require_message_authenticator = no
     nas_type  = other # localhost isn't usually a NAS...
     limit {
      max_connections = 16
      lifetime = 0
      idle_timeout = 30
     }
    }
    client localhost_ipv6 {
     ipv6addr = ::1
     secret  = testing123
    }
```


#### configmap-freeradius-sql.yaml

> 主要是修改 Connection info 的内容

```
---
kind: ConfigMap
metadata:
  name: daloradius-freeradius-sql-dev
  labels:
    app: daloradius-freeradius-sql-dev
  namespace: radius-dev
apiVersion: v1
data:
  sql: |
    sql {
        dialect = "mysql"
        driver = "rlm_sql_mysql"
        sqlite {
            filename = "/tmp/freeradius.db"
            busy_timeout = 200
            bootstrap = "${modconfdir}/${..:name}/main/sqlite/schema.sql"
    }

    mysql {
        }
        warnings = auto
    }

    postgresql {
        send_application_name = yes
    }

    mongo {
        appname = "freeradius"
        tls {
             certificate_file = /path/to/file
             certificate_password = "password"
             ca_file = /path/to/file
             ca_dir = /path/to/directory
             crl_file = /path/to/file
             weak_cert_validation = false
             allow_invalid_hostname = false
            }
    }

    server = "k8s-db-t.xxx.com"
    port = 3326
    login = "radius"
    password = "xxxxxxxxxxxxxxxxxx"
    read_clients = yes
    radius_db = "radius"
    acct_table1 = "radacct"
    acct_table2 = "radacct"
    postauth_table = "radpostauth"
    authcheck_table = "radcheck"
    groupcheck_table = "radgroupcheck"
    authreply_table = "radreply"
    groupreply_table = "radgroupreply"
    usergroup_table = "radusergroup"
    delete_stale_sessions = yes

    pool {
        start = ${thread[pool].start_servers}
        min = ${thread[pool].min_spare_servers}
        max = ${thread[pool].max_servers}
        spare = ${thread[pool].max_spare_servers}
        uses = 0
        retry_delay = 30
        lifetime = 0
        idle_timeout = 60
    }
    client_table = "nas"
    group_attribute = "SQL-Group"
    $INCLUDE ${modconfdir}/${.:name}/main/${dialect}/queries.conf
    }
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 四 部署nignx+php7的daloradius web管理后台

#### php7部署配置

##### php镜像安装扩展 Dockerfile

```yaml
from hub.xxx.com/php:develop

user root

RUN pear install DB \
  && pear install -a Mail \
  && pear install -a Mail_Mime
```

##### deployment-php.yml

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: daloradius-php-dev
  labels:
    app: daloradius-php-dev
  namespace: radius-dev
spec:
  replicas: 1
  strategy:
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
    type: RollingUpdate
  selector:
    matchLabels:
      app: daloradius-php-dev
  template:
    metadata:
      labels:
        app: daloradius-php-dev
    spec:
      containers:
      - name: daloradius-php-dev
        image: hub.xxx.com/php:radius
        imagePullPolicy: Always
        ports:
        - containerPort: 9000
          name: fpm-9000
          protocol: TCP
        resources:
          requests:
            cpu: "50m"
          limits:
            cpu: "600m"
        volumeMounts:
        - name: daloradius-nginx-dev
          mountPath: /webwww
        - name: daloradius-php-cfg-dev
          mountPath: "/usr/local/etc/php/php.ini"
          subPath: php.ini
        - name: daloradius-fpm-cfg-dev
          mountPath: "/usr/local/etc/php-fpm.d/www.conf"
          subPath: www.conf
      volumes:
        - name: daloradius-nginx-dev
          nfs:
            server: xxx.xxx.xxx.194
            path: /disk/k8s-nfs-data/k8s1-t/daloradius-php
        - name: daloradius-php-cfg-dev
          configMap:
            name: daloradius-php-cfg-dev
        - name: daloradius-fpm-cfg-dev
          configMap:
            name: daloradius-fpm-cfg-dev
---
apiVersion: v1
kind: Service
metadata:
  name: daloradius-php-dev
  namespace: radius-dev
  labels:
    app: daloradius-php-dev
spec:
  type: ClusterIP
  ports:
    - name: fpm-9000
      port: 9000
      protocol: TCP
  selector:
    app: daloradius-php-dev
---
apiVersion: v1
kind: Service
metadata:
  name: daloradius-php-dev-svc
  namespace: radius-dev
  labels:
    app: daloradius-php-dev
spec:
  type: NodePort
  selector:
    app: daloradius-php-dev
  ports:
   - name: fpm-9000
     port: 9000
     targetPort: 9000
     nodePort: 32101
     protocol: TCP
```

##### configmap-php-fpm.yaml

```yaml
---
kind: ConfigMap
metadata:
  name: daloradius-fpm-cfg-dev
  labels:
    app: daloradius-fpm-cfg-dev
  namespace: radius-dev
apiVersion: v1
data:
  www.conf: |
        [www]
        user = 101
        group = 101
        listen = 127.0.0.1:9000
        pm = static
        pm.max_children = 20
        pm.start_servers = 10
        pm.min_spare_servers = 5
        pm.max_spare_servers = 5
```


##### configmap-php.yaml

```yaml
---
kind: ConfigMap
metadata:
  name: daloradius-php-cfg-dev
  labels:
    app: daloradius-php-cfg-dev
  namespace: radius-dev
apiVersion: v1
data:
  php.ini: |
        [PHP]
        engine = On
        short_open_tag = Off
        precision = 14
        output_buffering = 4096
        zlib.output_compression = Off
        implicit_flush = Off
        unserialize_callback_func =
        serialize_precision = 17
        disable_functions =
        disable_classes =
        zend.enable_gc = On
        expose_php = On
        max_execution_time = 30
        max_input_time = 60
        memory_limit = 128M
        max_input_vars = 10000
        error_reporting = E_ALL & ~E_DEPRECATED & ~E_STRICT
        display_errors = On
        display_startup_errors = Off
        log_errors = On
        log_errors_max_len = 1024
        ignore_repeated_errors = Off
        ignore_repeated_source = Off
        report_memleaks = On
        track_errors = Off
        html_errors = On
        error_log = php_errors.log
        variables_order = "GPCS"
        request_order = "GP"
        register_argc_argv = Off
        auto_globals_jit = On
        post_max_size = 8M
        auto_prepend_file =
        auto_append_file =
        default_mimetype = "text/html"
        default_charset = "UTF-8"
        doc_root =
        user_dir =
        enable_dl = Off
        file_uploads = On
        upload_max_filesize = 2M
        max_file_uploads = 20
        allow_url_fopen = On
        allow_url_include = Off
        default_socket_timeout = 60
        [CLI Server]
        cli_server.color = On
        [Date]
        date.timezone =Asia/Shanghai
        [filter]
        [iconv]
        [intl]
        [sqlite3]
        [Pcre]
        [Pdo]
        [Pdo_mysql]
        pdo_mysql.cache_size = 2000
        pdo_mysql.default_socket=
        [Phar]
        [mail function]
        SMTP = localhost
        smtp_port = 25
        mail.add_x_header = On
        [SQL]
        sql.safe_mode = Off
        [ODBC]
        odbc.allow_persistent = On
        odbc.check_persistent = On
        odbc.max_persistent = -1
        odbc.max_links = -1
        odbc.defaultlrl = 4096
        odbc.defaultbinmode = 1
        [Interbase]
        ibase.allow_persistent = 1
        ibase.max_persistent = -1
        ibase.max_links = -1
        ibase.timestampformat = "%Y-%m-%d %H:%M:%S"
        ibase.dateformat = "%Y-%m-%d"
        ibase.timeformat = "%H:%M:%S"
        [MySQLi]
        mysqli.max_persistent = -1
        mysqli.allow_persistent = On
        mysqli.max_links = -1
        mysqli.cache_size = 2000
        mysqli.default_port = 3306
        mysqli.default_socket =
        mysqli.default_host =
        mysqli.default_user =
        mysqli.default_pw =
        mysqli.reconnect = Off
        [mysqlnd]
        mysqlnd.collect_statistics = On
        mysqlnd.collect_memory_statistics = Off
        [OCI8]
        [PostgreSQL]
        pgsql.allow_persistent = On
        pgsql.auto_reset_persistent = Off
        pgsql.max_persistent = -1
        pgsql.max_links = -1
        pgsql.ignore_notice = 0
        pgsql.log_notice = 0
        [bcmath]
        bcmath.scale = 0
        [browscap]
        [Session]
        session.save_handler = redis
        session.save_path = "tcp://xxx.xxx.xxx.194:6399"
        session.use_strict_mode = 0
        session.use_cookies = 1
        session.use_only_cookies = 1
        session.name = PHPSESSID
        session.auto_start = 0
        session.cookie_lifetime = 0
        session.cookie_path = /
        session.cookie_domain =
        session.cookie_httponly =
        session.serialize_handler = php
        session.gc_probability = 1
        session.gc_divisor = 1000
        session.gc_maxlifetime = 1440
        session.referer_check =
        session.cache_limiter = nocache
        session.cache_expire = 180
        session.use_trans_sid = 0
        session.hash_function = 0
        session.hash_bits_per_character = 5
        url_rewriter.tags = "a=href,area=href,frame=src,input=src,form=fakeentry"
        [Assertion]
        zend.assertions = -1
        tidy.clean_output = Off
        [soap]
        soap.wsdl_cache_enabled=1
        soap.wsdl_cache_dir="/tmp"
        soap.wsdl_cache_ttl=86400
        soap.wsdl_cache_limit = 5
        [sysvshm]
        [ldap]
        ldap.max_links = -1
```


#### nginx部署配置

##### deployment-nginx.yml

```yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: daloradius-nginx-dev
  labels:
    app: daloradius-nginx-dev
  namespace: radius-dev
spec:
  replicas: 1
  selector:
    matchLabels:
      app: daloradius-nginx-dev
  template:
    metadata:
      labels:
        app: daloradius-nginx-dev
    spec:
      containers:
      - name: daloradius-nginx-dev
        image: hub.xxx.com/nginx:1.16.0-develop
        ports:
        - containerPort: 80
          name: nginx-80
          protocol: TCP
        resources:
          requests:
            cpu: "30m"
          limits:
            cpu: "500m"
        volumeMounts:
        - name: nginx-www-dev
          mountPath: /webwww
        - name: daloradius-nginx-dev-cm
          mountPath: /etc/nginx/nginx.conf
          subPath: nginx.conf
      volumes:
        - name: nginx-www-dev
          nfs:
            server: xxx.xxx.xxx.194
            path: /disk/k8s-nfs-data/k8s1-t/daloradius-php
        - name: daloradius-nginx-dev-cm
          configMap:
            name: daloradius-nginx-dev-cm
---
kind: Service
apiVersion: v1
metadata:
 labels:
   app: daloradius-nginx-dev
 name: daloradius-nginx-dev
 namespace: radius-dev
spec:
 type: NodePort
 ports:
   - name: nginx-80
     port: 80
     targetPort: 80
     nodePort: 32100
     protocol: TCP
 selector:
   app: daloradius-nginx-dev
---
```

##### configmap-php-nginx.yaml

```yaml
---
kind: ConfigMap
metadata:
  name: daloradius-nginx-dev-cm
  labels:
    app: daloradius-nginx-dev
  namespace: radius-dev
apiVersion: v1
data:
  nginx.conf: |
    user  www-data;
    worker_processes  1;

    error_log  /var/log/nginx/error.log warn;
    pid        /var/run/nginx.pid;


    events {
        worker_connections  1024;
    }


    http {
        include       /etc/nginx/mime.types;
        default_type  application/octet-stream;

        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log  main;

        sendfile        on;
        #tcp_nopush     on;

        keepalive_timeout  65;

        #gzip  on;

        include /etc/nginx/conf.d/*.conf;
        server {
                listen 80 default_server;
                server_name  radius.xxx.com ;
                root   /webwww;

                location = /50x.html {
                    root   html;
                }

               location / {
                    index index.php  index.html index.htm;
                }

                location ~ \.php$ {
                    fastcgi_pass   daloradius-php-dev:9000;
                    fastcgi_index  index.php;
                    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                    fastcgi_param  HTTP_HOST          $server_name;
                    include        fastcgi_params;
                }
        }
    }
```

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### 五 测试

#### 通过前端nginx代理转发到nodeport端口
```
 server {
        listen  80;
        charset utf-8;
        listen 443 ssl http2;
        server_name radius.xxx.com;

        ssl_certificate   /etc/nginx/server.pem;
        ssl_certificate_key   /etc/nginx/server.key;
        ssl_session_timeout 5m;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers AESGCM:ALL:!DH:!EXPORT:!RC4:+HIGH:!MEDIUM:!LOW:!aNULL:!eNULL;
        ssl_prefer_server_ciphers on;

        #转向预发布环境
        location / {
            proxy_pass http://xxx.xxx.xxx.221:32100/;
            proxy_redirect http://$host:32100  http://$host;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

#### 配置k8s的ingress

```yaml
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: daloradius-nginx-dev
  labels:
    app: daloradius-nginx-dev
  namespace: radius-dev
  annotations:
    kubernetes.io/ingress.class: "traefik"
spec:
  rules:
  - host: radius.xxx.com
    http:
      paths:
      - path: /
        backend:
          serviceName: daloradius-nginx-dev
          servicePort: 80
```

#### 登录测试

```
登录地址: radius.xxx.com
账号密码: administrator/radius
```

#### 通过后台新建账号之后, 测试账号连通性

##### 命令行
```
# 在freeradius 容器内支线
radtest xxx xxx 127.0.0.1 0 testing123


```

#### 通过radius.xxx.com 管理页面测试连通性
> 这是认证通过的
![](//zhangzw001.github.io/images/51/img2.jpg)

> 这是被rejected
![](//zhangzw001.github.io/images/51/img.jpg)
