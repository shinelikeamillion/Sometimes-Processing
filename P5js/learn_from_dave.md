####[wanna know who the dave is?](https://twitter.com/beesandbombs)
1. 使用时间函数做变化因子 
    ```
   // 取小数部分，e 为科学计数法（4e-4 = 0.0004）
   speed = (Date.now()*4e-4) % 1 
   ```
2. ease 函数
    ```
    function ease(p, g) {
        if(p < 0.5)
            return 0.5 * Math.pow(2*p, g)
        else 
            return 1 - 0.5 * Math.pow(2*(1 - p), g)
    }
    ```