#### 测试工具mocha 安装

  1. 下载 mocha
  ```
  $ npm install --global mocha // 全局安装mocha
  $ npm install mocha // 项目中下载mocha
  ```

#### babel 配置

  1. 下载 babel
  ```
    $ npm install --save-dev @babel/core @babel/register
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

  1. 下载 nyc
  ```
    $ npm install --save-dev nyc
  ``` 
  2.  下载 nyc 与 babel 关联的插件
  ```
    $ npm install --save-dev babel-plugin-istanbul
  ```
  3. 向.babel文件件中添加
  ```
    "plugins": ["istanbul"]
  ```
  4. 新建 .nycrc 文件，下载依赖包
  ```
    $ npm install --save-dev @istanbuljs/nyc-config-babel
  ```

  ```
    {
      "extends": "@istanbuljs/nyc-config-babel"
    }
  ```

#### 单元测试


