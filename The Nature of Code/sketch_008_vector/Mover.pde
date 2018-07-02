class Mover {
  
  PVector location;
  PVector velocity;
  PVector acceleration;
  
  Mover() {
    location = new PVector(random(width), random(height));
    acceleration = new PVector(random(-0.001, 0.001), random(-0.01, 0.01));
    velocity = new PVector(0, 0);
    velocity.limit(10);
  }
  void move() {
    acceleration = PVector.random2D();
    acceleration.mult(random(2));
    velocity.add(acceleration);
    location.add(velocity);
    checkEdges();
    display();
  }
  void display() {
    stroke(0);
    fill(175);
    ellipse(location.x, location.y, 26, 26);
  }
  
  void checkEdges() {
    if (location.x > width) {
      location.x = 0;
    } else if (location.x < 0){
      location.x = width;
    }
    if (location.y > height){
      location.y = 0;
    } else if (location.y < 0) {
      location.y = height;
    }
  }
}
