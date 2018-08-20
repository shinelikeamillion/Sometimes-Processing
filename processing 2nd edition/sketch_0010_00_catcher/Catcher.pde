class Catcher {
  
  float x, y;
  float r;
  
  Catcher(float radius) {
    this.r = radius;
  }
  void setLocation(float x, float y){
    this.x = x;
    this.y = y;
  }
  void display(){
    if(x*y == 0) return;
    stroke(0);
    fill(175);
    ellipse(x, y, r*2, r*2);
  }
}
