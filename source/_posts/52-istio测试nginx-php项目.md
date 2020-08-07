---
title: istio环境下配置nginx+php
copyright: true
date: 2020-08-04 16:22:10
tags:
  - istio
  - k8s
top: 10
---
将nginx+php的环境结合istio的智能路由功能做一个简单实践
<!--more-->





- [istio中文官方-协议选择](https://istio.io/latest/zh/docs/ops/configuration/traffic-management/protocol-selection/)
- [istio中文官方-virtualService](https://istio.io/latest/zh/docs/reference/config/networking/virtual-service/)

<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

> 安装部署请参考官方 [https://istio.io/latest/zh/docs/setup/getting-started/](https://istio.io/latest/zh/docs/setup/getting-started/)

### 一 部署nginx+php,并设置简单智能路由

>  环境说明

```sh
1. k8s:     1.15.11
2. istio:   1.6.7
3. istio-alpha ns设置了自动注入:
    kubectl label namespace istio-alpha istio-injection=enabled
    kubectl get namespaces istio-alpha --show-labels
```


#### 1.1 安装部署php-fpm
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: php-fpm-v1
  namespace: istio-alpha
  labels:
    app: php-fpm
    version: v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: php-fpm
      version: v1
  template:
    metadata:
      labels:
        app: php-fpm
        version: v1
    spec:
      containers:
      - name: app
        image: hub.xxx.com/bq/php:7.0.13-fpm
        imagePullPolicy: Always
        ports:
        - name: tcp
          protocol: TCP
          containerPort: 9000
        resources:
          requests:
            cpu: "50m"
          limits:
            cpu: "100m"
        volumeMounts:
        - name: php-fpm-v1-data
          mountPath: /webwww
      volumes:
        - name: php-fpm-v1-data
          nfs:
            server: x.x.x.x
            path: /disk/k8s-nfs-data/k8s1-t/php-fpm-7-0-13/webwww-data        
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: php-fpm-v2
  namespace: istio-alpha
  labels:
    app: php-fpm
    version: v2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: php-fpm
      version: v2
  template:
    metadata:
      labels:
        app: php-fpm
        version: v2
    spec:
      containers:
      - name: app
        image: hub.xxx.com/bq/php:7.0.13-fpm
        imagePullPolicy: Always
        ports:
        - name: tcp
          protocol: TCP
          containerPort: 9000
        resources:
          requests:
            cpu: "50m"
          limits:
            cpu: "100m"
        volumeMounts:
        - name: php-fpm-v2-data
          mountPath: /webwww
      volumes:
        - name: php-fpm-v2-data
          nfs:
            server: x.x.x.x
            path: /disk/k8s-nfs-data/k8s1-t/php-fpm-7-0-13/webwww-data
---
apiVersion: v1
kind: Service
metadata:
  name: php-fpm
  namespace: istio-alpha
  labels:
    app: php-fpm
spec:
  ports:
    - name: tcp
      port: 9000
      protocol: TCP
  selector:
    app: php-fpm
```


#### 1.2 安装部署nginx
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-v1
  labels:
    app: nginx
    version: v1
  namespace: istio-alpha
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
      version: v1
  template:
    metadata:
      labels:
        app: nginx
        version: v1
    spec:
      containers:
      - name: nginx-v1
        image: hub.xxx.com/bq/nginx:1.16
        ports:
        - containerPort: 80
          name: http
          protocol: TCP
        resources:
          requests:
            cpu: "30m"
          limits:
            cpu: "100m"
        volumeMounts:
        - name: nginx-www-dev
          mountPath: /webwww
        - name: nginx-v1-cm
          mountPath: /etc/nginx/conf.d/
      volumes:
        - name: nginx-www-dev
          nfs:
            server: x.x.x.x
            path: /disk/k8s-nfs-data/k8s1-t/php-fpm-7-0-13/webwww-data
        - name: nginx-v1-cm
          configMap:
            name: nginx-v1-cm
---
kind: ConfigMap
metadata:
  name: nginx-v1-cm
  labels:
    app: nginx-v1
  namespace: istio-alpha
apiVersion: v1
data:
  nginx.conf: |
        server {
                listen 80 default_server;
                server_name  _;
                root   /webwww/test-v1;
                add_header "X" "v1";
                location = /50x.html {
                    root   html;
                }

               location / {
                    index index.php  index.html index.htm;
                }

                location ~ \.php$ {
                    fastcgi_pass   php-fpm:9000;
                    fastcgi_index  index.php;
                    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                    fastcgi_param  HTTP_HOST          $server_name;
                    include        fastcgi_params;
                }
        }
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-v2
  labels:
    app: nginx
    version: v2
  namespace: istio-alpha
spec:
  replicas: 1
  selector:
    matchLabels:
      app: nginx
      version: v2
  template:
    metadata:
      labels:
        app: nginx
        version: v2
    spec:
      containers:
      - name: nginx-v2
        image: hub.xxx.com/bq/nginx:1.16
        ports:
        - containerPort: 80
          name: http
          protocol: TCP
        resources:
          requests:
            cpu: "30m"
          limits:
            cpu: "100m"
        volumeMounts:
        - name: nginx-www-dev
          mountPath: /webwww
        - name: nginx-v2-cm
          mountPath: /etc/nginx/conf.d/
      volumes:
        - name: nginx-www-dev
          nfs:
            server: x.x.x.x
            path: /disk/k8s-nfs-data/k8s1-t/php-fpm-7-0-13/webwww-data
        - name: nginx-v2-cm
          configMap:
            name: nginx-v2-cm
---
kind: ConfigMap
metadata:
  name: nginx-v2-cm
  labels:
    app: nginx-v2
  namespace: istio-alpha
apiVersion: v1
data:
  nginx.conf: |
        server {
         listen 80 default_server;
                server_name  _;
                root   /webwww/test-v2;
                add_header "X" "v2";
                location = /50x.html {
                    root   html;
                }

               location / {
                    index index.php  index.html index.htm;
                }

                location ~ \.php$ {
                    fastcgi_pass   php-fpm:9000;
                    fastcgi_index  index.php;
                    fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                    fastcgi_param  HTTP_HOST          $server_name;
                    include        fastcgi_params;
                }
        }
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
  namespace: istio-alpha
  labels:
    app: nginx
spec:
  ports:
    - name: http
      port: 80
      protocol: TCP
  selector:
    app: nginx
```

#### 1.3 配置默认destinationRule
```yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: nginx
  namespace: istio-alpha
spec:
  host: nginx
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: php-fpm
  namespace: istio-alpha
spec:
  host: php-fpm
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2
```

#### 1.4 配置nginx的gateway和VirtualService
```yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: nginx-gateway
  namespace: istio-alpha
spec:
  selector:
    istio: ingressgateway # use istio default controller
  servers:
  - port:
      number: 80
      name: nginx-80
      protocol: HTTP
    hosts:
    - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: nginx-gateway
  namespace: istio-alpha
spec:
  hosts:
  - "*"
  gateways:
  - nginx-gateway
  http:
  - match:
    - uri:
        exact: /phpinfo.php
    route:
    - destination:
        host: nginx
        port:
          number: 80
        subset: v1
      weight: 90
    - destination:
        host: nginx
        port:
          number: 80
        subset: v2
      weight: 10
```



>  以上配置之后即可在kiali查看 graph



![](//zhangzw001.github.io/images/52/img-all.png)



#### 1.5 简单配置流量全部切到v1 或v2

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: nginx-gateway
  namespace: istio-alpha
spec:
  hosts:
  - "*"
  gateways:
  - nginx-gateway
  http:
  - match:
    - uri:
        exact: /phpinfo.php
    route:
    - destination:
        host: nginx
        port:
          number: 80
        subset: v2
```


> 当然也可以根据uri match选择不同的路由
```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: nginx-gateway
  namespace: istio-alpha
spec:
  hosts:
  - "*"
  gateways:
  - nginx-gateway
  http:
  - match:
    - uri:
        exact: /phpinfo.php
    route:
    - destination:
        host: nginx
        port:
          number: 80
        subset: v2
  - match:
    - uri:
        exact: /a.php
    route:
    - destination:
        host: nginx
        port:
          number: 80
        subset: v1
```


#### 1.6 配置php-fpm的virtualService

> 将流量全部转到 v1版本


```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: php-fpm
  namespace: istio-alpha
spec:
  hosts:
  - php-fpm
  tcp:
  - match:
    - port: 9000
    route:
    - destination:
        host: php-fpm
        port:
          number: 9000
        subset: v1
```

> 将流量分成1:9

```yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: php-fpm
  namespace: istio-alpha
spec:
  hosts:
  - php-fpm
  tcp:
  - match:
    - port: 9000
    route:
    - destination:
        host: php-fpm
        port:
          number: 9000
        subset: v1
      weight: 10
    - destination:
        host: php-fpm
        port:
          number: 9000
        subset: v2
      weight: 90
```

![](//zhangzw001.github.io/images/52/img-fpm-1-9.png)

![](//zhangzw001.github.io/images/52/img-all2.jpg)

---



<center>
<img src="//zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>



### $ 问题说明
#### $.1 协议选择说明


> 通过声明一个 Service 端口，协议可以被手动指定 `name: <protocol>[-<suffix>]`。 下列协议是被支持的：


```
grpc
grpc-web
http
http2
https
mongo
mysql*
redis*
tcp
tls
udp
```

> 因此注意,我们在部署deployment和service的时候, ports.name 会被istio 认为是协议

> 例如下面的例子中, name: tcp, 如果配置了其他的值, 会导致nginx->php-fpm 协议异常, 可能会出现错误:

`upstream sent unsupported FastCGI protocol version: 72 while reading response header from upstream`


```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: php-fpm-v1
  namespace: istio-alpha
  labels:
    app: php-fpm
    version: v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: php-fpm
      version: v1
  template:
    metadata:
      labels:
        app: php-fpm
        version: v1
    spec:
      containers:
      - name: app
        image: php:7.0.13-fpm
        imagePullPolicy: Always
        ports:
        - name: tcp
          protocol: TCP
          containerPort: 9000
          ...
---
apiVersion: v1
kind: Service
metadata:
  name: php-fpm
  namespace: istio-alpha
  labels:
    app: php-fpm
spec:
  ports:
    - name: tcp
      port: 9000
      protocol: TCP
  selector:
    app: php-fpm
```

---

