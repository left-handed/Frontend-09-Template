#### 测试工具 mocha 安装
  1. 下载 mocha
  ```
    $ npm install --global mocha // 全局安装mocha
    $ npm install mocha // 项目中下载mocha
  ```
#### babel 配置
  1. 下载 babel
  ```
    $ npm install @babel/core @babel/register
  ```
  2. 执行mocha 命令报错,解决方式: 引入 @bacel/register
  ```
    $ ./node_modules/mocha/.bin/mocha --require @bacel/register
  ```
  3. 新建 .babelrc 文件
  ```JSON
    {
      "presets": ["@babel/preset-env"]
    }
  ```
#### code coverage
  1. nyc