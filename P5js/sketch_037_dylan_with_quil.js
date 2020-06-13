
preload = _ => {
    bg = loadImage('http://localhost:5500/sources/dylan.jpg')
}
setup = _ => {
    createCanvas(300, 500)
    rate = bg.width < bg.height ? bg.width / width : bg.height / height
    // noLoop()
    fill(0)
}

draw = _ => {
    translate(width / 2, height / 2)
    for (let a = 0; a < frameCount / 2; a += 0.02) {
        x = a * sin(a)
        y = a * cos(a)
        b = map(brightness(bg.get((width / 2 + x) * rate, (width / 2 + y) * rate)), 0, 100, 4, 0)
        strokeWeight(b)
        point(x, y)
        if (x < -width / 2 || x > width / 2) noLoop()
    }
}
