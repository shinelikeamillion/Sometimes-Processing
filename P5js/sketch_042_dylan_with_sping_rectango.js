
step = 8
rate = 0
preload=_=> {
    bg = loadImage('http://localhost:5500/P5js/sources/dylan.jpg')
}
setup=draw=_=>{
    createCanvas(500,500)
    noStroke()
    background(0)
    rate = bg.width < bg.height ? bg.width/width : bg.height/height
    
    a = frameCount/5
    for (let y = 4; y < height; y+=step) {
        for(let x = 4; x < width; x+=step){
            b = brightness(bg.get(x * rate, y * rate))
            if(b >= 70) continue
            offSize = map(b, 0, 100, step*3, 1)
            beginShape()
            h = offSize * cos(PI/3) * 2/3
            vertex(x + h * cos(a), y + h*sin(a))
            vertex(x + h * cos(a+4*PI/3), y + h*sin(a+4*PI/3))
            vertex(x + h * cos(a+2*4*PI/3), y + h*sin(a+2*4*PI/3))
            endShape()
        }
    }
}