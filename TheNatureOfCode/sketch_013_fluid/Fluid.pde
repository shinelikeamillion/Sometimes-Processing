
class Fluid {
  float x;
  float y;
  float w;
  float h;
  float c = 0.1;
  Fluid (float x, float y, float w, float h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  void display () {
    stroke(0);
    fill(135);
    rect(x, y, w, h);
  }
  
  boolean isInsided(Mover mover) {
    return (mover.location.x > x 
      && mover.location.x < x+w
      && mover.location.y > y
      && mover.location.y < y+h);
  }
}
