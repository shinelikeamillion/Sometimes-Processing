// Copyright: https://www.openprocessing.org/sketch/683682

let canvasSize = 400
let rect = 10
let half = canvasSize / 2
let num = canvasSize / rect

function setup() {
    createCanvas(canvasSize, canvasSize)
    // noLoop()
    noStroke()
}
/**
 * 点距离中心的距离影响改点的颜色
 * 随着speed的加快，颜色变化会越来越快
 * 正弦函数的变化引起的视觉差是我们看到很多圈圈在闪烁
 * 在上一个基础上做一点变化
 */
function draw() {
    // 遍历所有的像素
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            x = i * rect
            y = j * rect
            // speed
            d = frameCount * 0.000005
            // 把该点到中心的距离映射到改点的颜色上 （128 * （0～2））
            // 128 为 256 的一半，亮度 0～255 的一半，与 size 无关
            s = 128 * (1 + sin(d * ((x - half) * (x - half) + (y - half) * (y - half))))
            // s 为 RGB 的亮度值，color(s)同样可行
            fill(s)
            square(x, y, rect)
        }
    }
}