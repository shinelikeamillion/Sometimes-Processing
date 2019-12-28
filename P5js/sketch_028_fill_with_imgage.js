
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
    for (let y = 0; y < height; y+=step) {
        beginShape()
        b = []
        // x/step 应该很好理解，x+= step 会造成很多空数据
        for(let x = 0; x < width; x+=step){
            b[x/step] = map(brightness(bg.get(x * rate, y * rate)), 0, 100, step/2, 0)
            
            vertex(x, y - b[x/step])
            // >= 至关重要( 为 ！（x < width）)
            if(x+step >= width){
                for(let x1 = x; x1 > 0; x1-=step){
                    vertex(x1, y + b[x1/step])
                }
            }
        }
        endShape()
    }
}
