####[wanna know who the dave is?](https://twitter.com/beesandbombs)
- 使用时间函数做变化因子 
    ```
   // 取小数部分，e 为科学计数法（4e-4 = 0.0004）
   speed = (Date.now()*4e-4) % 1 
   ```
- ease 函数
    ```
    function ease(p, g) {
        if(p < 0.5)
            return 0.5 * Math.pow(2*p, g)
        else 
            return 1 - 0.5 * Math.pow(2*(1 - p), g)
    }
    ```

###[Coding challage](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH)

10. [Maze generator(迷宫生成)](https://www.youtube.com/watch?v=HyK_Q5rrcr4&list=PLRqwX-V7Uu6ZiZxtDDRCi6uhfTH4FilpH&index=10)
    1. 每个格子为一个对象，视情况而定是否绘制边框
    [wiki](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_backtracker)