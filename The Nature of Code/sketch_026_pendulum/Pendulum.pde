class Pendulum {
  float r;
  float angle;
  float aVelocity;
  float aAcceleration;
  PVector origin = new PVector(width/2, 0);
  PVector location;
  float damping;
  
  Pendulum(float r, float angle){
    this.r = r;
    this.angle = angle;
    location = new PVector();
    aVelocity = 0;
    aAcceleration = 0;
    damping = 0.995;
  }
  
  void update () {
    float gravity = 0.6;
    
    // why / r here
    // http://calculuslab.deltacollege.edu/ODE/7-A-2/7-A-2-h.html
    aAcceleration = -1 * gravity / r * sin(angle);    
    aVelocity += aAcceleration;
    angle += aVelocity;
    
    aVelocity *= damping;
  }
  
  void display() {
    location.set(r*sin(angle), r*cos(angle));
    location.add(origin);
    
    stroke(0);
    fill(175);
    line(origin.x, origin.y, location.x, location.y);
    ellipse(location.x, location.y, 20, 20);
  }
  
  void fresh(){
    r = dist(mouseX, mouseY, origin.x, origin.y);
    angle = atan2(mouseX - origin.x, mouseY - origin.y);
  }
  
  void go() {
    update();
    display();
  }
}
