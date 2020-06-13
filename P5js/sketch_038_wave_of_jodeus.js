// Original: https://jodeus.tumblr.com/page/6

setup = _ => {
    createCanvas(200, 200)
    num = 12
    maxSize = width / num
    fill(0)
    // noLoop()
}

draw = _ => {
    background(255)
    for (let y = 1; y < num; y++) {
        for (let x = 1; x < num; x++) {
            speedX = frameCount / 140 * x
            speedY = y / 6;
            size = map(sin(frameCount / 4 + (speedX + speedY) * PI), -1, 1, maxSize / 2, maxSize)
            ellipse(x * maxSize, y * maxSize, size, size)
        }
    }
}

function keyPressed() { noLoop() }
