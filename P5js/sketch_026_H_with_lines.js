
setup=draw=_=>{
    createCanvas(500,500)
    noLoop()
    let bg = createGraphics(500, 500)
    bg.background(0)
    bg.fill(255)
    bg.textSize(500)
    bg.text("H", 0, 500)
    
    step = 8
    for (let y = 1; y < height; y+=step) {
        beginShape()
        for(let x = 0; x < width; x+=step){
            b = brightness(bg.get(x, y))
            vertex(x, y - (b > 0 ? 7 : 0))
        }
        endShape()
    }
}