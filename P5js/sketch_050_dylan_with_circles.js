
step = 9
rate = 0
preload = _ => {
    bg = loadImage('http://localhost:5500/sources/dylan.jpg')
}
setup = _ => {
    createCanvas(500, 500)
    noFill()
    stroke(color(255, 40, 100))
    noLoop()
    rate = bg.width < bg.height ? bg.width / width : bg.height / height
}
draw = _ => {
    background(255)
    translate(width / 2, height / 2)
    for (let r = step; r < width / 2; r += 4) {
        off = 1 / (r/2)
        beginShape()
        for (let a = 0; a <= TWO_PI ; a += off) {
            // 保证闭合
            if(TWO_PI - a < off && TWO_PI - a > 0) a = TWO_PI - off
            x = r * cos(a)
            y = r * sin(a)
            b = brightness(bg.get((width/2 + x) * rate, (width/2 + y) * rate))
            // true 限制超过边界的值
            offH = map(b, 0, 50, step/2, 0, true)
            offH = map(sin(frameCount/5 + HALF_PI), -1, 1, 0, offH)
            
            x = (r + offH) * cos(a)
            y = (r + offH) * sin(a)
            vertex(x, y)
        }
        endShape()
    }
}