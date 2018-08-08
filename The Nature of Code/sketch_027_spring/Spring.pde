class Spring{
  PVector anchor = new PVector(width/2, height/2);
  PVector location;
  PVector force;
  float restLength;

  float k = 0.1;
  Spring(float len, float k){
    restLength = len;
    this.k = k;
  }
  
  void connect(Bob bob) {
    
    PVector force = PVector.sub(bob.location, anchor);
    float d = force.mag();
    float stretch = constrain(d - restLength, -restLength, restLength);
    
    force.normalize();
    force.mult(-1 * k * stretch);
    
    bob.applyForce(force);
  }
  
  void display(){
    fill(100);
    rectMode(CENTER);
    rect(anchor.x, anchor.y, 10, 10);
  }
  
  void displayLine(Bob b){
    stroke(175);
    line(b.location.x, b.location.y, anchor.x, anchor.y);
  }
}
