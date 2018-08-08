class Bob{
  PVector spring;
  PVector location;
  PVector velocity;
  PVector acceleration;
  float mass = 12;
  
  float damping = 0.95;
  PVector dragOffset;
  boolean dragged;
  
  Bob() {
    location = new PVector(width/2, height/2);
    velocity = new PVector();
    acceleration = new PVector();
  }
  
  void applyForce(PVector force){
    PVector f = force.copy();
    f.div(mass);
    acceleration.add(f);
  }
  
  void update(){
    velocity.add(acceleration);
    velocity.mult(damping);
    location.add(velocity);
    acceleration.mult(0);
  };
  
  void display(){
    stroke(0);
    fill(175);
    
    ellipse(location.x, location.y, mass*2, mass*2);
  };
  
  void drag(){
    if(dragged) location.set(mouseX, mouseY);
  }
  
  void clicked(){
    float d = dist(mouseX, mouseY, location.x, location.y);
    if(d < mass){
      dragged = true;
    }
  }
  
  void stopDragging () {
    dragged = false;
  }
}
