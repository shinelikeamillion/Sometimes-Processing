setup = _ => {
    createCanvas(500, 500)
    smooth()
    rectMode(CENTER);
    noiseSeed(50)
    noiseDetail(2, 1)
    size = 10
    stroke(0)
    // noLoop();
}
size = 50
draw = _ => {
    background(255)
    translate(width / 2, height / 2)
    offset = 1.5;
    for (let n = 0; n < 4; n++) {
        translate(offset, offset);
        for (let i = -3; i <= 3; i++) {
            y = 6 * i;
            for (let j = -7; j <= 7; j++) {
                // var max = map(noise((mouseX * 0.05 + i) * 0.02, (mouseY * 0.05 + j) * 0.02), 0, 1, 1, 5);
                var max = map(noise((frameCount * 0.1 + i) * 0.08, (frameCount * 0.1 + j) * 0.05), 0, 1, 1, 5);
                if (n > max) continue;
                push()
                x = 8 * j
                translate(x, y)
                rect(x, y, size, size)
                pop()
            }
        }
    }
}

mousePressed = _ => noLoop()