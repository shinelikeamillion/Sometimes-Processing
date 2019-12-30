setup=_=>{
    createCanvas(500,500)
    noFill()
    stroke(255)
    strokeWeight(5)
    arc(0, 0, 50, 0, 0, HALF_PI)
    // noLoop()
    // frameRate(3)
}

// 如果 arc 的 start 和 end 相等 则会绘制一个 ⭕️，会产生闪烁的 BUG
// 这一组数据（1.5707914124462925, 1.5708012411435006）
// - 1/1e2 使 start 和 end 不会相遇到那么小的范围
draw=_=>{
    translate(width/2, height/2)
    background(50)
    speed = frameCount/20
    for(let i = 20; i<250; i+= 20){
        an = map(sin(speed + i/100), -1, 1, 0, HALF_PI-1/1e3)
        arc(0, 0, i, i, an, PI-an)
        arc(0, 0, i, i, PI+an, TWO_PI-an)
    }
}

mousePressed=_=>{noLoop()}
