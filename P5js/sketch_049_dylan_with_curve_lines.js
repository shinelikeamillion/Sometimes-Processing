
step = 9
rate = 0
preload=_=>{
    bg = loadImage('http://localhost:5500/sources/dylan.jpg')
}
setup=_=> {
    createCanvas(500,500)
    stroke(color(255, 40, 100))
    noFill()
    noLoop()
    rate = bg.width < bg.height ? bg.width/width : bg.height/height
}
draw=_=>{
    for (let y = step/2; y < height; y+=step) {
        beginShape()
        for(let x = 0; x < width; x+=1){
            b = brightness(bg.get(x * rate, y * rate))
            // true 限制超过边界的值
            offH = map(b, 0, 70, step/2, 0, true)
            offR = map(b, 70, 100, 1, TWO_PI, true)
            off = map(sin(x/offR), -1, 1, -offH, offH)
            vertex(x, y + off)
        }
        endShape()
    }
}