#### 范语言分类方法
1. **非形式语言**
    - 人类语言
2. **形式语言（乔姆斯基谱系）**
    - 0型 无限制文法
    - 1型 上下文相关文法
    - 2型 上下文无关文法
    - 3型 正则文法
    > (0型 (1型 (2型 (3型文法))))；包含文法
#### 什么是产生式
1. **产生式（BNF）**
    - BNF 巴克斯-诺尔范式
        - <>  非终结符用尖括号包裹
        - ::= 定义
        - | 竖线表示或
        - "" 终结符用双引号包裹
    - 尖括号括起来的名称来表示语法结构名
    - 语法机构分为基础结构和需要用其他语法结构定义的复合结构
        - 基础结构：终结符
        - 复合结构：非终结符
    - 引号和中间的字符表示终结符
    - 可以有括号
    - ‘ * ’ 表示重复多次
    - ‘ | ’ 表示或
    - ‘ + ’ 表示至少一次
#### 深入理解产生式
#### JS类型
1. Number
2. String
    - Charanter（字符）
        - ASCll、Unicode字符集
    - Code Point（码点）
    - Encodeing（编码方式）
        - UTF编码方式
    - “\” 微语法
    - \x
    - \u
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Object 