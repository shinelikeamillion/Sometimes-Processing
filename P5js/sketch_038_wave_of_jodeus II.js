// Original: https://jodeus.tumblr.com/page/6

let A4 = [842, 595]

setup = _ => {
    createCanvas(A4[0], A4[1])
    num = 12
    maxSize = width / num / 4
    fill(0)
    step = 10;
    noLoop()
}

draw = _ => {
    background(250)
    // step = frameCount;
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 3; j++) {
            step+=PI
            drawCicles(i, j)
        }
    }
}

drawCicles = (c, l) => {
    for (let y = 1; y < num; y++) {
        for (let x = 1; x < num; x++) {
            speedX = step / 140 * x
            speedY = y / 6;
            size = map(sin(step / 4 + (speedX + speedY) * PI), -1, 1, maxSize / 2, maxSize)
            ellipse((x + 12*c)* maxSize, (y + 12*l)* maxSize, size, size)
        }
    }
}

function keyPressed() { step += 2; redraw() }
