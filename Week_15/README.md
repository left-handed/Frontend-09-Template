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
  