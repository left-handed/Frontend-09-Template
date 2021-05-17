学习笔记
#### CSS总体结构
  1. @charset
  2. @import
  3. rules
     - @media
     - @page
     - rule
#### CSS 规则
  1. 选择器
  2. 声明
     - key
     - value
#### 思考题
  1. 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
    这个问题我觉得是 first-letter 回选择第一行第一个文字，文字排版不会频繁变，而first-line选中一行文字，如果在浏览器中展示，浏览器的宽度不定，first-line会频繁设置第一行的float，从而会影响性能。
