
step = 9
rate = 0
preload=_=> {
    bg = loadImage('http://localhost:5500/P5js/sources/dylan.jpg')
}
setup=_=>{
    createCanvas(500,500)
    rate = bg.width < bg.height ? bg.width/width : bg.height/height
    noLoop()
    noStroke()
    fill(0)
}
draw=_=>{
    len = int(width/step)
    for (let y = 0; y < len; y++) {
        b = []
        for(let x = 0; x < len; x++){
            b[x] = map(brightness(bg.get(x * step * rate, y * step * rate)), 0, 100, step/2, 0)
        }
        beginShape()
        for(i = 0; i <= 2*len; i++){
            vertex(i<len?i*step:(2*len-i)*step, y*step + (i < len ? -b[i] : b[2*len-i]))
        }
        endShape()
    }
}
