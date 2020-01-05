setup = _ => {
    createCanvas(600, 600)
    // noLoop()
}
draw = _ => {
    translate(width / 2, height / 2)
    background(255)
    strokeWeight(2)
    beginShape()
    for (let i = 0; i < width / 2-10; i++) {
        t = frameCount/2
        p = map(i, 0, width / 2, 0, t)
        y = i * sin(p)
        x = i * cos(p)
        vertex(x, y)
        // line(x, y, x, y + map(i, 0, width / 2, 2, 20))
        // textSize(int(i/20+3))
        // text(lyrics[i%lyrics.length], x, y)
    }
    endShape()
}

mousePressed=_=> {
    noLoop()
}