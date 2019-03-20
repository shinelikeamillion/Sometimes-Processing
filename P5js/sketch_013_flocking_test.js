

let flock
function setup() {
  createCanvas(windowWidth, windowHeight - 50)
  createP("Drag the mouse to generate new boids")
  
  flock = new Flock()
  flock.addHindrance(new Hindrance(width/2, height/2))
}

function draw(){
  background(51)
  flock.run()
}

function mouseClicked(){
}
function mouseDragged(){
  flock.addBoid(new Boid(mouseX, mouseY))
}

function Flock() {
  this.boids = []
  this.hindrances = []
}

Flock.prototype.run = function() {

  for(let i = 0; i < this.hindrances.length; i++){
    this.hindrances[i].show()
  }

  for(let i = 0; i < this.boids.length; i++){
    this.boids[i].run(this.boids, this.hindrances)
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b)
}

Flock.prototype.addHindrance = function(h) {
  this.hindrances.push(h)
}
 
function Hindrance(x, y) {
  this.desiredseparation = 100.0
  this.r = 20
  this.level = random(0.1, 0.3)
  this.position = createVector(x, y)
  this.bad = this.level > 0.2
}

Hindrance.prototype.show = function() {
  fill(this.bad ? color(219, 68, 55) : color(15, 175, 88))
  ellipse(this.position.x, this.position.y, this.r, this.r)
  noFill()
  strokeWeight(0.5)
  ellipse(this.position.x, this.position.y, this.desiredseparation, this.desiredseparation)
}

function Boid(x, y) {
  this.acceleration = createVector(0, 0)
  this.position = createVector(x, y)
  this.velocity = createVector(width/2 - x, height/2 - y).normalize()
  this.r = 3.0
  this.maxSpeed = 3
  this.maxForce = 0.02
}

Boid.prototype.separateHindrance = function(hindrances) {
  let desiredseparation = hindrances[0].desiredseparation
  let steer = createVector(0, 0)
  // 合力方向
  for(let i = 0; i < hindrances.length; i++) {
    if(hindrances[i] == undefined) return
    let d = p5.Vector.dist(this.position, hindrances[i].position)
    print(d , desiredseparation)
    if((d > 0) && (d < desiredseparation/2)) {
      noLoop
      let diff = p5.Vector.sub(this.position, hindrances[i].position)
      diff.normalize()
      diff.mult(hindrances[i].level)
      diff.mult(1 - d/100)
      steer.add(diff)
    }
  }

  // if(steer.mag() > 0) {
  //   steer.normalize()
  //   steer.mult(this.maxSpeed)
  //   steer.sub(this.velocity)
  //   steer.limit(0.08)
  // }
  return steer
}

// calculates and applieds a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target, this.position)
  desired.normalize()
  desired.mult(this.maxSpeed)
  let steer = p5.Vector.sub(desired, this.velocity)
  steer.limit(this.maxForce)
  return steer
}

// Wraparound
Boid.prototype.borders = function() {
  if(this.position.x < -this.r 
    || this.position.y < -this.r 
    || this.position.x > width + this.r
    || this.position.y > height + this.r) delete this.boids[this.boids.indexOf(this)]
}

Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force)
}

Boid.prototype.flock = function(boids, hindrances) {
  let hin = this.separateHindrance(hindrances)

  hin.mult(1.0)

  this.applyForce(hin)
}

Boid.prototype.update = function() {
  this.velocity.add(this.acceleration)
  this.velocity.limit(this.maxSpeed)
  this.position.add(this.velocity)
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0)
}

Boid.prototype.render = function() {
  // Draw a triangele rotated in the direction of velocity
  let theta = this.velocity.heading() + radians(90)
  fill(127)
  stroke(200)
  push()
  translate(this.position.x, this.position.y)
  rotate(theta)
  beginShape()
  vertex(0, -this.r * 2)
  vertex(-this.r, this.r * 2)
  vertex(this.r, this.r * 2)
  endShape(CLOSE)
  pop()
}

Boid.prototype.run = function(boids, hindrances){
  this.flock(boids, hindrances)
  this.update()
  this.borders()
  this.render()
}




