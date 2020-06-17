num = 1
size = 0
setup = _ => {
    createCanvas(300, 300)
    frameRate(1)
    noFill()
    // noLoop()
}
draw = _ => {
    background(255)
    num = Math.floor(map(mouseX, 0, width, 1, 20, true));
    size = Math.floor(width / num);

    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            x = i * size
            y = j * size

            // rect(x, y, size, size)
            drawArc(x, y, size)
        }
    }
}

function drawArc(x, y, size) {
    rand = random()
    if (rand < .5) {
        arc(x + size, y, size, size, HALF_PI, PI)
        arc(x, y + size, size, size, PI * 3 / 2, TWO_PI)
    } else {
        arc(x, y, size, size, 0, HALF_PI)
        arc(x + size, y + size, size, size, PI, PI * 3 / 2)
    }
}