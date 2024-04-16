branch = 1
speed = 100
setup=_=>{
    createCanvas(500,500, SVG)
    noFill()
    stroke(0)
    strokeWeight(5)
    // frameRate(5)
    noLoop()
}

// 如果 arc 的 start 和 end 相等 则会绘制一个 ⭕️，会产生闪烁的 BUG
// 这一组数据（1.5707914124462925, 1.5708012411435006）
// - 1/1e2 使 start 和 end 不会相遇到那么小的范围
draw=_=>{
    // background(50)

    for(let a = 50; a < height; a+=100){
        for(let b = 50; b < width; b+=100){
            push()
            translate(b, a)
            rotate(-HALF_PI)

            branch = (a+b)/100
            speed = map(a+b, 100, 1000, 100, 10)

            for(let i = 20; i<100; i+= 20){
                an = map(sin(frameCount/20 + i/speed*PI), -1, 1, 0, TWO_PI/(2*branch)-1/1e3)
                for(let j = 1; j <=branch; j++) {
                    arc(0, 0, i, i, TWO_PI/branch*(j-1)+an, TWO_PI/branch*j-an)
                }
            }
            pop()
        }
    }
}

keyPressed=_=> {
    if (key === "s") {
      var temp = Date.now();
      save("axidraw_sketch_" + temp + ".svg");
    }
  }
