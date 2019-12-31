setup=_=>{
    createCanvas(500,500)
    stroke(255)
}

draw=_=>{
    h = height/2
    fill(color(250, 0, 40))
    ellipse(h, h, h)
    for(let i=0; i<=width; i++){
        upY = map(sin(frameCount/50 + i/200*HALF_PI), -1, 1, h, h+50)
        downY = map(sin(frameCount/10 + i/200*HALF_PI), -1, 1, upY, upY+25)
        line(i, upY, i, downY)
    }
}
