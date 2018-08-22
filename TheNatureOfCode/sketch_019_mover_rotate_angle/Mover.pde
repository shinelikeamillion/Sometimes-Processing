class Mover{
  PVector location;
  PVector velocity;
  PVector acceleration;
  float mass;
  
  float angle = 0;
  float aVelocity = 0;
  float aAcceleration = 0;
  
  Mover() {
    mass = 2;
    location = new PVector(random(width), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0.01, 0.02);
    aAcceleration = acceleration.x;
  }
  
  void move(){
    velocity.add(acceleration);
    location.add(velocity);
    
    aAcceleration = acceleration.x / 10.0;
    aVelocity += aAcceleration;
    aVelocity = constrain(aVelocity, -0.1, 0.1);
    angle += aVelocity;
    //acceleration.mult(0);
    
    display();
  }
  
  void display() {
    stroke(255);
    noFill();
    rectMode(CENTER);
    pushMatrix();
    translate(location.x, location.y);
    
    rotate(angle);
    rect(0, 0, mass*16, mass*16);
    popMatrix();
  }
}
