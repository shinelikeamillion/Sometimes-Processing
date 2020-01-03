function Star() {
    this.x = random(-width, width)
    this.y = random(-height, height)
    this.z = random(width)
    this.pz = this.z

    this.update = _ => {
        this.z -= speed
        if (this.z < 1) {
            this.x = random(-width, width)
            this.y = random(-height, height)
            this.z = width
            this.pz = this.z
        }
    }

    this.show = _ => {
        fill(255)
        noStroke()
        // 这样写会有负值情况，符合需求
        sx = map(this.x / this.z, 0, 1, 0, width/2)
        sy = map(this.y / this.z, 0, 1, 0, height/2)

        var r = map(this.z, 0, width, 4, 0)
        ellipse(sx, sy, r)

        px = map(this.x / this.pz, 0, 1, 0, width/2)
        py = map(this.y / this.pz, 0, 1, 0, height/2)
        this.pz = this.z

        stroke(255)
        line(px, py, sx, sy)
    }
}

let stars = []
setup = _ => {
    createCanvas(600, 600)
    for (let i = 0; i < 400; i++) {
        stars[i] = new Star()
    }
}
draw = _ => {
    speed = map(mouseX, 0, width, 0, 50)
    background(0)
    translate(width / 2, height / 2)

    for (let i = 0; i < stars.length; i++) {
        stars[i].update()
        stars[i].show()
    }
}