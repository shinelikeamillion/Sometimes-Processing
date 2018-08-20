class Spinner {
  int x;
  int y;
  int radius;
  float speed = 0.0;
  float theta = 0.0;
  
  Spinner (int x, int y, int radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  
  private void show() {
    stroke(0);
    fill(175);
    rectMode(CENTER);
    rect(0, 0, 2*radius, 2*radius);
  }
  
  void setSpeed(float speed) {
    this.speed = speed;
  }
  
  void spin() {
    // don't let this spin borther other spinners;
    pushMatrix();
    translate(x, y);
    rotate(theta += speed);
    
    show();
    
    popMatrix();
  }
}
