setup=_=>{
    createCanvas(500,500)
    setAttributes('antialias', true);
    stroke(255)
}

draw=_=>{
    h = height/2
    fill(color(250, 0, 40))
    ellipse(h, h, h)
    for(let i=h-h/2; i<=h+h/2; i++){

        upY = map(sin(frameCount/50 - i/120*HALF_PI), -1, 1, h+20, h+40)
        downY = map(cos(frameCount/10 - i/100*HALF_PI), -1, 1, upY, upY+20)

        // 保证此点的 Y 轴在圆内
        safeY = abs(sqrt(pow(h/2, 2) - pow(i-h, 2))) + h
        if(upY > safeY) upY = safeY
        if(downY > safeY) downY = safeY
        line(i, upY, i, downY)
    }
}
