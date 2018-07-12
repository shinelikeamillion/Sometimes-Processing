class Doorbell{
  float x;
  float y;
  float r;
  
  Doorbell(float _x, float _y, float _r) {
    x = _x;
    y = _y;
    r = _r;
  }
  
  boolean contains(float mx, float my) {
    return dist(mx, my, x, y) > r;
  }
  
  void display (float mx, float my) {
    if (contains(mx, my)) {
      fill(100);
    } else {
      fill(175);
    }
    stroke(0);
    strokeWeight(4);
    ellipse(x, y, r, r);
  }
}
