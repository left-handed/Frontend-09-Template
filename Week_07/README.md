#### 拆箱转换（Unboxing）
1. **ToPremitive**
2. **toString vs valueOf**
3. **Symbol.toPrimitive**
#### 运行时相关概念
1. **Completion Record**
    - type : normal、 break、 continue、return、throw
    - value : 基本类型
    - target : label  
#### 简单语句和复合语句
1. **简单语句**
    - ExpressionStatement （表达式语句）
    - EmptyStatement （空语句）
    - DebuggerStatement
    - ThorwStatement
    - ContiuneStatement （结束当前循环）
    - BreakStatement （结束整个循环）
    - ReturnStatement 
2. **复合语句 ==(多用于控制简单语句的执行顺序)==**
    - BlockStatement
      - `{代码块}`
    - ifStatement
    - SwitchStatement （if代替Switch）
    - lterationStatement
    - WithStatement
    - LabelledStatement
    - TryStatement
3. **声明**
    - FunctionDeclaration
    - GeneratorDeclaration
    - AsyncFunctionDeclaration
    - AsyncGeneratorDeclaration
    - VariableStatement
    - ClassDeclaration
    - LexicalDeclaration
    ```
        function name() {

        }

        function* name() {

        }

        async function name() {

        }

        async function* name() {

        }

        var name = "";
        
        let name = "";
        
        const name = "";

        class NAME = {};
    ```
    - 作用域
      - JavaScript 中的作用域是指变量的可访问性，也就是说，程序的哪些部分可以访问变量

#### JS结构化|宏认为和微任务
1. **宏任务**
2. **微任务**
3. **事件循环**
#### JS函数调用
1. **函数调用**