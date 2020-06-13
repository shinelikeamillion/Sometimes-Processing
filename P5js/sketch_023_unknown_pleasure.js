// Copyright: https://www.openprocessing.org/sketch/683686
// 作者用了 ES6 的写法，需要学习一下

f = 0
setup = draw = _ => {
    createCanvas(300, b = 300)
    v = vertex
    f++
    background(0)
    fill(0)
    stroke(b)

    /**
     * pow(x-150,4)/8e6) 值很有意思，在 x 为 150 左右一段范围趋近与0
     * 8e6 为拓宽x轴的影响范围，不然只会在150左右很小范围内变化
     * 1 的作用为保证分母大于0
     * 然后 noise 函数中 (x/30) 对曲线作用
     * f/50 为 speed
     * y 为纵坐标上的变化
     * (x/30+f/50+y)  为 100 以上
     */
    for (y = 100; y < b; y += 5) {
        beginShape()
        for (x = 0; x < b; ++x)
            v(x, y - 80 / (1 + pow(x - 150, 4) / 8e6) * noise(x / 30 + f / 50 + y))
        // 可以不用作者这个 1 * 10000
        // v(x,1e4)
        endShape()
    }
}