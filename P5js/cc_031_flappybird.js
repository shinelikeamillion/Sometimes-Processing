function bird() {
    this.x = 64
    this.y = height/2

    this.gravity = 0.6
    this.velocity = 0;
    this.angle = -PI/6
    this.strenth = -15

    this.show = function(){
        fill(255)
        push()
        rectMode(CENTER)
        translate(this.x, this.y)
        rotate(this.angle)
        rect(0, 0, 40, 20)
        pop()
        if(this.y>=height-10 || this.y <= 0){
            this.velocity = 0
            this.gameOver()
        }
    }

    this.fly = function(){
        this.angle = -PI/6
        this.velocity += this.strenth
        this.velocity *= 0.6
    }

    this.update = function() {
        this.angle = constrain(this.angle+= 0.03, -PI/6, PI/6)
        
        this.velocity += this.gravity
        this.y += this.velocity
    }

    this.gameOver = function() {
        fill(color(255, 50, 100))
        textAlign(CENTER)
        textSize(60)
        text('GAME OVER', width/2, height/2)
        noLoop()
    }
}

function pipe() {
    this.x = width
    this.y = random(height/2 - 200, height/2 + 200)
    this.gap = random(80, 200)
    this.hightlight = true

    this.update = function() {
        this.x += -2
    }

    this.show = function() {
        fill(this.hightlight ? color(255, 40, 80) : 255)
        rect(this.x, -1, 40, this.y-this.gap/2)
        rect(this.x, this.y+this.gap/2, 40, height)
    }

    this.hits = function(bird){
        this.hightlight = (bird.y < this.y - this.gap/2 
            || bird.y > this.y + this.gap/2) 
            && (bird.x > this.x && bird.x < this.x + 40)
        if(this.hightlight) this.show()
        return this.hightlight
    }
}

pipes = []
setup = _ => {
    createCanvas(600, 600)
    b = new bird()
}
draw = _ => {
    if(frameCount % 100 == 0){
        pipes.push(new pipe())
    }
    background(175)
    for(let i = pipes.length; --i>=0;){
        pipes[i].update()
        pipes[i].show()

        if(pipes[i].x < -40){
            pipes.splice(i, 1)
        }
        if(pipes[i].hits(b)) b.gameOver()
    }

    b.update()
    b.show()
}

keyPressed =_=> {
    if(key == ' '){
        b.fly()
    }
}