let capture
setup = _ => {
    createCanvas(568, 568, WEBGL)
    // normalMaterial()
    noStroke()
    fill(220)
    // noLoop()

    cs = []
    for (i = 0; i <20; i++) {
        cs.push(new C(i))
    }
}

function C (num) {
    this.inside  = true
    this.num = num
    this.count = 1
    this.show = function(){
        if(frameCount < this.num*6) return
        push()
        // 使用 PI 抵消掉周期误差
        // off = sin(++this.count*PI/100-HALF_PI)
        this.inside = (this.count % 20 - 10)  < 0
        // 使用线性插值
        off = this.inside?0.2*(this.count%20 - 5):-0.2*(this.count%20 - 15)
        z = 40 * off
        this.size = this.inside ? map(abs(off), 0, 1, 10, 30) : 60 * sin(map(abs(off), 0, 1, PI/2, PI/6))
        translate(0, 0, z)
        if (this.size < 12) stroke(color(255, 40, 100))
        torus(this.size, 2)
        pop()
        this.count+= 0.1
    }
}

draw = _ => {
    // rotateX(HALF_PI+frameCount/30)
    // rotateY(HALF_PI+frameCount/30)
    rotateX(QUARTER_PI)
    rotateY(QUARTER_PI)
    background(0)

    for(let i = 0; i < cs.length; i++){
        cs[i].show()
        print(i, cs[i].count > frameCount)
    }
    if(capture !== undefined) capture.cap()
}

mousePressed = _ => {
    // capture = new Capture(this, frameCount+200)
}