let gp
num = 0
size = 40
setup = _ => {
    createCanvas(600, 600)
    num = Math.floor(width / size / 2)
    gp = createGraphics(40, 40, WEBGL)
    gap = size + 30
    gp.ortho(-gap / 2, gap / 2, gap / 2, -gap / 2, 0, 80)
    gp.smooth()
    gp.strokeWeight(1)
    // gp.colorMode(HSL, 100)
    gp.noFill()
    noLoop()
}
draw = _ => {
    // background(110)
    translate(width / 2, height / 2)
    for (let i = -num; i <= num; i++) {
        for (let j = -num; j <= num; j++) {
            // gp.fill(color(map(i + j, -6, 8, 20, 200), 200, 100))
            push()
            translate(i * size, j * size)
            rX = map(i, -num, num, 0, HALF_PI)
            rY = map(j, -num, num, 0, HALF_PI)
            image(getPixels(rX, rY, size), -size / 2, -size / 2)
            pop()
        }
    }
}

function getPixels(rX, rY, size) {
    gp.push()
    gp.clear()
    // gp.background(255)
    gp.rotateY(rX + frameCount * 0.01)
    gp.rotateX(rY + frameCount * 0.01)
    gp.box(size)
    gp.pop()
    return gp
}

mousePressed = _ => noLoop()
