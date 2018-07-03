class Mover {
  
  PVector location;
  PVector velocity;
  PVector acceleration;
  int topspeed = 10;
  
  Mover() {
    location = new PVector(random(width), random(height));
    acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
    velocity.limit(topspeed);
  }
  
  Mover(float w, float h) {
    location = new PVector(w, h);
    acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
    velocity.limit(topspeed);
  }
  
  void move() {
    
    velocity.add(acceleration);
    location.add(velocity);
    checkEdges();
    acceleration.mult(0);
    display();
  }
  
  void applyForce(PVector force) {
    acceleration.add(force);
  }
  
  void display() {
    ellipse(location.x, location.y, 26, 26);
    ellipse(location.x, location.y+8, 18, 18);
    ellipse(location.x, location.y+15, 10, 10);
  }
  
  void checkEdges() {
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0) {
      location.x = width;
    }
    if (location.y > height) {
      location.y = height;
      velocity.y *= -1;
    } else if (location.y < 0) {
      location.y = 0;
      velocity.y *= -1;
    }
  }
}
