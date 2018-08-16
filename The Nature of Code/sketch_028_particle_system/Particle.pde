class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
  float lifespan;
  
  Particle(PVector l) {
    location = l.copy();
    acceleration = new PVector(0, 0.05);
    velocity = new PVector(random(-1, 1), random(-1, 0));
    lifespan = 255;
  }
  
  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    lifespan -= 2.0;
  }
  void display() {
    stroke(0, lifespan);
    fill(175, lifespan);
    ellipse(location.x, location.y, 8, 8);
  }
  
  void run() {
    update();
    display();
  }
  
  boolean isDead() {
    return lifespan < 0.0;
  }
}
