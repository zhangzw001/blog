---
title: 记一次windows安装OpenSSH问题
copyright: true
date: 2020-06-12 18:06:26
tags:
  - windows
  - ssh
categories:
  - [windows]

---

windows一次安装openssh server问题

<!--more-->


### 首先是安装
[官方教程](https://github.com/PowerShell/Win32-OpenSSH/wiki/Install-Win32-OpenSSH)
[官方releases版本](https://github.com/PowerShell/Win32-OpenSSH/releases)

> 这里直接下载最新 : OpenSSH-Win64.zip, Symbols应该是ddl


SSH-2.0-OpenSSH_for_Windows_8.1

#### 解压包放在目录: C:\Program Files\OpenSSH
```
# 进入到解压目录
cd C:\Program Files\OpenSSH

# 执行安装命令
powershell.exe -ExecutionPolicy Bypass -File install-sshd.ps1

```

#### 配置sshd_config
```
# 首先创建authorized_keys文件
cd C:\ProgramData\ssh
echo "<you ssh public key>" > authorized_keys

# 使用icacls命令修改权限(仅允许SYSTEM和Administrators组有权限写,其他用户只读)
icacls authorized_keys /inheritance:r
icacls authorized_keys /grant SYSTEM:(F)
icacls authorized_keys /grant BUILTIN\Administrators:(F)

# sshd_config修改
开启密钥访问：PubkeyAuthentication yes
禁用密码访问：PasswordAuthentication no
禁用空密码：PermitEmptyPasswords no
关闭DNS查找: UseDNS no
设置authorized_keys路径: AuthorizedKeysFile C:/ProgramData/ssh/authorized_keys  
```

> 这里配置AuthorizedKeysFile 为全路径, 之前配置变量导致报错

#### 启动
```
net start sshd
net stop sshd

```

####  卸载
```
powershell.exe -ExecutionPolicy Bypass -File uninstall-sshd.ps1

```


### 错误1 Read from socket failed: Connection reset by peer
```
AuthorizedKeysFile 的路径配置的变量, 之后改成绝对路径缺成功了
```
