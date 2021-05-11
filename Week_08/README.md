#### HTTP的协议解析
  1. ISO-OSI七层网络模型
     - HTTP
       - 应用层
       - 表示
       - 回话
     - TCP
       - 传输
     - Internet
       - 网络
     - 4G\5G\WI-FI
       - 数据链路
       - 物理层
  2. TCP、IP
     - 流
     - 端口
     - require('net')
     - 包
     - IP地址
     - libnet（构建IP包）/libpcap
  3. HTTP
     - Request
     - Response
     ```
      POST/HTTP/1.1 (Request line)
      (HOST:127.0.0.1
      Content-Type: text/css) (headers)

      id=11 (body)
     ```
     - 状态码
       - 响应分为五类：信息响应(100–199)，成功响应(200–299)，重定向(300–399)，客户端错误(400–499)和服务器错误 (500–599)。
#### 设计一个HTTP请求的步骤
  1. 第一步 
  - 设计一个HTTP请求类
  - content-type是请求的必要字段，为空时要设置默认值
  - body 是KV格式
  - 不同的content-type影响body的格式
  2. 第二步 发送请求参数
  - 在 Request 函数中收集必要的信息
  - 设计 send 函数，发送一个真实的请求
  - send函数应该为异步，返回一个 Promise