// source: https://geometrydaily.tumblr.com/post/123370356489/513-vertical-sunset-a-new-minimal-geometric
setup=_=>{
    createCanvas(500,500)
    noStroke()
    noLoop()
    goldenRatio = ((sqrt(5) + 1 ) / 2)
    fill(color(33,93,98))
    goldPoint = width/goldenRatio
    rect(0, 0, goldPoint, height)
    fill(color(1,36,35))
    rect(goldPoint, 0, width-goldPoint, height)
    noFill()
    stroke(255, 120)
    strokeWeight(1.4)
    ellipse(0, height, goldPoint*2, goldPoint*2)
    ellipse(width, height, width, width)
    ellipse(width, height/2, width-2, width-2)
}
