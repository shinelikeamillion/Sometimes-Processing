class Oscillator {
  PVector angle;
  PVector velocity;
  PVector amplitude;
  
  Oscillator() {
    angle = new PVector();
    velocity = new PVector(random(-0.08, 0.08), random(-0.08, 0.08));
    amplitude = new PVector(random(20, width/2), random(20, height/2));
  }
  
  void oscillate() {
    angle.add(velocity);
    display();
  }
  
  void display(){
    float x = sin(angle.x)*amplitude.x;
    float y = sin(angle.y)*amplitude.y;
    
    pushMatrix();
    translate(width/2, height/2);
    stroke(0);
    fill(175);
    //line(0, 0, x, y);
    ellipse(x, y, 16, 16);
    popMatrix();
  }
}
