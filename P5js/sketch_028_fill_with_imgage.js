
step = 8
rate = 0
preload=_=> {
    bg = loadImage('http://localhost:5500/P5js/sources/dylan.jpg')
}
setup=draw=_=>{
    createCanvas(500,500)
    rate = bg.width < bg.height ? bg.width/width : bg.height/height
    noLoop()
    noStroke()
    fill(0)
    
    for (let y = 0; y < height; y+=step) {
        beginShape()
        for(let x = 0; x < width; x+=step){
            b = brightness(bg.get(x * rate, y * rate))
            vertex(x, y - map(b, 0, 100, step/2, 0))
        }
        for(let x = width; x > 0; x-=step){
            b = brightness(bg.get(x * rate, y * rate))
            vertex(x, y + map(b, 0, 100, step/2, 0))
        }
        endShape()
    }
}