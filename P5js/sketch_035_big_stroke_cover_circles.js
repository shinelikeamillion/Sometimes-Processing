// Original: https://www.openprocessing.org/sketch/143704

setup=_=>{
    createCanvas(500,500)
    noLoop()
    noFill()
}
draw=_=>{

    stroke(100)
    strokeWeight(300)
    ellipse(width/2-7, height/2, width/1.8+300, width/1.8+300)
    strokeWeight(2)
    for (let i = 0; i<12; ++i) {
        ellipse(width/2 + i*(width/1.8/13), height/2, width/1.8, width/1.8)
    }
}
