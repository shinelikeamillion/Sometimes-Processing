let gp
setup = _ => {
    createCanvas(600, 600)
    gp = createGraphics(60, 60, WEBGL)
    gp.ortho(-110 / 2, 110 / 2, 110 / 2, -110 / 2, 0, 110)
    gp.smooth()
    gp.strokeWeight(2)
    gp.colorMode(HSL, 100)
    // gp.noFill()
    // noLoop()
}
draw = _ => {
    background(0)
    translate(width / 2, height / 2)
    for (let i = -3; i <= 4; i++) {
        for (let j = -3; j <= 4; j++) {
            gp.fill(color(map(i + j, -6, 8, 20, 200), 200, 100))
            push()
            translate(i * 60, j * 60)
            rX = map(i, -3, 4, 0, HALF_PI)
            rY = map(j, -3, 4, 0, HALF_PI)
            image(getPixels(rX, rY, 60), -60, -60)
            pop()
        }
    }
}

function getPixels(rX, rY, size) {
    gp.push()
    gp.clear()
    gp.background(0)
    gp.rotateX(rX + frameCount * 0.01)
    gp.rotateY(rY + frameCount * 0.01)
    gp.box(size)
    gp.pop()
    return gp
}

mousePressed = _ => noLoop()
