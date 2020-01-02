setup=_=>{
    createCanvas(400,400)
    fill(0)
    // noLoop()
}

draw=_=>{
    background(255)
    translate(width/2, height/2)
    for(i = 20; i < width/2; i+= 20) {

        // speed = map(sin(frameCount/6, ))
        speed = (map(i, 20, 400, 2, -2)) * frameCount/25
        y = i * sin(speed)
        x = i * cos(speed)
        ellipse(x, y, 40)
    }
}

function mousePressed() {
    noLoop()
}
