
function bean(x, y, r) {
    this.x = x
    this.y = y
    this.r1 = r + floor(random(9, 13))
    this.r2 = r - floor(random(0, 12))
    this.gap = floor(random(4, 8))

    this.show = function () {
        push()
        translate(this.x, this.y)
        rotate(random(0, TWO_PI))
        ellipse(0, 0, this.r1, this.r2)
        for (let i = -this.r1 / 2; i <= this.r1 / 2; i++) {
            upY = map(sin(i / 15 + HALF_PI), -1, 1, 0, this.gap) - 5
            downY = map(sin(i / 9 + HALF_PI), -1, 1, upY + 2, upY + this.gap)

            line(i, upY, i, downY)
        }
        pop()
    }
}
setup = _ => {
    createCanvas(320, 300)
    stroke(0)
    // noLoop()
}
draw = _ => {
    if(frameCount == 1 || frameCount % 75 == 0) {
        background(0)
        for (i = 0; i < width / 50; i++) {
            for (j = 0; j < width / 53; j++) {
                new bean(j * 53 + 26, i * 50 + 20, 40).show()
            }
        }
    }
}