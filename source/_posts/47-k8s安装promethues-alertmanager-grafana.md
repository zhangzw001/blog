---
title: 47-k8s安装promethues+alertmanager+grafana
copyright: true
date: 2020-05-14 18:34:47
tags:
  - k8s
  - promethues
categories:
  - [k8s, prometheus]

---
本文主要是针对prometheus 简单部署 , 考虑到测试资源有限,为更精简自定义按照监控,减少多余资源占用, 也同时更了解prometheus的更多细节, 这里没有使用prometheus-operator
<!-- more -->



- 1 [K8s上部署原生的prometheus](https://juejin.im/post/5d4ac8e9f265da03e921b463)
- 2 [prometheus-operator 方式部署](https://www.qikqiak.com/post/first-use-prometheus-operator/)
- 3 [docker-compose快速搭建 Prometheus+Grafana监控系统](https://blog.51cto.com/msiyuetian/2369130)
- 4 [一套prometheus监控多个k8s集群,详细讲解配置](https://jeremy-xu.oschina.io/2018/11/%E4%BD%BF%E7%94%A8prometheus%E7%9B%91%E6%8E%A7%E5%A4%9Ak8s%E9%9B%86%E7%BE%A4/)
- 5 [使用prometheus监控traefik、redis、k8s集群各节点、各节点kubelet](https://blog.csdn.net/ywq935/article/details/80847161)
- 6 [grafana 监控模板下载](https://grafana.com/grafana/dashboards?dataSource=prometheus&search=docker&orderBy=name&direction=asc)


> 考虑到测试资源有限,为更精简自定义按照监控,减少多余资源占用, 也同时更了解prometheus的更多细节, 这里没有使用prometheus-operator


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 搭建prometheus

#### 创建ns
```
tee ns.yml <<- EOF
apiVersion: v1
kind: Namespace
metadata:
  name: monitoring
EOF


kubectl apply -f ns.yml

```

#### prometheus-clusterRole.yml
```
tee prometheus-clusterRole.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: prometheus-k8s
rules:
  - apiGroups:
      - ""
    resources:
      - nodes/metrics
    verbs:
      - get
  - nonResourceURLs:
      - /metrics
    verbs:
      - get
EOF
```

#### prometheus-clusterRoleBinding.yml
```
tee prometheus-clusterRoleBinding.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: prometheus-k8s
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: prometheus-k8s
subjects:
  - kind: ServiceAccount
    name: prometheus-k8s
    namespace: monitoring
EOF
```

#### prometheus-serviceAccount.yml
```
tee prometheus-serviceAccount.yml <<- EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: prometheus-k8s
  namespace: monitoring
EOF
```



#### 创建角色
```
kubectl apply -f prometheus-clusterRole.yml
kubectl apply -f prometheus-clusterRoleBinding.yml
kubectl apply -f prometheus-serviceAccount.yml

```

> 这样我们就创建了一个 ServiceAccount，名为 prometheus-k8s，这个 ServiceAccount 不仅现在可以用来获取 kubelet 的监控指标，后续 Prometheus 也会使用这个 serviceAccount 启动。


#### 创建完成后，会自动在生成一个 secret，里面包含了 token：

```
kubectl get secret -n monitoring
NAME                         TYPE                                  DATA      AGE
prometheus-k8s-token-6v9m9   kubernetes.io/service-account-token   3         13s
```

#### 获取token
```
token=$(kubectl get secret prometheus-k8s-token-6v9m9 -n monitoring -o json|jq -r '.data.token'|base64 -d)
token=$(kubectl get secret prometheus-k8s-token-pl2wx -n monitoring -o json|jq -r '.data.token'|base64 -d)
```



#### 通过token查看metrics
```
curl https://127.0.0.1:10250/metrics/cadvisor -k -H "Authorization: Bearer $token"
```

> kubelet 除了 /metrics/cadvisor 这个 url 之外，还有一个 /metrics，这是它本身的监控指标而非 pod 的


### 查看etc指标页面

etcd 的指标页面的 url 也是 /metrics，但是你想要访问它需要提供证书，因为它会验证客户端证书。当然你可以在它的启动参数中通过 --listen-metrics-urls http://ip:port 让监控指标页使用 http 而非 https，这样就不用提供证书了。
etcd 虽然部署在容器中，但是由于使用了 hostNetwork，所以我们可以通过直接访问 master 的 2379 端口访问它。默认它会采用了 https，因此我们需要提供它的 peer 证书。如果 k8s 是使用 kubeadm 安装的，etcd 的证书在 /etc/kubernetes/pki/etcd/ 目录下。
因此访问 etcd 的命令为：
curl https://127.0.0.1:2379/metrics --cacert /etc/kubernetes/pki/etcd/ca.crt --cert /etc/kubernetes/pki/etcd/healthcheck-client.crt --key /etc/kubernetes/pki/etcd/healthcheck-client.key
复制代码后面我们需要将这三个文件挂载到 Prometheus 容器中，以便它能收集 etcd 监控数据。

如果你并非容器部署的etcd,请使用你的etcd端口访问





---

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 安装 Prometheus

#### 我们先创建两个 configmap，一个是 Prometheus 的配置文件，另一个是告警的规则文件

```
tee prometheus-configmap.yml <<- EOF
apiVersion: v1
data:
  prometheus.yml: |
    global:
      evaluation_interval: 30s
      scrape_interval: 30s
      external_labels:
        prometheus: monitoring/k8s
    rule_files:
    - /etc/prometheus/rules/*.yml
    scrape_configs:
    - job_name: prometheus
      honor_labels: false
      kubernetes_sd_configs:
      - role: endpoints
        namespaces:
          names:
          - monitoring
      scrape_interval: 30s
      relabel_configs:
      - action: keep
        source_labels:
        - __meta_kubernetes_service_label_prometheus
        regex: k8s
      - source_labels:
        - __meta_kubernetes_endpoint_address_target_kind
        - __meta_kubernetes_endpoint_address_target_name
        separator: ;
        regex: Pod;(.*)
        replacement: ${1}
        target_label: pod
      - source_labels:
        - __meta_kubernetes_namespace
        target_label: namespace
      - source_labels:
        - __meta_kubernetes_service_name
        target_label: service
      - source_labels:
        - __meta_kubernetes_pod_name
        target_label: pod
      - source_labels:
        - __meta_kubernetes_service_name
        target_label: job
        replacement: ${1}
      - target_label: endpoint
        replacement: web
kind: ConfigMap
metadata:
  name: prometheus
  namespace: monitoring
EOF
```


> 首先看这段配置
```
kubernetes_sd_configs:
- role: endpoints
  namespaces:
    names:
    - monitoring
scrape_interval: 30s
```
这段配置使用的是 endpoint 的方式对 Prometheus 本身进行自动发现，你可以有疑问了，为什么不直接对自身的 127.0.0.1:9090 进行采集呢？因为考虑到 Prometheus 可能会有多台，这样即使有多台，它们也都在一个 job 下面。

 kubernetes_sd_configs 配置可以自动发现 k8s 中 node、service、pod、endpoint、ingress，并为其添加监控, 详见:  [kubernetes_sd_configs官方文档](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config)



> 再看下面这段配置
```
- action: keep
  source_labels:
    - __meta_kubernetes_service_label_prometheus
  regex: k8s
```

表示并非所有的endpoint 都会被抓取,  这里只抓取label 是 prometheus=k8s的标签, 所以只会监控prometheus的endpoint

默认不指定url 就是/metrics


> 接着看这段配置
```
- source_labels:
    - __meta_kubernetes_endpoint_address_target_kind
    - __meta_kubernetes_endpoint_address_target_name
  separator: ;
  regex: Pod;(.*)
  replacement: ${1}
  target_label: pod

```


如果 __meta_kubernetes_endpoint_address_target_kind 的值为 Pod，__meta_kubernetes_endpoint_address_target_name 的值为 prometheus-0，在它们之间加上一个 ; 之后，它们合起来就是 Pod;prometheus-0。使用正则表达式 Pod;(.*) 对其进行匹配，那么 ${1} 就是取第一个分组，它值就是 prometheus-0，最后将这个值交给 pod 这个标签。
因此这一段配置就是为所有采集到的监控指标增加一个 pod=prometheus-0 的标签。

> 以上配置其实可以去掉, 这里prometheus=k8s的匹配条件以及唯一,这段kind和name配置去掉影响不大

#### 创建configmap

```
kubectl apply -f prometheus-configmap.yml
```


#### Prometheus 规则文件 (后面会更新)
```
tee prometheus-config-rulefiles.yml <<- EOF
apiVersion: v1
data:
  k8s.yml: ""
kind: ConfigMap
metadata:
  name: prometheus-rulefiles
  namespace: monitoring
EOF


kubectl apply -f prometheus-config-rulefiles.yml

```



### role 和 roleBinding

因为 Prometheus 会使用之前创建的 sa（serviceAccount）prometheus-k8s 运行，那么光现在 prometheus-k8s 这个 sa 的权限是没有办法查看 service 以及 endpoint 的。
我们使用 kubernetes_sd_config 主要会使用 endpoint 进行发现，因此 prometheus-k8s 必须具备更多的权限。
我们需要创建更多的 role，并通过 roleBinding 将这些权限绑定到 prometheus-k8s 这个 sa 上，之所以不使用 clusterRole 是为了权限最小化。
这里会创建 prometheus-roleConfig.yml、prometheus-roleBindingConfig.yml、prometheus-roleSpecificNamespaces.yml、prometheus-roleBindingSpecificNamespaces.yml 这四个文件，它们的内容如下。


```
tee prometheus-roleConfig.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: prometheus-k8s-config
  namespace: monitoring
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
    verbs:
      - get
EOF


tee prometheus-roleBindingConfig.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: prometheus-k8s-config
  namespace: monitoring
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: prometheus-k8s-config
subjects:
  - kind: ServiceAccount
    name: prometheus-k8s
    namespace: monitoring
EOF

tee prometheus-roleSpecificNamespaces.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleList
items:
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      name: prometheus-k8s
      namespace: default
    rules:
      - apiGroups:
          - ""
        resources:
          - services
          - endpoints
          - pods
        verbs:
          - get
          - list
          - watch
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      name: prometheus-k8s
      namespace: kube-system
    rules:
      - apiGroups:
          - ""
        resources:
          - services
          - endpoints
          - pods
        verbs:
          - get
          - list
          - watch
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: Role
    metadata:
      name: prometheus-k8s
      namespace: monitoring
    rules:
      - apiGroups:
          - ""
        resources:
          - services
          - endpoints
          - pods
        verbs:
          - get
          - list
          - watch
EOF

tee prometheus-roleBindingSpecificNamespaces.yml <<- EOF
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBindingList
items:
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: prometheus-k8s
      namespace: default
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: prometheus-k8s
    subjects:
      - kind: ServiceAccount
        name: prometheus-k8s
        namespace: monitoring
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: prometheus-k8s
      namespace: kube-system
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: prometheus-k8s
    subjects:
      - kind: ServiceAccount
        name: prometheus-k8s
        namespace: monitoring
  - apiVersion: rbac.authorization.k8s.io/v1
    kind: RoleBinding
    metadata:
      name: prometheus-k8s
      namespace: monitoring
    roleRef:
      apiGroup: rbac.authorization.k8s.io
      kind: Role
      name: prometheus-k8s
    subjects:
      - kind: ServiceAccount
        name: prometheus-k8s
        namespace: monitoring
EOF

```
上面的权限中，config 是用来读 configmap 的，后面的就是 Prometheus 用来进行 k8s 发现时必须要的权限了，最后使用 rulebinding 将这些所有的权限都绑定到 prometheus-k8s 这个 sa 上。


```
kubectl delete -f prometheus-roleBindingConfig.yml
kubectl delete -f prometheus-roleBindingSpecificNamespaces.yml
kubectl delete -f prometheus-roleConfig.yml
kubectl delete -f prometheus-roleSpecificNamespaces.yml


kubectl apply -f prometheus-roleBindingConfig.yml
kubectl apply -f prometheus-roleBindingSpecificNamespaces.yml
kubectl apply -f prometheus-roleConfig.yml
kubectl apply -f prometheus-roleSpecificNamespaces.yml

```


#### 手动创建pv (我这里没用上, 用的是storageclass)
```
tee prometheus-pv.yml <<- EOF
apiVersion: v1
kind: PersistentVolume
metadata:
  name: prometheus
  labels:
    name: prometheus
spec:
  nfs:
    path: /disk/k8s-nfs-data/k8s-db-t/prometheus
    server: 172.16.xx.xx
  accessModes: ["ReadWriteMany", "ReadWriteOnce"]
  capacity:
    storage: 50Gi
EOF

kubectl apply -f prometheus-pv.yml

```

#### 创建 service
```
tee prometheus-service.yml <<- EOF
apiVersion: v1
kind: Service
metadata:
  name: prometheus
  namespace: monitoring
  labels:
    prometheus: k8s
spec:
  clusterIP: None
  ports:
    - name: web
      port: 9090
      protocol: TCP
      targetPort: web
  selector:
    app: prometheus
  type: ClusterIP

EOF

kubectl apply -f prometheus-service.yml
```

这里service定义了 app=prometheus 这样的标签选择器，因此 Prometheus 容器StatefulSet的时候必须存在这个标签。


#### 部署 Prometheus
```
tee prometheus-statefulset.yml <<- EOF
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app: prometheus
    prometheus: k8s
  name: prometheus
  namespace: monitoring
spec:
  replicas: 1
  volumeClaimTemplates:
  - metadata:
      name: prometheus-data
      annotations:
        volume.beta.kubernetes.io/storage-class: "nfs-retain" # 这里配置 上面创建的 storageclass 的名称
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 20Gi
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: prometheus
      prometheus: k8s
  serviceName: prometheus
  updateStrategy:
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: prometheus
        prometheus: k8s
    spec:
      serviceAccount: prometheus-k8s
      containers:
        - args:
            - --web.console.templates=/etc/prometheus/consoles
            - --web.console.libraries=/etc/prometheus/console_libraries
            - --config.file=/etc/prometheus/config/prometheus.yml
            - --storage.tsdb.path=/prometheus
            - --web.enable-admin-api
            - --storage.tsdb.retention.time=20d
            - --web.enable-lifecycle
            - --storage.tsdb.no-lockfile
            - --web.external-url=http://promethes-dev.k1s.club/
            - --web.route-prefix=/
          image: prom/prometheus:v2.11.1
          imagePullPolicy: IfNotPresent
          livenessProbe:
            failureThreshold: 6
            httpGet:
              path: /-/healthy
              port: web
              scheme: HTTP
            periodSeconds: 5
            successThreshold: 1
            timeoutSeconds: 3
          name: prometheus
          ports:
            - containerPort: 9090
              name: web
              protocol: TCP
          readinessProbe:
            failureThreshold: 120
            httpGet:
              path: /-/ready
              port: web
              scheme: HTTP
            periodSeconds: 5
            successThreshold: 1
            timeoutSeconds: 3
          resources:
            requests:
              memory: 400Mi
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          volumeMounts:
            - mountPath: /etc/prometheus/config
              name: config
              readOnly: true
            - mountPath: /prometheus
              name: prometheus-data
              #subPath: prometheus-db
            - mountPath: /etc/prometheus/rules/
              name: prometheus-rulefiles
            - mountPath: /etc/prometheus/secrets/etcd-client-cert
              name: secret-etcd-client-cert
              readOnly: true
      volumes:
        - name: config
          configMap:
            defaultMode: 420
            name: prometheus
        - name: prometheus-rulefiles
          configMap:
            defaultMode: 420
            name: prometheus-rulefiles
        - name: secret-etcd-client-cert
          secret:
            defaultMode: 420
            secretName: etcd-client-cert

EOF

kubectl apply -f prometheus-statefulset.yml
```

> 注意下这里如果你并非容器安装的etcd, 则mount的secret-etcd-client-cert可能不存在, 请自行挂载正确的目录, 如果etcd是http访问, 则不需要证书挂载

基础的 statfulset 相关的知识我就不多提了，说几个重点吧：

1 --storage.tsdb.retention.time=20d 这个启动选项表示 Prometheus 所收集的监控数据只保留 20 天，这个值最好不要太大。如果历史数据保存很久，建议写到持久存储中，比如 VictoriaMetrics、thanos、influxdb、opentsdb 等；
2 --web.enable-admin-api 这个启动选项表示启动管理员 api，你可以通过 api 对监控数据进行删除等；
3 serviceAccount 它的值必须是 prometheus-k8s，不然前面的赋权操作都白干了；
4 pod 必须存在 app: prometheus 这个标签，不然无法被前面创建的 service 选择到；
5 挂载了两个 configmap、一个 secret 还有一个存储卷。(我这里是采用storageclass, 当然你也可以用上面的手动创建pv)



#### 创建一个ingress

```
tee prometheus-ingress.yml <<- EOF
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: prometheus
  namespace: monitoring
spec:
  rules:
    - host: prometheus-dev.k1s.club
      http:
        paths:
          - path: /
            backend:
              serviceName: prometheus
              servicePort: 9090

EOF

kubectl apply -f prometheus-ingress.yml
```

至此, 我们就监控了prometheus本身
![](assets/prometheus-01-01.png)





---


### 问题1 k8s1.10报错rbac权限错误
> level=error ts=2020-05-11T10:00:03.091Z caller=klog.go:94 component=k8s_client_runtime func=ErrorDepth msg="/app/discovery/kubernetes/kubernetes.go:335: Failed to list *v1.Node: nodes is forbidden: User \"system:serviceaccount:monitoring:prometheus-k8s\" cannot list nodes at the cluster scope"

按照以下rbac增加了权限,则正常
```
prometheus-rbac.yml
apiVersion: v1
kind: ServiceAccount
metadata:
 name: prometheus-k8s
 namespace: monitoring
 labels:
   kubernetes.io/cluster-service: "true"
   addonmanager.kubernetes.io/mode: Reconcile
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
 name: prometheus-k8s
 labels:
   kubernetes.io/cluster-service: "true"
   addonmanager.kubernetes.io/mode: Reconcile
rules:
 - apiGroups:
     - ""
   resources:
     - nodes
     - nodes/metrics
     - services
     - endpoints
     - pods
   verbs:
     - get
     - list
     - watch
 - apiGroups:
     - ""
   resources:
     - configmaps
   verbs:
     - get
 - nonResourceURLs:
     - "/metrics"
   verbs:
     - get
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
 name: prometheus-k8s
 labels:
   kubernetes.io/cluster-service: "true"
   addonmanager.kubernetes.io/mode: Reconcile
roleRef:
 apiGroup: rbac.authorization.k8s.io
 kind: ClusterRole
 name: prometheus-k8s
subjects:
- kind: ServiceAccount
 name: prometheus-k8s
 namespace: monitoring

```



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 监控etcd


#### 如果是容器安装的etcd集群
```
tee kube-etcd-service.yml <<- EOF
apiVersion: v1
kind: Service
metadata:
  name: kube-etcd
  labels:
    k8s-app: kube-etcd
  namespace: kube-system
spec:
  clusterIP: None
  ports:
    - name: http-metrics
      port: 2379
      protocol: TCP
      targetPort: 2379
  selector:
    component: etcd
  type: ClusterIP

EOF
```

- 由于 etcd 处于 kube-system 名称空间，所以这里的 namespace 也应该是 kube-system；
- 因为 etcd pod 本身会存在 component=etcd 这个标签，所以这里的选择器使用的就是这个。

```
kubectl apply -f kube-etcd-service.yml
kubectl -n kube-system get endpoints kube-etcd

```

现在通过这个 endpoint 就能够访问到后面三台 etcd，现在只需要在 Prometheus 中添加对应的配置即可，配置内容如下。

```
- job_name: kube-etcd
  honor_labels: false
  kubernetes_sd_configs:
    - role: endpoints
      namespaces:
        names:
          - kube-system
  scheme: https
  tls_config:
    insecure_skip_verify: false
    ca_file: /etc/prometheus/secrets/etcd-client-cert/ca.crt
    cert_file: /etc/prometheus/secrets/etcd-client-cert/healthcheck-client.crt
    key_file: /etc/prometheus/secrets/etcd-client-cert/healthcheck-client.key
  relabel_configs:
    - action: keep
      source_labels:
        - __meta_kubernetes_service_label_k8s_app
      regex: kube-etcd
    - source_labels:
        - __meta_kubernetes_namespace
      target_label: namespace
    - source_labels:
        - __meta_kubernetes_service_name
      target_label: service
    - source_labels:
        - __meta_kubernetes_pod_name
      target_label: pod
    - target_label: endpoint
      replacement: http-metrics
  metric_relabel_configs:
    - action: drop
      regex: (etcd_debugging|etcd_disk|etcd_request|etcd_server|grpc_server).*
      source_labels:
        - __name__

```





#### 我这里有一个环境是http访问的, 则直接通过http://172.16.xx.xx:2379/metrics 监控即可
```
- job_name: 'etcd'
  scrape_interval: 60s
  static_configs:
    - targets: ['172.16.xx.xx:2379']
  metric_relabel_configs:
  - action: drop
    regex: (etcd_debugging|etcd_disk|etcd_request|etcd_server|grpc_server).*
    source_labels:
      - __name__
```

> 然后重新加载configmap
```
kubectl apply -f prometheus-configmap.yml

# 该配置不用重启prometheus即可重新加载配置
curl -XPOST prometheus-dev.k1s.club/-/reload
```



### 监控 apiserver

apiserver 的监控方式更简单，因为它的 service 已经自动创建了。但你需要注意的是，它的 service 创建在 default 名称空间，名为 kubernetes。


```
- job_name: kube-apiserver
  honor_labels: false
  kubernetes_sd_configs:
    - role: endpoints
      namespaces:
        names:
          - default
  scrape_interval: 30s
  scheme: https
  tls_config:
    insecure_skip_verify: false
    ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
  bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  relabel_configs:
    - action: keep
      source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
      separator: ;
      regex: default;kubernetes;https
  metric_relabel_configs:
    - source_labels:
        - __name__
      action: drop
      regex: (apiserver_storage_data_key_generation_latencies_microseconds_bucket|apiserver_admission_controller_admission_latencies_milliseconds_bucket|apiserver_admission_step_admission_latencies_milliseconds_bucket|apiserver_admission_step_admission_latencies_milliseconds_summary|apiserver_request_latencies_bucket|apiserver_request_latencies_summary|apiserver_storage_data_key_generation_latencies_microseconds_bucket|rest_client_request_latency_seconds_bucket)
```






### 监控 pod
pod 的监控指标是 kubelet 提供的，前面也已经使用 curl 命令看到了，因此这里也是直接干。
prometheus-operator 使用的同样是 endpoints 发现的方式，但是 kubelet 是操作系统的进程，并不是 pod，因此通过创建 service 的方式是不可能创建对应的 endpoint 的，也不知道它为啥可以做到。
为了更通用，我们这里是通过 node 发现的方式进行的。使用 node 发现，你无法指定端口，prometheus 会自动访问发现 node 的 10250 端口。


```
- job_name: pods
  honor_labels: true
  kubernetes_sd_configs:
  - role: node
  scrape_interval: 30s
  metrics_path: /metrics/cadvisor
  scheme: https
  tls_config:
    insecure_skip_verify: true
  bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token


```

> k8s 的其他组件我就不继续监控了，包括 kubelet、controller manager、coredns 等，它们监控的手段和之前的几个组件都差不多


### 安装 kube-state-metrics

> 常见应用
使用kube-state-metrics后的常用场景有：

存在执行失败的Job:
- kube_job_status_failed{job="kubernetes-service-endpoints",k8s_app="kube-state-metrics"}==1
- 集群节点状态错误: kube_node_status_condition{condition="Ready",status!="true"}==1
- 集群中存在启动失败的Pod：kube_pod_status_phase{phase=~"Failed|Unknown"}==1
- 最近30分钟内有Pod容器重启: changes(kube_pod_container_status_restarts[30m])>0
配合报警可以更好地监控集群的运行


#### RBAC 权限
> 因为它要访问集群内的所有资源，才能将它们的信息提供出去，因此部署它之前，先为它创建一些权限。这些权限都会绑定到一个 serviceAccount 上，然后我们用这个 sa 运行 kube-state-metrics 就行

#### kube-state-metrics-clusterRole.yml
```
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: kube-state-metrics
rules:
  - apiGroups:
      - ""
    resources:
      - configmaps
      - secrets
      - nodes
      - pods
      - services
      - resourcequotas
      - replicationcontrollers
      - limitranges
      - persistentvolumeclaims
      - persistentvolumes
      - namespaces
      - endpoints
    verbs:
      - list
      - watch
  - apiGroups:
      - extensions
    resources:
      - daemonsets
      - deployments
      - replicasets
      - ingresses
    verbs:
      - list
      - watch
  - apiGroups:
      - apps
    resources:
      - statefulsets
      - daemonsets
      - deployments
      - replicasets
    verbs:
      - list
      - watch
  - apiGroups:
      - batch
    resources:
      - cronjobs
      - jobs
    verbs:
      - list
      - watch
  - apiGroups:
      - autoscaling
    resources:
      - horizontalpodautoscalers
    verbs:
      - list
      - watch
  - apiGroups:
      - authentication.k8s.io
    resources:
      - tokenreviews
    verbs:
      - create
  - apiGroups:
      - authorization.k8s.io
    resources:
      - subjectaccessreviews
    verbs:
      - create
  - apiGroups:
      - policy
    resources:
      - poddisruptionbudgets
    verbs:
      - list
      - watch
  - apiGroups:
      - certificates.k8s.io
    resources:
      - certificatesigningrequests
    verbs:
      - list
      - watch

```


#### kube-state-metrics-clusterRoleBinding.yml
```

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kube-state-metrics
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kube-state-metrics
subjects:
  - kind: ServiceAccount
    name: kube-state-metrics
    namespace: monitoring

```

#### kube-state-metrics-role.yml
```
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: kube-state-metrics
  namespace: monitoring
rules:
  - apiGroups:
      - ""
    resources:
      - pods
    verbs:
      - get
  - apiGroups:
      - extensions
    resourceNames:
      - kube-state-metrics
    resources:
      - deployments
    verbs:
      - get
      - update
  - apiGroups:
      - apps
    resourceNames:
      - kube-state-metrics
    resources:
      - deployments
    verbs:
      - get
      - update

```

#### kube-state-metrics-roleBinding.yml
```

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: kube-state-metrics
  namespace: monitoring
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kube-state-metrics
subjects:
  - kind: ServiceAccount
    name: kube-state-metrics

```

#### kube-state-metrics-serviceAccount.yml
```

apiVersion: v1
kind: ServiceAccount
metadata:
  name: kube-state-metrics
  namespace: monitoring

```

```
kubectl apply -f kube-state-metrics-clusterRole.yml
kubectl apply -f kube-state-metrics-clusterRoleBinding.yml
kubectl apply -f kube-state-metrics-role.yml
kubectl apply -f kube-state-metrics-roleBinding.yml
kubectl apply -f kube-state-metrics-serviceAccount.yml
```

### deployment 和 service

> kube-state-metrics 会提供两个指标页面，一个是暴露集群内资源的，另一个是它自身的，它自身的可以选择性的关注


#### kube-state-metrics-deployment.yml
```
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: kube-state-metrics
  name: kube-state-metrics
  namespace: monitoring
spec:
  replicas: 1
  selector:
    matchLabels:
      app: kube-state-metrics
  template:
    metadata:
      labels:
        app: kube-state-metrics
    spec:
      containers:
        - args:
            - --port=10000
            - --telemetry-port=10001
          image: quay.io/coreos/kube-state-metrics:v1.6.0
          name: kube-state-metrics
          resources:
            limits:
              cpu: 100m
              memory: 150Mi
            requests:
              cpu: 100m
              memory: 150Mi
        - command:
            - /pod_nanny
            - --container=kube-state-metrics
            - --cpu=100m
            - --extra-cpu=2m
            - --memory=150Mi
            - --extra-memory=30Mi
            - --threshold=5
            - --deployment=kube-state-metrics
          env:
            - name: MY_POD_NAME
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.name
            - name: MY_POD_NAMESPACE
              valueFrom:
                fieldRef:
                  apiVersion: v1
                  fieldPath: metadata.namespace
          image: k8s.gcr.io/addon-resizer:1.8.4
          name: addon-resizer
          resources:
            limits:
              cpu: 50m
              memory: 30Mi
            requests:
              cpu: 10m
              memory: 30Mi
      nodeSelector:
        kubernetes.io/os: linux
      securityContext:
        runAsNonRoot: true
        runAsUser: 65534
      serviceAccountName: kube-state-metrics
```

指定了两个启动参数，也就是两个端口，其中 10000 是暴露集群资源指标的端口，10001 就是它自身了。除了 kube-state-metrics 之外，还启动了 addon-resizer 这个容器


#### 最后是 service 文件 kube-state-metrics-service.yml
```
apiVersion: v1
kind: Service
metadata:
  labels:
    k8s-app: kube-state-metrics
  name: kube-state-metrics
  namespace: monitoring
spec:
  clusterIP: None
  ports:
    - name: http-main
      port: 10000
      targetPort: 10000
    - name: http-self
      port: 10001
      targetPort: 10001
  selector:
    app: kube-state-metrics

```

```
docker pull registry.cn-beijing.aliyuncs.com/minminmsn/addon-resizer:1.8.4
docker tag registry.cn-beijing.aliyuncs.com/minminmsn/addon-resizer:1.8.4 k8s.gcr.io/addon-resizer:1.8.4
```

```
kubectl apply -f kube-state-metrics-deployment.yml
kubectl apply -f kube-state-metrics-service.yml
```

两个端口都暴露出来，你可以都收集或者只收集 10000 端口。如果只收集 10000，你可以只暴露一个端口，也可以两个都暴露，然后在 Prometheus 配置中过滤掉一个端口即可。

#### 收集监控数据
将上面所有的文件都 apply 之后，就可以直接配置 Prometheus 进行收集了。在此之前，你可以使用 curl 命令访问它的指标页面，看看里面都有啥：
```
kubectl run -it --rm --restart=Never --image=infoblox/dnstools:latest dnstools -n monitoring

# 首先看一下健康情况
curl kube-state-metrics:10000/healthz
# 在看看指标 (这里有非常多指标)
curl kube-state-metrics:10000/metrics
```



#### 修改下prometheus-configmap.yml 文件
```
- job_name: kube-state-metrics
  honor_labels: true
  kubernetes_sd_configs:
    - role: endpoints
      namespaces:
        names:
          - monitoring
  scrape_interval: 30s
  scrape_timeout: 30s
  tls_config:
    insecure_skip_verify: true
  bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  relabel_configs:
    - action: keep
      source_labels:
        - __meta_kubernetes_service_label_k8s_app
      regex: kube-state-metrics
    - action: keep
      source_labels:
        - __meta_kubernetes_endpoint_port_name
      regex: http-main
  metric_relabel_configs:
    - source_labels:
        - __name__
      regex: (kube_daemonset_status_number_ready|kube_daemonset_status_number_unavailable|kube_deployment_status_replicas_unavailable|kube_deployment_spec_paused|kube_deployment_spec_strategy_rollingupdate_max_surge|kube_deployment_spec_strategy_rollingupdate_max_unavailable|kube_endpoint_address_available|kube_endpoint_address_not_ready|kube_node_info|kube_node_spec_unschedulable|kube_node_status_condition|kube_node_status_capacity|kube_node_status_capacity|kube_node_status_allocatable|kube_persistentvolumeclaim_info|kube_persistentvolumeclaim_status_phase|kube_persistentvolumeclaim_resource_requests_storage_bytes|kube_persistentvolume_status_phase|kube_persistentvolume_info|kube_persistentvolume_capacity_bytes|kube_pod_info|kube_pod_status_phase|kube_pod_status_ready|kube_pod_container_info|kube_pod_container_status_waiting|kube_pod_container_status_waiting_reason|kube_pod_container_status_running|kube_pod_container_status_terminated_reason|kube_pod_container_status_last_terminated_reason|kube_pod_container_status_restarts_total|kube_pod_container_resource_limits|kube_service_info|kube_statefulset_status_replicas_current|kube_statefulset_status_replicas_ready)
      action: keep

```

> 这里是只关注匹配到的指标, 其他指标忽略(白名单)

```
kubectl apply -f prometheus-configmap.yml
# 该配置不用重启prometheus即可重新加载配置
curl -XPOST prometheus-dev.k1s.club/-/reload
```


### 配置一个grafana

#### 首先查看一下你是否配置了storageclass

```
kubectl get storageclass
NAME            PROVISIONER       AGE
nfs (default)   nfs.com/nfs-ssd   248d
nfs-retain      nfs.com/nfs-ssd   248d
```

#### k8s-StatefulSet_grafana.yml
```
---
apiVersion: apps/v1beta1
kind: StatefulSet
metadata:
  name: grafana-dev
  namespace: monitoring
spec:
  serviceName: "grafana-dev"
  updateStrategy:
    type: RollingUpdate
  replicas: 1
  volumeClaimTemplates:
  - metadata:
      name: grafana-data
      annotations:
        volume.beta.kubernetes.io/storage-class: "nfs-retain" # 这里配置 上面创建的 storageclass 的名称
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 5Gi
  template:
    metadata:
      labels:
        app: grafana-dev
    spec:
      containers:
      - name: grafana-dev
        image: grafana/grafana
        ports:
        - containerPort: 3000
          name: grafana-port
        resources:
          requests:
            cpu: "50m"
          limits:
            cpu: "512m"
        volumeMounts:
        - mountPath: /var/lib/grafana
          name: grafana-data
---
kind: Service
apiVersion: v1
metadata:
  labels:
    app: grafana-dev
  name: grafana-dev-service
  namespace: monitoring
spec:
  clusterIP: None
  type: ClusterIP
  ports:
    - port: 3000
      name: grafana-port
      protocol: TCP
      targetPort: 3000
  selector:
    app: grafana-dev
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: grafana-dev
  namespace: monitoring
spec:
  rules:
    - host: grafana-dev.k1s.club
      http:
        paths:
          - path: /
            backend:
              serviceName: grafana-dev-service
              servicePort: 3000
```


#### 通过 [k8s grafana dashboard模板](https://grafana.com/grafana/dashboards/8588)  监控效果如下
![](assets/prometheus-02-01.png)








#### 通过以上的经验, 如果我希望通过A集群的Prometheus 来监控 B集群, 所以一些指标的可通过token访问B api
```
# 查看B集群的api
kubectl cluster-info

kubectl create serviceaccount --namespace=monitoring prometheus-dev
kubectl create clusterrolebinding prometheus-k8s --clusterrole=cluster-admin --serviceaccount=monitoring:prometheus-dev

# 创建一个叫admin的serviceaccount
kubectl -n kube-system create serviceaccount admin
# 给这个admin的serviceaccount绑上cluser-admin的clusterrole
kubectl -n kube-system create clusterrolebinding sa-cluster-admin --serviceaccount kube-system:admin --clusterrole cluser-admin
# 查询admin的secret
kubectl -n kube-system get serviceaccounts admin -o json|jq -r '.secrets[0].name'
admin-token-h4zz4

# 查看token
kubectl get secret admin-token-h4zz4 -n kube-system -o json|jq -r ".data.token"|base64 -d >>/etc/kubernetes/pki/admin-token-9dg92
```



#### 然后在A集群的prometheus配置如下
```
- job_name: k8s_B-kube-state-metrics
   honor_labels: true
   kubernetes_sd_configs:
     - role: endpoints
       api_server: https://172.16.xx.xx:6443
       tls_config:
         insecure_skip_verify: true
       bearer_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJwcm9tZXRoZXVzLWRldi10b2tlbi1zZ3pidiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJwcm9tZXRoZXVzLWRldiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjliODI5NTYwLTkzNGYtMTFlYS1hMGE3LTE4NjZkYWY0NjY3NCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpwcm9tZXRoZXVzLWRldiJ9.xa8gDA0lwEi_NDGzCL3JSsZUsUD7gKiF0sfFofykyAlEYcjnPmPaksduHWzRKaUJhkvgAJN5Jl3pt8-wplQUJggGAaPVdqJVTYISi4QkPcLkDInoYm8p3OeRgvNpQJJ0VID8zp0-RBWoYe8bAh-7qT6JInt308AA-21vzDKDHtj3aa8Re1nuBxB7f0omNKcAhW0R04p59jshg95HRSBXbVQe7gX6NBjgaOWqj5i0MkKL6k2hdFKdQYgjhQjRAZmXL6F0Qx197y3HAw4zmrUPG-13RcXk38X5F4K8CWtHdOvrqUZxolaWBWin8n73Sr87KyFcEu8YA2oJbzvCKzy9Kg'
       namespaces:
         names:
           - monitoring
   scrape_interval: 30s
   scrape_timeout: 30s
   tls_config:
     insecure_skip_verify: true
   bearer_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJwcm9tZXRoZXVzLWRldi10b2tlbi1zZ3pidiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJwcm9tZXRoZXVzLWRldiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50LnVpZCI6IjliODI5NTYwLTkzNGYtMTFlYS1hMGE3LTE4NjZkYWY0NjY3NCIsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlLXN5c3RlbTpwcm9tZXRoZXVzLWRldiJ9.xa8gDA0lwEi_NDGzCL3JSsZUsUD7gKiF0sfFofykyAlEYcjnPmPaksduHWzRKaUJhkvgAJN5Jl3pt8-wplQUJggGAaPVdqJVTYISi4QkPcLkDInoYm8p3OeRgvNpQJJ0VID8zp0-RBWoYe8bAh-7qT6JInt308AA-21vzDKDHtj3aa8Re1nuBxB7f0omNKcAhW0R04p59jshg95HRSBXbVQe7gX6NBjgaOWqj5i0MkKL6k2hdFKdQYgjhQjRAZmXL6F0Qx197y3HAw4zmrUPG-13RcXk38X5F4K8CWtHdOvrqUZxolaWBWin8n73Sr87KyFcEu8YA2oJbzvCKzy9Kg'
   relabel_configs:
     - action: keep
       source_labels:
         - __meta_kubernetes_service_label_k8s_app
       regex: kube-state-metrics
     - action: keep
       source_labels:
         - __meta_kubernetes_endpoint_port_name
       regex: http-main
   metric_relabel_configs:
     - source_labels:
         - __name__
       regex: (kube_daemonset_status_number_ready|kube_daemonset_status_number_unavailable|kube_deployment_status_replicas_unavailable|kube_deployment_spec_paused|kube_deployment_spec_strategy_rollingupdate_max_surge|kube_deployment_spec_strategy_rollingupdate_max_unavailable|kube_endpoint_address_available|kube_endpoint_address_not_ready|kube_node_info|kube_node_spec_unschedulable|kube_node_status_condition|kube_node_status_capacity|kube_node_status_capacity|kube_node_status_allocatable|kube_persistentvolumeclaim_info|kube_persistentvolumeclaim_status_phase|kube_persistentvolumeclaim_resource_requests_storage_bytes|kube_persistentvolume_status_phase|kube_persistentvolume_info|kube_persistentvolume_capacity_bytes|kube_pod_info|kube_pod_status_phase|kube_pod_status_ready|kube_pod_container_info|kube_pod_container_status_waiting|kube_pod_container_status_waiting_reason|kube_pod_container_status_running|kube_pod_container_status_terminated_reason|kube_pod_container_status_last_terminated_reason|kube_pod_container_status_restarts_total|kube_pod_container_resource_limits|kube_service_info|kube_statefulset_status_replicas_current|kube_statefulset_status_replicas_ready|kube_deployment_status_replicas_available|kube_deployment_status_replicas|kube_node_status_allocatable_memory_bytes|kube_deployment_status_replicas|kube_statefulset_replicas|kube_daemonset_status_desired_number_scheduled|kube_statefulset_status_replicas|changes|kube_job_status_failed)
       action: keep
```




<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 部署alertmanager

#### alertmanager-configmap.yml

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: alertmanager-config
  namespace: monitoring
data:
  config.yml: |-
    global:
      # 在没有报警的情况下声明为已解决的时间
      resolve_timeout: 5m
      # 配置邮件发送信息
      smtp_smarthost: 'smtp.163.com:25'
      smtp_from: 'xxx@163.com'
      smtp_auth_username: 'xxx@163.com'
      smtp_auth_password: 'xxx'
      smtp_require_tls: false
      # 所有报警信息进入后的根路由，用来设置报警的分发策略
    route:
      # 这里的标签列表是接收到报警信息后的重新分组标签，例如，接收到的报警信息里面有许多具有 cluster=A 和 alertname=LatncyHigh 这样的标签的报警信息将会批量被聚合到一个分组里面
      group_by: ['alertname', 'cluster']
      # 当一个新的报警分组被创建后，需要等待至少group_wait时间来初始化通知，这种方式可以确保您能有足够的时间为同一分组来获取多个警报，然后一起触发这个报警信息。
      group_wait: 30s
      # 当第一个报警发送后，等待'group_interval'时间来发送新的一组报警信息。
      group_interval: 1m
      # 如果一个报警信息已经发送成功了，等待'repeat_interval'时间来重新发送他们
      repeat_interval: 2h
      # 默认的receiver：如果一个报警没有被一个route匹配，则发送给默认的接收器
      receiver: default
    receivers:
    - name: 'default'
      email_configs:
      - to: 'zhangzw@xxx.com'
        send_resolved: true
```




#### alertmanager-deployment.yml
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: alertmanager
  namespace: monitoring
spec:
  replicas: 1
  selector:
    matchLabels:
      app: alertmanager
  selector:
    matchLabels:
      app: alertmanager
  template:
    metadata:
      labels:
        app: alertmanager
    spec:
      containers:
      - name: alertmanager
        image: prom/alertmanager
        args:
          - "--config.file=/etc/alertmanager/config.yml"
          - "--storage.path=/alertmanager"
        ports:
        - name: alertmanager
          containerPort: 9093
        volumeMounts:
        - name: alertmanager-cm
          mountPath: /etc/alertmanager
      volumes:
      - name: alertmanager-cm
        configMap:
          name: alertmanager-config
---
apiVersion: v1
kind: Service
metadata:
  name: alertmanager
  namespace: monitoring
spec:
  selector:
    app: alertmanager
  ports:
    - port: 80
      targetPort: 9093
```

#### 最后配置prometheus的rule文件 prometheus-config-rulefiles.yml (修改)

> 这里仅针对我这里prometheus部署的时候是通过configmap挂载的rule文件
```

kind: ConfigMap
metadata:
  name: prometheus-rulefiles
  namespace: monitoring
apiVersion: v1
data:
  k8s.yml: |
    groups:
    - name: cpu-load-rule
      rules:
      - alert: cpu-load-high
        expr: irate(container_cpu_usage_seconds_total{image!=""}[1m]) > 0.1
        for: 1m
        labels:
          serverity: warning
        annotations:
          summary: "{{ $labels.instance }} container_name: {{ $labels.container_name }}  pod_name: {{ $labels.pod_name }} , namespace: {{ $labels.namespace}}"


```




#### 也贴上prometheus的StatefulSet 配置
```
>  prometheus-statefulset.yml 配置可以看到prometheus-rulefiles 这个configmap是 挂载到 /etc/prometheus/rules/ 目录
>  prometheus-configmap.yml 配置可以看到     rule_files: - /etc/prometheus/rules/*.yml,  所以 以上prometheus-rulefiles 这个configmap 的k8s.yml就被prometheus当做rule文件了
```

- prometheus-statefulset.yml
```
apiVersion: apps/v1
kind: StatefulSet
metadata:
 labels:
   app: prometheus
   prometheus: k8s
 name: prometheus
 namespace: monitoring
spec:
 replicas: 1
 volumeClaimTemplates:
 - metadata:
     name: prometheus-data
     annotations:
       volume.beta.kubernetes.io/storage-class: "nfs-retain" # 这里配置 上面创建的 storageclass 的名称
   spec:
     accessModes: [ "ReadWriteOnce" ]
     resources:
       requests:
         storage: 20Gi
 revisionHistoryLimit: 10
 selector:
   matchLabels:
     app: prometheus
     prometheus: k8s
 serviceName: prometheus
 updateStrategy:
   type: RollingUpdate
 template:
   metadata:
     creationTimestamp: null
     labels:
       app: prometheus
       prometheus: k8s
   spec:
     serviceAccount: prometheus-k8s
     containers:
       - args:
           - --web.console.templates=/etc/prometheus/consoles
           - --web.console.libraries=/etc/prometheus/console_libraries
           - --config.file=/etc/prometheus/config/prometheus.yml
           - --storage.tsdb.path=/prometheus
           - --web.enable-admin-api
           - --storage.tsdb.retention.time=20d
           - --web.enable-lifecycle
           - --storage.tsdb.no-lockfile
           - --web.external-url=http://prometheus1-dev.xxx.com/
           - --web.route-prefix=/
         image: prom/prometheus:v2.11.1
         imagePullPolicy: IfNotPresent
         livenessProbe:
           failureThreshold: 6
           httpGet:
             path: /-/healthy
             port: web
             scheme: HTTP
           periodSeconds: 5
           successThreshold: 1
           timeoutSeconds: 3
         name: prometheus
         ports:
           - containerPort: 9090
             name: web
             protocol: TCP
         readinessProbe:
           failureThreshold: 120
           httpGet:
             path: /-/ready
             port: web
             scheme: HTTP
           periodSeconds: 5
           successThreshold: 1
           timeoutSeconds: 3
         resources:
           requests:
             memory: 400Mi
         terminationMessagePath: /dev/termination-log
         terminationMessagePolicy: File
         volumeMounts:
           - mountPath: /etc/prometheus/config
             name: config
             readOnly: true
           - mountPath: /prometheus
             name: prometheus-data
             #subPath: prometheus-db
           - mountPath: /etc/prometheus/rules/
             name: prometheus-rulefiles
     volumes:
       - name: config
         configMap:
           defaultMode: 420
           name: prometheus
       - name: prometheus-rulefiles
         configMap:
           defaultMode: 420
           name: prometheus-rulefiles
```



- prometheus-configmap.yml
```
kind: ConfigMap
metadata:
  name: prometheus
  namespace: monitoring
apiVersion: v1
data:
  prometheus.yml: |
    global:
      evaluation_interval: 30s
      scrape_interval: 30s
      external_labels:
        prometheus: monitoring/k8s
    alerting:
      alertmanagers:
      - static_configs:
        - targets: ['alertmanager:80']
    rule_files:
    - /etc/prometheus/rules/*.yml
    scrape_configs:
    - job_name: prometheus
      honor_labels: false
      kubernetes_sd_configs:
      - role: endpoints
        namespaces:
          names:
          - monitoring
      scrape_interval: 30s
      relabel_configs:
      - action: keep
        source_labels:
        - __meta_kubernetes_service_label_prometheus
        regex: k8s
      - source_labels:
        - __meta_kubernetes_namespace
        target_label: namespace
      - source_labels:
        - __meta_kubernetes_service_name
        target_label: service
      - source_labels:
        - __meta_kubernetes_pod_name
        target_label: pod
      - source_labels:
        - __meta_kubernetes_service_name
        target_label: job
        replacement:
      - target_label: endpoint
        replacement: web

    - job_name: k8s-db-t-kube-apiserver
      honor_labels: false
      kubernetes_sd_configs:
        - role: endpoints
          namespaces:
            names:
              - default
      scrape_interval: 30s
      scheme: https
      tls_config:
        insecure_skip_verify: false
        ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
        - action: keep
          source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
          separator: ;
          regex: default;kubernetes;https
      metric_relabel_configs:
        - source_labels:
            - __name__
          action: drop
          regex: (apiserver_storage_data_key_generation_latencies_microseconds_bucket|apiserver_admission_controller_admission_latencies_milliseconds_bucket|apiserver_admission_step_admission_latencies_milliseconds_bucket|apiserver_admission_step_admission_latencies_milliseconds_summary|apiserver_request_latencies_bucket|apiserver_request_latencies_summary|apiserver_storage_data_key_generation_latencies_microseconds_bucket|rest_client_request_latency_seconds_bucket)

    - job_name: k8s-db-t-pods
      honor_labels: true
      kubernetes_sd_configs:
      - role: node
      scrape_interval: 30s
      metrics_path: /metrics/cadvisor
      scheme: https
      tls_config:
        insecure_skip_verify: true
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token


    - job_name: k8s-db-t-kube-state-metrics
      honor_labels: true
      kubernetes_sd_configs:
        - role: endpoints
          namespaces:
            names:
              - monitoring
      scrape_interval: 30s
      scrape_timeout: 30s
      tls_config:
        insecure_skip_verify: true
      bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
      relabel_configs:
        - action: keep
          source_labels:
            - __meta_kubernetes_service_label_k8s_app
          regex: kube-state-metrics
        - action: keep
          source_labels:
            - __meta_kubernetes_endpoint_port_name
          regex: http-main
      metric_relabel_configs:
        - source_labels:
            - __name__
          regex: (kube_daemonset_status_number_ready|kube_daemonset_status_number_unavailable|kube_deployment_status_replicas_unavailable|kube_deployment_spec_paused|kube_deployment_spec_strategy_rollingupdate_max_surge|kube_deployment_spec_strategy_rollingupdate_max_unavailable|kube_endpoint_address_available|kube_endpoint_address_not_ready|kube_node_info|kube_node_spec_unschedulable|kube_node_status_condition|kube_node_status_capacity|kube_node_status_capacity|kube_node_status_allocatable|kube_persistentvolumeclaim_info|kube_persistentvolumeclaim_status_phase|kube_persistentvolumeclaim_resource_requests_storage_bytes|kube_persistentvolume_status_phase|kube_persistentvolume_info|kube_persistentvolume_capacity_bytes|kube_pod_info|kube_pod_status_phase|kube_pod_status_ready|kube_pod_container_info|kube_pod_container_status_waiting|kube_pod_container_status_waiting_reason|kube_pod_container_status_running|kube_pod_container_status_terminated_reason|kube_pod_container_status_last_terminated_reason|kube_pod_container_status_restarts_total|kube_pod_container_resource_limits|kube_service_info|kube_statefulset_status_replicas_current|kube_statefulset_status_replicas_ready|kube_deployment_status_replicas_available|kube_deployment_status_replicas|kube_node_status_allocatable_memory_bytes|kube_deployment_status_replicas|kube_statefulset_replicas|kube_daemonset_status_desired_number_scheduled|kube_statefulset_status_replicas|changes|kube_job_status_failed)
          action: keep


```


