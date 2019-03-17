
/**
 * p5js: https://p5js.org/zh-Hans/examples/simulate-flocking.html
 * The Nature of Code 
 * Daniel Shiffman
 * http://natureofcode.com
 */

let flock
function setup() {
  createCanvas(windowWidth, windowHeight)
  createP("Drag the mouse to generate new boids")
  
  flock = new Flock()
  for(let i = 0; i < 100; i++){
    let b = new Boid(width/2, height/2)
    flock.addBoid(b)
  }
}

function draw(){
  background(51)
  flock.run()
}

function mouseClicked(){
  flock.addBoid(new Boid(mouseX, mouseY))
}
function mouseDragged(){
  flock.addBoid(new Boid(mouseX, mouseY))
}

function Flock() {
  this.boids = []
}

Flock.prototype.run = function() {
  for(let i = 0; i < this.boids.length; i++){
    this.boids[i].run(this.boids)
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b)
}

function Boid(x, y) {
  this.acceleration = createVector(0, 0)
  this.velocity = createVector(random(-1, 1), random(-1, 1))
  this.position = createVector(x, y)
  this.r = 3.0
  this.maxSpeed = 3
  this.maxForce = 0.05
}

/* Separation
 * Method checks for nearby boids and steers away
*/
Boid.prototype.separate = function(boids) {
  let desiredseparation = 25.0
  let steer = createVector(0, 0)
  let count = 0
  for(let i = 0; i < boids.length; i++){
    let d = p5.Vector.dist(this.position, boids[i].position)
    if((d > 0) && (d < desiredseparation)) {
      let diff = p5.Vector.sub(this.position, boids[i].position)
      diff.normalize()
      diff.div(d)
      steer.add(diff)
      count++
    }
  }

  // Average: divide by how many
  if(count > 0) steer.div(count)

  if(steer.mag() > 0) {
    steer.normalize()
    steer.mult(this.maxSpeed)
    steer.sub(this.velocity)
    steer.limit(this.maxForce)
  }
  return steer
}

// calculate the average velocity
Boid.prototype.align = function(boids) {
  let neighbordist = 50
  let sum = createVector(0, 0)
  let count = 0
  for(let i = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position, boids[i].position)
    if((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++
    }
  }

  if(count > 0) {
    sum.div(count)
    sum.normalize()
    sum.mult(this.maxSpeed)
    let steer = p5.Vector.sub(sum, this.velocity)
    steer.limit(this.maxForce)
    return steer
  } else {
    return createVector(0, 0)
  }
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

/* Cohesion: for the average location of near boids.
 * calculate steering vector towards that location
 */
Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50
  let sum = createVector(0, 0)
  let count = 0
  for(let i  = 0; i < boids.length; i++) {
    let d = p5.Vector.dist(this.position, boids[i].position)
    if((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position)
      count++
    }
  }

  if(count > 0) {
    sum.div(count)
    return this.seek(sum)
  } else {
    return createVector(0, 0)
  }
}
// Wraparound
Boid.prototype.borders = function() {
  if(this.position.x < -this.r) this.position.x = width + this.r
  if(this.position.y < -this.r) this.position.y = height + this.r
  if(this.position.x > width + this.r) this.position.x = -this.r
  if(this.position.y > height + this.r) this.position.y = -this.r
}

Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force)
}

Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids)
  let ali = this.align(boids)
  let coh = this.cohesion(boids)

  sep.mult(1.5)
  ali.mult(1.0)
  coh.mult(1.0)

  this.applyForce(sep)
  this.applyForce(ali)
  this.applyForce(coh)
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

Boid.prototype.run = function(boids){
  this.flock(boids)
  this.update()
  this.borders()
  this.render()
}




