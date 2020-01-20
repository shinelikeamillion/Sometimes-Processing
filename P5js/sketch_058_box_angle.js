setup = _ => {
    createCanvas(600, 600, WEBGL)
    smooth()
    fill(0)
    strokeWeight(1.4)
    // noLoop()
}
draw = _ => {
    background(0)
    offSet = map(sin(frameCount/20), -1, 1, 0, TWO_PI)
    for (let i = -4; i <5; i++) {
        for (let j = -4; j <5; j++) {
            push()
            translate(60*j, 60*i)
            rotateY(i/8*PI + offSet)
            rotateX(j/8*PI + offSet)
            stroke(color(255, 30, map(i+j, -8, 8, 80, 160)))
            box(30, 30, 10)
            pop()
        }
    }
}

mousePressed =_=> {noLoop()}