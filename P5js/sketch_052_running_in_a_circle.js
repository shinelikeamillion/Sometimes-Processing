

setup = _ => {
    createCanvas(300, 300)
    noFill()
    strokeWeight(2)
    noLoop()
}

draw = _ => {
    // background(0)
    translate(width / 2, height / 2)

    // if (frameCount % 2 == 0) {
    //     stroke(255)
    //     ellipse(0, 0, width/2)
    // }
    t = floor(frameCount % 360)
    for (let i = 0; i < 1; i++) {
        start = t + i * 30
        end = start + 180

        stroke(color(255, 40, 100))
        beginShape()
        for (let a = t; a <= end + 180; a += 1) {
            //  弧度模式
            // angleMode(RADIANS)
            if (a > start && a < end) {
                off = 8 - abs(map(a, start, end, -8, 8))
                r = map(sin((a + frameCount / 20) * 11), -1, 1, width/4 - off, width/4 + off)
            } else {
                r = width/4
            }

            // 角度模式
            angleMode(DEGREES)
            x = r * cos(a)
            y = r * sin(a)
            // ellipse(x, y,5)
            vertex(x, y)
        }
        endShape()
    }
    if (frameCount % 2 == 1) {
        stroke(255)
        // ellipse(0, 0, width/2)
    }
}