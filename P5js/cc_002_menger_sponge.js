
function Box(x, y, z, r) {
    this.pos = createVector(x, y, z)
    this.r = r

    this.generate = function () {
        let _r = this.r / 3
        if (_r < 2) return []
        let children = []
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {

                    if (abs(x) + abs(y) + abs(z) > 1) {
                        let b = new Box(
                            this.pos.x + x * _r,
                            this.pos.y + y * _r,
                            this.pos.z + z * _r,
                            _r
                        )
                        children.push(b)
                    }
                }
            }
        }
        return children
    }

    this.show = function () {
        push()
        translate(this.pos.x, this.pos.y, this.pos.z)
        box(this.r)
        pop()
    }
}
setup = _ => {
    createCanvas(400, 400, WEBGL)
    // noLoop()
    // noFill()
    // stroke(255)
    theta = 0
    normalMaterial()

    b = new Box(0, 0, 0, 200)
    boxes = []
    boxes.push(b)
}
draw = _ => {
    background(0)

    theta = frameCount/100
    rotateX(theta)
    rotateZ(-theta)

    // line(0, 0, 0, 100, 0, 0)
    // line(0, 0, 0, 0, 100, 0)
    // line(0, 0, 0, 0, 0, 50)

    for (i = 0; i < boxes.length; i++) {
        boxes[i].show()
    }
}

mousePressed = _ => {
    print(boxes.length)
    if(boxes.length>=400)return
    let new_generation = []
    for (let i = boxes.length; --i >= 0;) {
        new_generation = new_generation.concat(boxes[i].generate())
    }
    if (new_generation.length > 0) boxes = new_generation
}