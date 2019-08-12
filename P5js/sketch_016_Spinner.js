var N = 12, n
var th, r, t, rot

// 科学计数法 2*10^-4
var speed = 4e-4, dir
var tw = .05
var ee = 3
var c1, c2

function ease(p, g) {
    if(p < 0.5)
        return 0.5 * Math.pow(2*p, g)
    else 
        return 1 - 0.5 * Math.pow(2*(1 - p), g)
}

function setup() {
    createCanvas(540, 540)
    noStroke()
    rectMode(CENTER)
    c1 = color(30, 120, 245)
    c2 = color(250)
    noLoop()
}

function draw() {
    // speed = 0.0002, 同当前时间关联并取小数部分(即 t 随时间在 0-1 之间变化)
    t = (Date.now()*speed) % 1
    background(0)
    push()
    translate(width/2, height/2)

    // N 为圈的层级
    for(var i=0; i<N; i++) {

        // 1, -1, 1, -1
        dir = i % 2 == 0 ? -1 : 1
        // 半径
        r = 20*i
        // 原写法：Math.ceil(6*i) 做了向上取整操作，似乎是没有必要
        // 
        n = 6*i
        // console.log(n)
        fill(250)

        // 可以把 n 改为 1，看看第一组绘制原理
        for(var j=0; j<n; j++) {

            /* th 和 rot 把旋转分成两组
            rot 跟 i 关联，
            */
            th = TWO_PI * (j+dir*t) / n
            rot = (3*th/TWO_PI+t+tw*i) % 1

            if(rot <= .5) {
                fill(lerpColor(c1, c2, ease(2*rot, ee)))
                rot = .5*ease(2*rot, ee)
            } else {
                fill(lerpColor(c1, c2, ease(2-2*rot, ee)))
                rot = .5 + .5*ease(2*rot-1, ee)
            }

            rot *= PI
            push()
            rotate(th)
            translate(r, 0)
            rotate(rot)
            rect(0, 0, 5, 17)
            pop()
        }
    }
    pop()
}