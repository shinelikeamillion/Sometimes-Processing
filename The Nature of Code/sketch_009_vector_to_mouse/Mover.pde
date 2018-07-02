class Mover {
  
  PVector location;
  PVector velocity;
  PVector acceleration;
  int topspeed = 10;
  float dirMult = 0.5;
  
  Mover() {
    location = new PVector(random(width), random(height));
    //acceleration = new PVector(random(-0.001, 0.001), random(-0.01, 0.01));
    velocity = new PVector(0, 0);
    velocity.limit(10);
  }
  void move() {
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, location).normalize();
    dir.mult(dirMult);
    
    acceleration = dir;
    
    velocity.add(acceleration);
    velocity.limit(topspeed);
    location.add(velocity);
    //checkEdges();
    display();
  }
  void display() {
    //stroke(0);
    //fill(175);
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
  
  void mousePressed () {
    dirMult += 0.1;
  }
}
