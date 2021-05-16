学习笔记
#### 盒
  ---
  HTML代码中可以书写开始_标签_，结束_标签_ ，和自封闭_标签_ 。

  一对起止_标签_ ，表示一个_元素_ 。

  DOM树中存储的是_元素_和其它类型的节点（Node）。

  CSS选择器选中的是_元素_ 。

  CSS选择器选中的_元素_ ，在排版时可能产生多个_盒_ 。

  排版和渲染的基本单位是_盒_ 。

  ---
  1. 盒模型
      - 多层结构
         - margin 外边距
         - padding 内边距
         - content-box = content
         - border-box = content + padding
#### 正常流
  1. 排版
      - 盒
      - 文字
      - 行内 IFC 行内级格式化上下文
        - 基线
        - 文字
        - 行模型
          - line-top
          - text-top
          - base-line
          - text-bottom
          - line-bottom 
        - vertical-align
      - 块级 BFC 块级格式化上下文
         - float (会引起重排么)
           - 同一页面不同float会相互影响
           - clear 找一块干净的地方进行浮动
         - Margin Collapse （margin 重叠，只会发生在同一个BFC中）
         - BFC 合并
           - Block 
             - Block Container: 里面有BFC (块里面没有特殊的display模式)
               - block
               - inline-block
               - table-call
               - flex item
               - grid cell
               - table-caption
             - Block-leve box：外面有BFC的
             - Block Box = Block Container + Block-leve box 里外都有BFC的
           - block box && overflow:visible
             - BFC合并与flat
             - BFC合并与边界重叠
             - 
  2. 过程
     - 收集盒进行
     - 计算盒在行中的排布
     - 计算行排布
#### Flex 排版
  1. 收集盒进行
  2. 计算盒在主轴方向的排布
  3. 计算盒在交叉轴上的排布
#### CSS动画与绘制
  1. Animation
     - @keyframes 定义
     - animation 使用
        ``` css
        @keyframes mykf
          {
            from {background: red;}
            to {background: yellow;}
          }
        div {
          animation: mykf 5s infinite;
        }
        ```
        - animation-name 时间曲线
        - animation-duration 动画时长
        - animation-timing-function 动画时间曲线
        - animation-delay 动画时间延迟
        - animation-iteration-count 动画的播放次数
        - animation-direction 动画方向
  2. transition
     - transition-property 要变换的属性
     - transition-duration 要变换的时长
     - transition-timing-funtion 时间曲线
     - transition-delay 时间延迟
#### 绘制
  1. 几何图形
     - border
     - box-shadow
     - border-radius
  2. 文字
     - font
     - text-decoration
  3. 位图
     - background-image
  4. data + uri + svg
