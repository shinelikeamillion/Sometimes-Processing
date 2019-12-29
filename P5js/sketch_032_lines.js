// source: https://geometrydaily.tumblr.com/post/123370356489/513-vertical-sunset-a-new-minimal-geometric
setup=_=>{
    createCanvas(500,500)
    stroke(color(220, 10, 130))
    noFill()
    noLoop()
    
    x = width/2
    y = height - 80
    for(let a = -50; a<=50; a+=5){
        beginShape()
        for(let i = x - 100 + a; i < x + 100 + a; i++) vertex(i, y-pow((i-x+a)*0.1,2))
        endShape()
    }
}
