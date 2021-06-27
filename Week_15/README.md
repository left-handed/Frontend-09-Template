#### JavaScript 处理帧的方式
  ``` javascript
    1. setInterval(() => {}, 16); // 不推荐, 执行容易产生处理逻辑事件积压
    2. let tick = () => {
        setTimeout(tick, 16);
       };
    3. let tick = () => {
        let handler =  requestAnimationFrame(tick);
        cancelAnimationFrame(handler);
       };
   ```
#### 动画执行时间线
  1. start (开始)
  2. pause (暂停)
  3. resume (重新开始)
  4. reset (重启)
#### 手势
  1. mousedown事件 event.button 可以查看鼠标键值
  2. mousemove事件 event.buttons 键值是二进制表示按下的键
  3. 使用Object.create(null) 创建对象可以避免对象原生属性的干扰
  4. New event()