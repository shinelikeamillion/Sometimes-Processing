### LSystem （Lindenmayer system）
匈牙利植物学家 Lindenmayer 开发的一套基于语法的系统，用于模拟植物的生长模式

主要包括三个元素
> 字母表
> 公理：一个语句，用于描述系统的初始状态
> 规则：作用于公理，递归作用于结果，每次产生一个新的语句

"FG+-[]" 是 L 系统常用的字母表，有如下含义
* F：画一个线段，然后向前移动 line(0, 0, 0, len) translate(0, len)
* G：只向前移动 translate(0, len)
* +：向右转 rotate(angle)
* -：向左转 rotate(-angle)
* [：保存当前位置 pushMatrix()
* ]：恢复到之前的位置 popMatrix()
这种框架就是著名的 Turtle graphics，对一只海龟下命令，把绘图的任务交给它