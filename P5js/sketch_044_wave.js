
step = 20
setup = draw = _ => {
    createCanvas(500, 500)
    background(color(255, 100, 100))
    stroke(225)
    noFill()
    translate(width / 2, height / 2)
    for (let y = -height / 2 + step/2; y < height / 2; y += step) {
        for (let x = -width / 2 + step/2; x < width / 2; x += step) {
            d = map(x*x + y*y, 0, width*width/4, 0, HALF_PI)
            r = map(sin(0.5*d - frameCount/20), -1, 1, 1, step+4)
            ellipse(x, y, r)
        }
    }
}