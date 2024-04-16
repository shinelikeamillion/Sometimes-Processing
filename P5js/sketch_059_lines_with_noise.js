setup = _ => {
    createCanvas(600, 600, SVG)
    smooth()
    strokeWeight(1.4)
    noiseSeed(90)
    noiseDetail(2, 0.2)
    stroke(255)
    noLoop();
}
draw = _ => {
    background(0)
    for (let i = -4; i <5; i++) {
        offSet = 0
        for (let j = -4; j <5; j++) {
            push()
            translate(60*j, 60*i)
            offSet += noise((frameCount*0.1+i)*0.05, (frameCount*0.1+j)*0.05)*TWO_PI
            rotate(offSet)
            line(0, 0, 20, 20)
            pop()
        }
    }
}

mousePressed =_=> {noLoop()}