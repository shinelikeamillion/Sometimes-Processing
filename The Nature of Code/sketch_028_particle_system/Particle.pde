class Particle {
  PVector location;
  PVector velocity;
  float aVelocity = 0;
  float angle = 0;
  PVector acceleration;
  float lifespan;
  
  Particle(PVector l) {
    location = l.copy();
    acceleration = new PVector(random(-0.02, 0.02), random(-0.02, 0.02));
    velocity = new PVector(random(-0.5, 0.5), random(-0.5, 0.5));
    lifespan = 255;
    aVelocity += acceleration.x;
  }
  
  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    if(touchedGround()) {
      velocity = velocity.mult(-1);
      acceleration = acceleration.mult(-1);
    }
    lifespan -= 1.0;
    angle = (angle + aVelocity) % TWO_PI;
  }
  
  boolean touchedGround () {
    return !((location.x > 0 && location.x < width)
    && (location.y > 0 && location.y < height));
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
