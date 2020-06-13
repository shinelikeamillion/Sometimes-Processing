
step = 9
rate = 0
preload = _ => {
    bg = loadImage('http://localhost:5500/sources/lou.jpg')
}
setup = _ => {
    createCanvas(500, 500)
    noFill()
    stroke(color(255, 40, 100))
    noLoop()
    rate = bg.width < bg.height ? bg.width / width : bg.height / height
}

draw = _ => {
    // image(bg, 0, 0, 500, bg.height / rate)
    translate(width / 2, height / 2)


    for (let r = step; r < width / 2; r += 4) {

        off = TWO_PI / (pow(floor(r / step / 2), 2) + 100)

        start = end = 0
        first = true
        for (let a = 0; a <= TWO_PI; a += off) {
            // 保证闭合
            if (TWO_PI - a < off && TWO_PI - a > 0) a = TWO_PI - off

            x = (r * cos(a) + width / 2) * rate
            y = (r * sin(a) + height / 2) * rate
            b = brightness(bg.get(x, y))
            if (b < 60) {
                if (first && start == 0 && end == 0) {
                    start = a
                    first = false
                    push()
                    stroke(255)
                    ellipse(r * cos(a), r * sin(a), 5)
                    pop()
                }
                end = a
            }
            if ((b >= 60 || end == TWO_PI) && !first) {
                if (start == end) end += 0.05
                // push()
                // stroke(0)
                // ellipse(r * cos(a), r * sin(a), 5)
                // pop()


                arc(0, 0, 2 * r, 2 * r, start, end)
                start = 0
                end = 0
                first = true
            }
        }
    }
}