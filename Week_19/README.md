#### 发布系统

#### 搭建虚拟机
1. 下载Oracle VM VirtualBox 下载地址： https://www.virtualbox.org/
2. 下载 https://releases.ubuntu.com/20.04/

#### 
1. 设置下载地址 http：//mirrors.aliyun.com/ubantu
2. 下载 node 管理员权限 apt ...
```
  $ apt install nodejs

  // 下载新的 node 版本
  $ n latest
```
3. 下载 npm
```
$ apt install npm
```

#### Express 
1. 安装Express (https://expressjs.com/zh-cn/starter/generator.html)
```
$ npx express-generator
```
2. 部署到虚拟机服务器
  1. 虚拟机启动ssh
  ```
  $ service ssh start
  ```
  2. 更改虚拟机端口，设置 -> 端口转发
  
  3. 把本地server文件夹拷贝到虚拟机服务器上
  ```
  $ mkdir server
  $ scp -P 8022 -r ./* jz-server@127.0.0.1:/home/jz-server/server
  $ npm start
  ```