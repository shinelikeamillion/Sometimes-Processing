class Particle {
  PVector location;
  PVector velocity;
  float aVelocity = 0;
  float angle = 0;
  PVector acceleration;
  float lifespan;
  float mass = 1;
  
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
    //if(touchedGround()) {
    //  velocity.mult(-1);
    //}
    lifespan -= 1.0;
    angle = (angle + aVelocity) % TWO_PI;
    acceleration.mult(0);
  }
  
  boolean touchedGround () {
    return !((location.x  > 6 && location.x < width - 6)
    && (location.y > 6 && location.y < height - 6));
  }
  
  void display() {
    pushMatrix();
    translate(location.x, location.y);
    rotate(angle);
    stroke(0, lifespan);
    fill(175, lifespan);
    rect(0, 0, 12, 12);
    popMatrix();
  }
  
  void applyForce(PVector force) {
    PVector f = force.copy();
    f.div(mass);
    acceleration.add(f);
  }
  
  void run() {
    update();
    display();
  }
  
  boolean isDead() {
    return lifespan < 0.0;
  }
}
