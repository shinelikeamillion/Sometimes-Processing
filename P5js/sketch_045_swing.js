setup = _ => {
    createCanvas(600, 600)
    // noLoop()
}
draw = _ => {
    translate(width / 2, height / 2)
    background(255)
    for (let i = 0; i < width / 2; i++) {
        t = map(sin(frameCount/50), -1, 1, 10*TWO_PI, 17*TWO_PI)
        p = map(i, 0, width / 2, 0, t)
        y = i * sin(p)
        x = i * cos(p)
        text(char(int(65+i/25)), x, y + map(i, 0, width / 2, 2, 20))
    }
}