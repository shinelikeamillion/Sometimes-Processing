var firework = []
var gravity
setup = _ => {
    createCanvas(400, 300)
    stroke(255)
    strokeWeight(2)
    gravity = createVector(0, 0.2)
}
draw = _ => {
    background(0, 0, 0, 25)
    if(random(1) < 0.03) firework.push(new FireWork())
    for (let i = firework.length -1; i >= 0; i--) {
        firework[i].update()
        firework[i].show()
        if(firework[i].done) firework.splice(i, 1)
    }
}

function FireWork() {
    this.firework = new Particle(floor(random(width)), height, 2)
    this.exploded = false
    this.lifespan = 255
    this.particles = []
    this.hu = random(255)

    this.update = function () {
        if (!this.exploded) {
            this.firework.applyForce(gravity)
            this.firework.update()
            if (this.firework.vel.y >= 0) {
                this.exploded = true
                this.explod()
            }
        } else {
            for(let i = this.particles.length-1; i >= 0; i--){
                this.particles[i].applyForce(gravity)
                this.particles[i].update()
                if(this.lifespan <= 0) this.particles.splice(i, 1)
            }
        }
    }

    this.show = function () {
        if (!this.exploded) {
            this.firework.show()
        } else {
            push()
            colorMode(HSB)
            stroke(this.hu, 255, 255, map(this.lifespan-=4, 0, 255, 0, 1))
            for(let i = 0; i < this.particles.length; i++){
                this.particles[i].update()
                this.particles[i].vel.mult(0.8)
                this.particles[i].show()
            }
            pop()
        }
    }

    this.done = this.explod && this.particles.length <= 0

    this.explod = function() {
        for(let i = 0; i<100; i++){
            var p = new Particle(this.firework.pos.x, this.firework.pos.y, 0.3)
            p.vel = p5.Vector.random2D().mult(random(1, 6))
            this.particles.push(p)
        }
    }
}

function Particle(x, y, r) {
    this.pos = createVector(x, y)
    this.vel = createVector(0, random(-12, -5))
    this.acc = createVector(0, 0)
    this.r = r

    this.applyForce = function (force) {
        this.acc.add(force)
    }

    this.update = function () {
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }
    this.show = function () {
        ellipse(this.pos.x, this.pos.y, this.r)
    }
}

mousePressed = _ => { noLoop() }