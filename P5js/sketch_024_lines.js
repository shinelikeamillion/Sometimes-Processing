
setup=draw=_=>{
    createCanvas(300,300)
    noLoop()

    strokeWeight(0.5)
    num = 3
    size = 300/7
    for(let i = 0; i < height; i+=2){
        line(0, i, width, i)

        if((i > size && i < 2*size)
            || (i > 3*size && i < 4*size)
            || (i > 5*size && i < 6*size)){
            for(let j = 0; j < num; j++) {
                s = sin(i/50 + j*PI/2) * 2
                // s = noise(i/100 + j*10) * 3
                line((2*j+1)*size, i-1, (2*j+2)*size, i+s) 
            }
        }
    }
}