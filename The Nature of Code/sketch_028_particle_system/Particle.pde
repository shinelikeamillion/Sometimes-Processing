class Particle {
  PVector location;
  PVector velocity;
  float aVelocity = 0;
  float angle = 0;
  PVector acceleration;
  float lifespan;
  
  Particle(PVector l) {
    location = l.copy();
    acceleration = new PVector(random(-0.05, 0.05), random(-0.05, 0.05));
    velocity = new PVector(random(-1, 1), random(-1, 1));
    lifespan = 255;
    aVelocity += acceleration.x;
  }
  
  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    lifespan -= 2.0;
    angle = (angle + aVelocity) % TWO_PI;
  }
  
  void display() {
    pushMatrix();
    translate(location.x, location.y);
    rotate(angle);
    stroke(0, lifespan);
    fill(175, lifespan);
    rect(0, 0, 13, 13);
    popMatrix();
  }
  
  void applyForce(PVector force) {
    acceleration.add(force);
  }
  
  void run() {
    update();
    display();
  }
  
  boolean isDead() {
    return lifespan < 0.0;
  }
}
