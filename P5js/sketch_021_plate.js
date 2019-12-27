// Copyright: https://www.openprocessing.org/sketch/683682

let size = 300
let half = size/2
function setup(){
    createCanvas(size, size)
    // noLoop()
}
/**
 * 点距离中心的距离影响改点的颜色
 * 随着speed的加快，颜色变化会越来越快
 * 正弦函数的变化引起的视觉差是我们看到很多圈圈在闪烁
 */
function draw(){
    // 遍历所有的像素
    for (let index = 0; index < size*size; index++) {
        // x 取模 (0~width-1) 同列有关系 
        x = (index % size)
        // y 取余 (0～height-1) 同行有关系
        y = int(index/size)
        // speed
        d = frameCount * 0.0001
        // 把该点到中心的距离映射到改点的颜色上 （128 * （0～2））
        // 128 为 256 的一半，亮度 0～255 的一半，与 size 无关
        s = 128 * (1+sin(d*((x-half)*(x-half) + (y-half)*(y-half))))
        // s 为 RGB 的亮度值，color(s)同样可行
        set(x, y, color(s,s,s))
    }
    updatePixels()
}