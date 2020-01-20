setup = _ => {
    createCanvas(600, 600, WEBGL)
    smooth()
    fill(0)
    strokeWeight(1.4)
    noiseSeed(90)
    noiseDetail(2, 0.2)
}
draw = _ => {
    background(0)
    for (let i = -4; i <5; i++) {
        offSet = 0
        for (let j = -4; j <5; j++) {
            push()
            translate(60*j, 60*i)
            offSet += noise((frameCount*0.1+i)*0.05, (frameCount*0.1+j)*0.05)*TWO_PI
            rotateY(offSet)
            rotateX(offSet)
            stroke(color(255, 30, map(i+j, -8, 8, 80, 160)))
            box(30, 30, 10)
            pop()
        }
    }
}

mousePressed =_=> {noLoop()}