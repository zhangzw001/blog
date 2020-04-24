---
title: k8s部署storageclass动态创建pv(nfs&rbd)
copyright: true
date: 2019-09-26 14:12:49
tags:
  - ceph
  - nfs
  - k8s
  - k8s存储
  - storageclass
categories:
  - [k8s,storageclass]
  - [存储,nfs]
  - [存储,ceph]
  - [技术文档]
---

考虑到k8s存储的问题, 本机目录挂载存在太大局限性, 多node多pod的服务存储急迫需要共享存储, 这里简单应用k8s storageclass nfs和rbd存储
<!-- more -->

# 第一部分 nfs

### 这里单节点简单配置nfs(高并发可采用nfs+rsync+inotify或Sersync)

> 高并发参考

[NFS高可用(NFS+keepalive+Sersync)](https://cloud.tencent.com/developer/article/1445884)
[inotify+rsync实时备份总结](https://blog.51cto.com/lzhnb/2088224)


```
#安装nfs
yum install -y nfs-utils rpcbind

# 创建目录
mkdir /data/nfs
echo "/data/nfs 192.168.0.0/24(rw,sync,no_root_squash) " >>/etc/exports

# 启动服务
systemctl start rpcbind
systemctl start nfs
```

### k8s部署storageclass环境-nfs
#### 导入外部配置
```
git clone https://github.com/kubernetes-incubator/external-storage.git
cd external-storage/nfs-client/deploy

#注意
1  node节点需要安装nfs-utils(centos7),nfs-common(ubuntu)
```


#### 修改deployment.yaml
```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nfs-client-provisioner
---
kind: Deployment
apiVersion: extensions/v1beta1
metadata:
  name: nfs-client-provisioner
spec:
  replicas: 1
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: nfs-client-provisioner
    spec:
      serviceAccountName: nfs-client-provisioner
      containers:
        - name: nfs-client-provisioner
          image: quay.io/external_storage/nfs-client-provisioner:latest
          volumeMounts:
            - name: nfs-client-root
              mountPath: /persistentvolumes
          env:
            - name: PROVISIONER_NAME
              value: nfs.com/nfs
            - name: NFS_SERVER
              value: 192.168.0.134
            - name: NFS_PATH
              value: /data/nfs
      volumes:
        - name: nfs-client-root
          nfs:
            server: 192.168.0.134
            path: /data/nfs
```

#### 修改class.yaml
```
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: nfs
provisioner: nfs.com/nfs
parameters:
  archiveOnDelete: "false"
```

#### rbac.yaml不用修改
```
rbac.yaml
kind: ServiceAccount
apiVersion: v1
metadata:
  name: nfs-client-provisioner
---
kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: nfs-client-provisioner-runner
rules:
  - apiGroups: [""]
    resources: ["persistentvolumes"]
    verbs: ["get", "list", "watch", "create", "delete"]
  - apiGroups: [""]
    resources: ["persistentvolumeclaims"]
    verbs: ["get", "list", "watch", "update"]
  - apiGroups: ["storage.k8s.io"]
    resources: ["storageclasses"]
    verbs: ["get", "list", "watch"]
  - apiGroups: [""]
    resources: ["events"]
    verbs: ["create", "update", "patch"]
---
kind: ClusterRoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: run-nfs-client-provisioner
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    namespace: default
roleRef:
  kind: ClusterRole
  name: nfs-client-provisioner-runner
  apiGroup: rbac.authorization.k8s.io
---
kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: leader-locking-nfs-client-provisioner
rules:
  - apiGroups: [""]
    resources: ["endpoints"]
    verbs: ["get", "list", "watch", "create", "update", "patch"]
---
kind: RoleBinding
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  name: leader-locking-nfs-client-provisioner
subjects:
  - kind: ServiceAccount
    name: nfs-client-provisioner
    # replace with namespace where provisioner is deployed
    namespace: default
roleRef:
  kind: Role
  name: leader-locking-nfs-client-provisioner
  apiGroup: rbac.authorization.k8s.io
```

#### 部署nfs环境(创建nfs存储类)
```
kubectl apply -f rbac.yaml -f class.yaml -f deployment.yaml
```


---

### k8s中部署nginx项目采用nfs存储
#### 部署nginx-deployment-nfs.yaml(测试nfs)
> 这种方式会创建一个pvc 挂载到多个pod中,这种方式适合nginx-html挂载

```
---
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: html0-deploy-nfs
  annotations:
    volume.beta.kubernetes.io/storage-class: 'nfs'
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Gi
---
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: nginx0-deploy
spec:
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx0-deploy
    spec:
      containers:
      - name: nginx0-deploy
        image: hub.zhangzw.com/bq/nginx:1.15.12
        ports:
        - containerPort: 80
        volumeMounts:
        - name: html0-deploy-nfs
          mountPath: /usr/share/nginx/html
        - name: nginx-config
          mountPath: "/etc/nginx/conf.d"
      volumes:
      - name: nginx-config
        configMap:
            name: nginx-config
      - name: html0-deploy-nfs
        persistentVolumeClaim:
          claimName: html0-deploy-nfs
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  default.conf: |
            server {
              listen       80;
              server_name  localhost;
              root   /usr/share/nginx/html/;
              access_log  /var/log/nginx/host_access.log;
              error_log  /var/log/nginx/host_error.log debug;
              location / {
                  root   /usr/share/nginx/html/;
                  index  index.html index.htm index.php;
              }
              error_page   500 502 503 504  /50x.html;

              location = /50x.html {
                  root   /usr/share/nginx/html;
              }
              }
```


#### 部署nginx-statefulset-nfs.yaml(测试nfs)
> 这里statefulset 方式会创建多个pvc, 每个pod的html就可以都不一样!

```
---
apiVersion: apps/v1beta1
kind: StatefulSet
metadata:
  name: nginx3
spec:
  serviceName: "nginx"
  replicas: 2
  volumeClaimTemplates:
  - metadata:
      name: html
      annotations:
        volume.beta.kubernetes.io/storage-class: "nfs" # 这里配置 上面创建的 storageclass 的名称
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 2Gi
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: hub.zhangzw.com/bq/nginx:1.15.12
        volumeMounts:
        - mountPath: "/usr/share/nginx/html/"
          name: html
        - mountPath: "/etc/nginx/conf.d"
          name: nginx-config
      volumes:
      - name: nginx-config
        configMap:
            name: nginx-config
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  default.conf: |
            server {
              listen       80;
              server_name  localhost;
              root   /usr/share/nginx/html/;
              access_log  /var/log/nginx/host_access.log;
              error_log  /var/log/nginx/host_error.log debug;
              location / {
                  root   /usr/share/nginx/html/;
                  index  index.html index.htm index.php;
              }
              error_page   500 502 503 504  /50x.html;

              location = /50x.html {
                  root   /usr/share/nginx/html;
              }
              }
```

---
### 另外说明一下将nfs作为文件存储类似mount方式,这种方式不适用于多容器自动化部署 ,显然这种并不适合ceph rbd存储, cephfs是可以的

#### 首先需要在nfs目录创建需要挂载的目录
```
#例如
mkdir -p /data/nfs/k8s-db-t/mysql-data-dev
```

#### 在部署的yml中直接mount nfs的目录
```
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: mysql-server
  namespace: devops
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: mysql-server
    spec:
      containers:
      - image: mysql:5.7.16
        imagePullPolicy: Always
        name: mysql-server
        ports:
        - containerPort: 3306
          protocol: TCP
        volumeMounts:
          - name: mysql-data
            mountPath: /var/lib/mysql
        resources:
          requests:
            cpu: 40m
            memory: 32Mi
          limits:
            cpu: "300m"
            memory: 256Mi
        env:
        - name: MYSQL_ROOT_PASSWORD
          value: "admin"
        - name: MYSQL_DATABASE
          value: "gogs"
        - name: MYSQL_USER
          value: "gogs"
        - name: MYSQL_PASSWORD
          value: "gogspass"
        - name: TZ
          value: "Asia/Shanghai"
      volumes:
        - name: mysql-data
          nfs:
            server: 192.168.0.134
            path: /data/nfs/k8s-db-t/mysql-data-dev

---
apiVersion: v1
kind: Service
metadata:
  name: mysql-service
  namespace: devops
spec:
  clusterIP: None
  selector:
    app: mysql-server
  ports:
  - name: http
    port: 3306
```

---
# 第二部分 ceph
### k8s部署storageclass环境-ceph

#### 如果集群是用kubeadm部署的，由于controller-manager官方镜像中没有rbd命令，所以我们要导入外部配置
```
git clone https://github.com/kubernetes-incubator/external-storage.git
cd external-storage/ceph/rbd/deploy
```

> 以下整合在一个文件, 两个版本,默认 和retain
 
#### storageclass-cepm.com-rbd.yaml
```
---
apiVersion: v1
data:
  key: QVFEYzJRbGQ1VjI5THhBQU00WUtPUU5sUVJqdWtLSWJ2VDZ0a3c9PQ==
kind: Secret
metadata:
  name: ceph-secret-admin
type: kubernetes.io/rbd
---
apiVersion: v1
data:
  key: QVFEYzJRbGQ1VjI5THhBQU00WUtPUU5sUVJqdWtLSWJ2VDZ0a3c9PQ==
kind: Secret
metadata:
  name: ceph-secret-admin
  namespace: ns-elastic
type: kubernetes.io/rbd
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: rbd
  annotations:
    storageclass.kubernetes.io/is-default-class: "true"
provisioner: ceph.com/rbd
parameters:
  monitors: 192.168.0.134:6789
  adminId: admin
  adminSecretName: ceph-secret-admin
  adminSecretNamespace: default
  pool: storageclass-rbd
  userId: admin
  userSecretName: ceph-secret-admin
  fsType: ext4
  imageFormat: "2"
  imageFeatures: "layering"
```

#### storageclass-cepm.com-rbd-retain.yaml
```
---
apiVersion: v1
data:
  key: QVFEYzJRbGQ1VjI5THhBQU00WUtPUU5sUVJqdWtLSWJ2VDZ0a3c9PQ==
kind: Secret
metadata:
  name: ceph-secret-admin
type: kubernetes.io/rbd
---
apiVersion: v1
data:
  key: QVFEYzJRbGQ1VjI5THhBQU00WUtPUU5sUVJqdWtLSWJ2VDZ0a3c9PQ==
kind: Secret
metadata:
  name: ceph-secret-admin
  namespace: ns-elastic
type: kubernetes.io/rbd
---
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: rbd-retain
  annotations:
    storageclass.kubernetes.io/is-default-class: "false"
provisioner: ceph.com/rbd
reclaimPolicy: Retain
parameters:
  monitors: 192.168.0.134:6789
  adminId: admin
  adminSecretName: ceph-secret-admin
  adminSecretNamespace: default
  pool: storageclass-rbd-retain
  userId: admin
  userSecretName: ceph-secret-admin
  fsType: ext4
  imageFormat: "2"
  imageFeatures: "layering"
```

#### k8s中部署nginx项目采用 ceph.com/rbd 和nfs类似, 这里省略 

> 以上采用的是persistentVolumeClaim 方式动态分配全部内容
