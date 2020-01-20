setup = _ => {
    createCanvas(600, 600, WEBGL)
    smooth()
    fill(0)
    strokeWeight(1.4)
    noiseSeed(90)
    noiseDetail(2, 0.2)

    couter = []
    for (let i = 0; i < 8; i++) {
        couter.push(new Counter(0, 60 * (i - 4), 50 * i))
    }
}
draw = _ => {
    background(0)
    for (let i = 0; i < couter.length; i++) {
        couter[i].show()
    }
}

function Counter(x, y, count) {
    this.x = x
    this.y = y
    this.count = count
    this.offSet = 0

    this.show = function () {
        push()
        translate(this.x, this.y)
        if (this.count-- < 0) rotateY(radians(this.offSet += 10))
        stroke(color(255, 30, map(this.y, -240, 240, 80, 160)))
        box(30, 30, 10)
        pop()
    }
}

mousePressed = _ => { noLoop() }