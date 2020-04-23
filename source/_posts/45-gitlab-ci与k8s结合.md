---
title: gitlab-ci与k8s结合
copyright: true
date: 2020-04-23 16:20:33
tags:
  - gitlab-runner
  - k8s
categories:
  - [k8s]
  - [gitlab-ci]
---
本文减少如何通过gitlab-ci整合k8s实现流水线部署

<!--more -->


> 1. https://www.cnblogs.com/Sinte-Beuve/p/11739196.html
> 2. https://www.qikqiak.com/post/gitlab-ci-k8s-cluster-feature/

### 环境版本统计
```
1 gitlab/gitlab-runner 0.15.0
2 helm 2.16
3 k8s 1.16.4
4 gitlab 11.5
5 CentOS Linux release 7.7 /kernel 5.2
```

> 小节
```
1. gitlab 通过admin管理页面的runner配置, 安装gitlab-runner, 安装方式可以是二进制, docker 或k8s (这里是k8s)
2. gitlab 项目目录的 Operations -> kubernetes -> Add Kubernetes Cluster -> Add existing cluster 是结合k8s, 每个项目都需要设置一个k8s集群,k8s集群需要配置rbac权限
3. ci 在提交到私有harbor上是需要验证账号密码, 私有仓库拉取也需要验证
```

<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>

### helm2.16安装

```
wget https://get.helm.sh/helm-v2.16.2-linux-amd64.tar.gz
tar -xvf helm-v2.16.2-linux-amd64.tar.gz
mv linux-amd64/helm /usr/local/bin/helm

kubectl create serviceaccount --namespace=kube-system tiller
kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller

helm init --upgrade -i registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.16.2 --stable-repo-url https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts --service-account tiller


```


![](http://zhangzw001.github.io/images/45/02.png)


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 从官方拉取helm2 配置文件
```
# 添加源
helm repo add gitlab https://charts.gitlab.io

# 查看
helm search runner
gitlab/gitlab-runner 0.15.0        12.9.0      GitLab Runner

# 下载charts压缩包gitlab-runner-0.15.0.tgz
helm fetch gitlab/gitlab-runner

# 创建gitlab-runner的rbac账号
kubectl create serviceaccount  gitlab-cluster-admin
kubectl create clusterrolebinding gitlab-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts --namespace=default

# 然后修改 values.yaml
gitlabUrl: http://gitlab.zhangzw.com #gitlab服务器上管理页面上的URL
runnerRegistrationToken: #gitlab服务器管理页面的token
serviceAccountName: gitlab-cluster-admin

# 修改 templates/configmap.yaml (如果后面配置dind采用tcp://0.0.0.0:2375的方式应该不用挂载sock文件)
    #
    if ! sh /scripts/register-the-runner; then
      exit 1
    fi

    # add new config start
    cat >>/home/gitlab-runner/.gitlab-runner/config.toml <<EOF
      [[runners.kubernetes.volumes.host_path]]
            name = "docker"
            mount_path = "/var/run/docker.sock"
            read_only = false
            host_path = "/var/run/docker.sock"
    EOF
    # add new config end

    # Start the runner
    exec /entrypoint run --user=gitlab-runner \
      --working-directory=/home/gitlab-runner


# helm启动,更新,删除gitlab-runner
helm install  --name gitlab-runner .
helm upgrade gitlab-runner .
helm delete --purge gitlab-runner
```


<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>



### 登录到gitlab-runner 镜像register注册
> 以下大部分都是回车, 只有token需要手动输入(输入values.yaml中的runnerRegistrationToken即可)
```
bash-5.0$ gitlab-runner register
Runtime platform                                    arch=amd64 os=linux pid=4257 revision=4c96e5ad version=12.9.0
WARNING: Running in user-mode.                     
WARNING: The user-mode requires you to manually start builds processing:
WARNING: $ gitlab-runner run                       
WARNING: Use sudo for system-mode:                 
WARNING: $ sudo gitlab-runner...                   

Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.zhangzw.com/):
[http://gitlab.zhangzw.com]:
Please enter the gitlab-ci token for this runner:
djs47LiKFy-64FxAACp5
Please enter the gitlab-ci description for this runner:
[gitlab-runner-gitlab-runner-6cf8c6bff4-rhhs5]:
Please enter the gitlab-ci tags for this runner (comma separated):

Registering runner... succeeded                     runner=djs47LiK
Please enter the executor: docker+machine, docker-ssh+machine, kubernetes, docker, docker-ssh, shell, ssh, virtualbox, custom, parallels:
[kubernetes]:
<<<<<<< HEAD
Runner registered successfully. Feel free to start it, but if its running already the config should be automatically reloaded!
=======
<<<<<<< HEAD
Runner registered successfully. Feel free to start it, but if its running already the config should be automatically reloaded!
=======
Runner registered successfully. Feel free to start it, but if it's running already the config should be automatically reloaded!
bash-5.0$
>>>>>>> a4ff283e537af20d52689341e13de3e70adfc5eb
>>>>>>> 920f2ad19066e5422707161dc8771420ed47c703
```



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### 在项目的页面点击 Add Kubernetes Cluster -> Add existing cluster
<<<<<<< HEAD

- 1. API URL 是你的集群的apiserver的地址， 一般可以通过输入kubectl cluster-info获取

=======
<<<<<<< HEAD

- 1. API URL 是你的集群的apiserver的地址， 一般可以通过输入kubectl cluster-info获取

=======
- 1. API URL 是你的集群的apiserver的地址， 一般可以通过输入kubectl cluster-info获取
>>>>>>> a4ff283e537af20d52689341e13de3e70adfc5eb
>>>>>>> 920f2ad19066e5422707161dc8771420ed47c703
```
kubectl cluster-info

Kubernetes master is running at https://master.k8s.io:16443
KubeDNS is running at https://master.k8s.io:16443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
Metrics-server is running at https://master.k8s.io:16443/api/v1/namespaces/kube-system/services/https:metrics-server:/proxy
```

- 2. CA证书

> 由于我们在部署阶段需要去创建、删除一些资源对象，所以我们也需要对象的 RBAC 权限，这里为了简单，我们直接新建一个 ServiceAccount，绑定上一个cluster-admin的权限(gitlab-serviceAccount.yaml)
```
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: gitlab
  namespace: gitlab

---
apiVersion: rbac.authorization.k8s.io/v1beta1
kind: ClusterRoleBinding
metadata:
  name: gitlab
  namespace: gitlab
subjects:
  - kind: ServiceAccount
    name: gitlab
    namespace: gitlab
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
```

```
#可以通过上面创建的 ServiceAccount 获取 CA 证书和 Token：
kubectl get serviceaccount gitlab -n gitlab -o json | jq -r '.secrets[0].name'
gitlab-token-9jlpr

# 然后根据上面的Secret找到CA证书
kubectl get secret gitlab-token-9jlpr -n gitlab -o json | jq -r '.data["ca.crt"]' | base64 -d
xxxxxCA证书内容xxxxx

# 当然要找到对应的 Token 也很简单
kubectl get secret gitlab-token-9jlpr  -n gitlab -o json | jq -r '.data.token' | base64 -d
xxxxxxtoken值xxxx
```

> 然后复制对应的值贴到项目的k8s配置中即可



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>



### 简单测试
```
#.gitlab-ci.yml
image: busybox
stages:
  - build
  - deploy
Job1:
  stage: build
  script:
    - echo "go go go !!!~"
  only:
    - master

deploy:
  stage: deploy
  script:
    - echo "部署开始"
  only:
    - master

```

![](http://zhangzw001.github.io/images/45/03.png)



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>


### .gitlab-ci.yaml配置

> 以下一些配置写到gitlab项目页面-> Settings -> CI/CD -> Variables
> 其实也可以写到.gitlab-ca.yaml中, 我在deployment.yaml也无法用如下变量

```
CI_REGISTRY_USER: admin
CI_REGISTRY_PASSWORD: xxxxx
CI_REGISTRY: hub.xxx.com
CI_REGISTRY_IMAGE: hub.xxx.com/public/nginx
```


```
variables:
  GIT_CURL_VERBOSE: 1
  GIT_TRACE: 1

stages:
  - release
  - review
  - deploy



buildPushImage:
  stage: release
  image: docker:latest
  services:
    - name: docker:dind
      command: ["--insecure-registry=hub.zhangzw.com"]
  variables:
    DOCKER_DRIVER: overlay2
    DOCKER_HOST: tcp://192.168.0.136:2375
  script:
    - docker login -u "${CI_REGISTRY_USER}" -p "${CI_REGISTRY_PASSWORD}" "${CI_REGISTRY}"
    - docker build -t "${CI_REGISTRY_IMAGE}:${CI_COMMIT_REF_NAME}" .
    - docker push "${CI_REGISTRY_IMAGE}:${CI_COMMIT_REF_NAME}"

deploy_review:
  image: bitnami/kubectl:1.16.3
  stage: review
  only:
    - branches
  except:
    - tags
  environment:
    name: dev
    url: http://dev-gitlab-k8s-demo.zhangzw.com
    on_stop: stop_review
  script:
    - kubectl version
    - cd deploy/
    - sed -i "s/__CI_ENVIRONMENT_SLUG__/${CI_ENVIRONMENT_SLUG}/" deployment.yaml ingress.yaml service.yaml
    - sed -i "s/__VERSION__/${CI_COMMIT_REF_NAME}/" deployment.yaml ingress.yaml service.yaml
    - |
      if kubectl apply -f deployment.yaml | grep -q unchanged; then
          echo "=> Patching deployment to force image update."
          kubectl patch -f deployment.yaml -p "{\"spec\":{\"template\":{\"metadata\":{\"annotations\":{\"ci-last-updated\":\"$(date +'%s')\"}}}}}"
      else
          echo "=> Deployment apply has changed the object, no need to force image update."
      fi
    - kubectl apply -f service.yaml || true
    - kubectl apply -f ingress.yaml
    - kubectl rollout status -f deployment.yaml
    - kubectl get all,ing -l ref=${CI_ENVIRONMENT_SLUG}


stop_review:
  image: bitnami/kubectl:1.16.3
  stage: review
  variables:
    GIT_STRATEGY: none
  when: manual
  only:
    - branches
  except:
    - master
    - tags
  environment:
    name: dev
    action: stop
  script:
    - kubectl version
    - kubectl delete ing -l ref=${CI_ENVIRONMENT_SLUG}
    - kubectl delete all -l ref=${CI_ENVIRONMENT_SLUG}


deploy_live:
  image: bitnami/kubectl:1.16.3
  stage: deploy
  environment:
    name: live
    url: http://live-gitlab-k8s-demo.zhangzw.com
  script:
    - echo "部署开始"
    - cd deploy
    - sed -i "s/__CI_ENVIRONMENT_SLUG__/${CI_ENVIRONMENT_SLUG}/" deployment.yaml ingress.yaml service.yaml
    - sed -i "s/__VERSION__/${CI_COMMIT_REF_NAME}/" deployment.yaml ingress.yaml service.yaml
    - kubectl apply -f deployment.yaml
    - kubectl apply -f service.yaml
    - kubectl apply -f ingress.yaml
    - kubectl rollout status -f deployment.yaml
    - kubectl get all,ing -l ref=${CI_ENVIRONMENT_SLUG}
  only:
    - tags
  when: manual

```


### deploy/deployment.yaml
```
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gitlab-k8s-demo-__CI_ENVIRONMENT_SLUG__
  labels:
    app: gitlab-k8s-demo
    ref: __CI_ENVIRONMENT_SLUG__
    track: stable
spec:
  replicas: 2
  selector:
    matchLabels:
      app: gitlab-k8s-demo
      ref: __CI_ENVIRONMENT_SLUG__
  template:
    metadata:
      labels:
        app: gitlab-k8s-demo
        ref: __CI_ENVIRONMENT_SLUG__
        track: stable
    spec:
      imagePullSecrets:
        - name: myregistry
      containers:
      - name: app
        image: hub.zhangzw.com/bq/nginx:__VERSION__
        imagePullPolicy: Always
        ports:
        - name: http-metrics
          protocol: TCP
          containerPort: 80
        livenessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 3
          timeoutSeconds: 2
        readinessProbe:
          httpGet:
            path: /
            port: 80
          initialDelaySeconds: 3
          timeoutSeconds: 2
```


### 如果我们harbor中设置的是私有镜像, 则需要设置imagePullSecret 才能拉取镜像
```
kubectl create secret docker-registry gitlab-hub-secret --docker-server=hub.zhangzw.com --docker-username=xxx --docker-password=xxx --docker-email=zhangzw@zhangzw.com
```



### deploy/service.yaml
```
---
apiVersion: v1
kind: Service
metadata:
  name: gitlab-k8s-demo-__CI_ENVIRONMENT_SLUG__
  labels:
    app: gitlab-k8s-demo
    ref: __CI_ENVIRONMENT_SLUG__
  annotations:
    prometheus.io/scrape: "true"
    prometheus.io/port: "80"
    prometheus.io/scheme: "http"
    prometheus.io/path: "/"
spec:
  type: ClusterIP
  ports:
    - name: http-metrics
      port: 80
      protocol: TCP
  selector:
    app: gitlab-k8s-demo
    ref: __CI_ENVIRONMENT_SLUG__
```

### deploy/ingress.yaml
```
---
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: gitlab-k8s-demo-__CI_ENVIRONMENT_SLUG__
  labels:
    app: gitlab-k8s-demo
    ref: __CI_ENVIRONMENT_SLUG__
  annotations:
    kubernetes.io/ingress.class: "traefik"
spec:
  rules:
  - host: __CI_ENVIRONMENT_SLUG__-gitlab-k8s-demo.zhangzw.com
    http:
      paths:
      - path: /
        backend:
          serviceName: gitlab-k8s-demo-__CI_ENVIRONMENT_SLUG__
          servicePort: 80
```



<center>
<img src="http://zhangzw001.github.io/images/dockerniu.jpeg" width = "100" height = "100" style="border: 0"/>
</center>




### 遇到的问题

#### err1.  流水线打包的时候提示没有权限

```
ERROR: Job failed (system failure): pods is forbidden: User "system:serviceaccount:default:default" cannot create resource "pods" in API group "" in the namespace "default"


kubectl create serviceaccount  gitlab-cluster-admin
kubectl create clusterrolebinding gitlab-cluster-admin --clusterrole=cluster-admin --group=system:serviceaccounts --namespace=default
```


#### err2. 流水线打包提示无法拉取项目

```
fatal: unable to access 'http://gitlab.zhangzw.com/k8s/rancher-dev-php.git/': Failed to connect to gitlab.zhangzw.com port 80: Connection refused
Uploading artifacts for failed job
ERROR: Job failed: command terminated with exit code 1
```

> 难道是因为我们的项目是私有项目?

显然我们在官网 https://docs.gitlab.zhangzw.com/runner/configuration/advanced-configuration.html 这里看到下面一句话
```
Only if the clone_url is set, the runner will construct a clone URL in the form of http://gitlab-ci-token:s3cr3tt0k3n@192.168.1.23/namespace/project.git.

# 尝试修改 values.yaml
cloneUrl: http://gitlab.zhangzw.com
```

> 之后还是出现了该问题

> 所以这应该是gitlab-runner register的问题

<<<<<<< HEAD
> 但是这里诡异的是, 我三个步骤,前两个都是正常, 第三个一直是报错connection refused, 但是我重试了三遍又正常了, 这么不稳定的吗?
=======
<<<<<<< HEAD
> 但是这里诡异的是, 我三个步骤,前两个都是正常, 第三个一直是报错connection refused, 但是我重试了三遍又正常了, 这么不稳定的吗?
=======
> 但是这里诡异的是, 我三个步骤,前两个都是正常, 第三个一直是报错connection refused, 但是我重试了三遍有正常了, 这么不稳定的吗?
>>>>>>> a4ff283e537af20d52689341e13de3e70adfc5eb
>>>>>>> 920f2ad19066e5422707161dc8771420ed47c703

![](http://zhangzw001.github.io/images/45/01.png)

> 看日志错误有点像是这么回事, 我的nginx反向代理了gitlab.zhangzw.com proxy_pass的是ip:10080, 而日志中看起来报错提示是链接到ip:80

我这里试着将helm安装gitlab-runner的配置文件values.yaml修改如下:

```
gitlabUrl: http://192.168.0.65:10080
  cloneUrl: http://192.168.0.65:10080
```

> 测试之后还是会出现无法连接, 所以也不是这个问题, 这里git clone http 方式经过nginx代理是没问题的

如果是项目权限问题, 那我新建一个public项目应该不会报错

> 测试之后还是会出现无法连接, 看起问题还是网络方面问题, 为什么会网络无法连接呢?

嗯??? 我查看了下 gitlab admin -> runners -> 点击Runner token 进入 -> Assigned projects  这里我之前是加过的, 但是helm 安装的gitlab-runner upgrade之后就好像丢失了, 可能是我这边没有mount数据存储到nfs, 不过这里可以不用按照分配的方式, 就设置为share即可,如果有多个runner,需要更细致的权限部署划分,可以设置

所以现在这个问题就变成, 有可能第一次会成功, 有可能会失败, 有可能第二个步骤失败 , 然后retry 2次?3次或6次又成功了, 蛋疼中...



#### err3. k8s1.16安装helm2.14的有报错: Error: error installing: the server could not find the requested resource, 这是由于 extensions/v1beta1 已经被 apps/v1 替代。相信在2.15 或者 3 版本发布之后, 应该就不会遇到这个问题了。还是生态比较慢的原因。

```
helm init -i registry.cn-hangzhou.aliyuncs.com/google_containers/tiller:v2.14.3 --stable-repo-url http://mirror.azure.cn/kubernetes/charts/ --service-account tiller --override spec.selector.matchLabels.'name'='tiller',spec.selector.matchLabels.'app'='helm' --output yaml | sed 's@apiVersion: extensions/v1beta1@apiVersion: apps/v1@' | kubectl apply -f -
```

#### err4. Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```
不确定为什么会报这个错误, 第二次启动又没问题了
```


#### err5. time="2020-04-22T02:39:12Z" level=error msg="failed to dial gRPC: cannot connect to the Docker daemon. Is 'docker daemon' running on this host?: dial tcp 127.0.0.1:2375: connect: connection refused"
```
这种情况需要docker或者k8s的docker启动方式添加tcp方式
vim /usr/lib/systemd/system/docker.service
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock -H fd:// --containerd=/run/containerd/containerd.sock
```

