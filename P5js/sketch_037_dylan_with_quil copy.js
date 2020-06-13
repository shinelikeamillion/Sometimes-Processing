
preload = _ => {
    bg = loadImage('http://localhost:5500/sources/dylan.jpg')
}
setup = _ => {
    createCanvas(300, 300)
    rate = bg.width < bg.height ? bg.width / width : bg.height / height
    fill(0)
}

theta = 0
draw = _ => {
    translate(width / 2, height / 2)
    a = frameCount
    theta = a
    x = a * sin(theta)
    y = a * cos(theta)
    b = map(brightness(bg.get((width / 2 + x) * rate, (width / 2 + y) * rate)), 0, 100, 4, 0)
    strokeWeight(b)
    point(x, y)
    if (x < -width / 2 || x > width / 2) noLoop()
}
