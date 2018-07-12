class Point{
  float x, y;
  color c;
  Point(float _x, float _y, boolean isAControlPoint) {
    x= _x;
    y = _y;
    c = isAControlPoint ? color(255, 0, 0) : color(0, 0, 255);
  }
  
  void update () {
    if(mousePressed && dist(mouseX, mouseY, x, y) <= 6) {
      x = mouseX;
      y = mouseY;
    }
  }
  
  void display(){
    noStroke();
    fill(c);
    update();
    ellipse(x, y, 6, 6);
  }
}
