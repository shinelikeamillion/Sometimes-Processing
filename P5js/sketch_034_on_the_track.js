branch = 3
speed = 100
setup=_=>{
    createCanvas(500,500)
    noFill()
    stroke(255)
    strokeWeight(5)
    // noLoop()
    // frameRate(5)
}

// 如果 arc 的 start 和 end 相等 则会绘制一个 ⭕️，会产生闪烁的 BUG
// 这一组数据（1.5707914124462925, 1.5708012411435006）
// - 1/1e2 使 start 和 end 不会相遇到那么小的范围
draw=_=>{
    translate(width/2, height/2)
    rotate(-HALF_PI)
    background(50)
    for(let i = 20; i<250; i+= 20){
        an = map(sin(frameCount/20 + i/speed*PI), -1, 1, 0, TWO_PI/(2*branch)-1/1e3)
        for(let j = 1; j <=branch; j++) {
            arc(0, 0, i, i, TWO_PI/branch*(j-1)+an, TWO_PI/branch*j-an)
        }
    }
}

keyPressed=_=>{
    print(keyCode)
    if(keyCode == UP_ARROW)
        branch++
    if (keyCode == DOWN_ARROW)
        branch--
    if (keyCode == LEFT_ARROW)
        speed -= 20
    if (keyCode == RIGHT_ARROW)
        speed += 20
    branch = constrain(branch, 1, 10)
    speed = constrain(speed, 20, 200)
}
