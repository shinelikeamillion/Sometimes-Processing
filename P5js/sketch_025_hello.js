
setup=draw=_=>{
    createCanvas(500,500)
    background(175)
    let bg = createGraphics(500, 500)
    bg.background(0)
    bg.fill(255)
    bg.textSize(140)
    bg.text('HELLO', 0, 250)
    strokeWeight(4)
    step = 8
    for (let x = 0; x < width; x+=step) {
        for(let y = 0; y < height; y+=step){
            c = bg.get(x, y)
            stroke(c)
            point(x, y)
        }
    }
}