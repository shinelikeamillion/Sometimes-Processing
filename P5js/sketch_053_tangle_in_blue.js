setup = _ => {
    createCanvas(200, 200, WEBGL)
    // normalMaterial()
    noStroke()
    // noLoop()
    frameRate(60)
    capture = new Capture(this, 60*PI)
}

draw = _ => {
    rotateX(QUARTER_PI+frameCount/15)
    rotateY(QUARTER_PI+frameCount/15)
    // rotateY(HALF_PI)
    background(0)

    for (i = 0; i < 2; i++) {
        off = sin(frameCount / 30 + i * HALF_PI)
        size = abs(floor(20 * off)) + 20
        push()
        translate(0, 0, map(off, -1, 1, -size, size))
        if (abs(off)<0.3) stroke(color(255, 40, 100))
        torus(size, 2)
        pop()
    }
    
    capture.cap()
}