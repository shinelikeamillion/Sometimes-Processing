setup = _ => {
    createCanvas(200, 200, WEBGL)
    // normalMaterial()
    noStroke()
    // noLoop()

    cs = []
    for (i = 0; i <10; i++) {
        cs.push(new C(i))
    }
}

function C (num) {
    this.inside  = true
    this.num = num
    this.count = num*20
    this.show = function(){
        push()
        // 使用 PI 抵消掉周期误差
        off = sin(++this.count*PI/100-HALF_PI)
        if (off == 1) this.inside = false
        if (off == -1) this.inside = true
        this.size = this.inside ? map(abs(off), 0, 1, 20, 40) : map(abs(off), 0, 1, 60, 40)
        z = 40 * off
        translate(0, 0, z)
        if (this.size < 25) stroke(color(255, 40, 100))
        torus(this.size, 2)
        pop()
    }
}

draw = _ => {
    // rotateX(HALF_PI+frameCount/15)
    // rotateY(HALF_PI+frameCount/15)
    rotateY(HALF_PI)
    // rotateX(HALF_PI)
    background(0)

    for(let i = 0; i < cs.length; i++){
        cs[i].show()
    }
}

mousePressed = _ => noLoop()