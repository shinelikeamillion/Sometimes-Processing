/**
curve(cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);

cpx1, cpy1  Coordinates of the first control point
x1, y1      Coordinates of the curve’s starting point
x2, y2      Coordinates of the curve’s ending point
cpx2, cpy2  Coordinates of the second control point
*/
Point cp1, cp2, p1, p2;
void setup () {
  size(200, 200);
  smooth();
  
  // control point1
  cp1 = new Point(40, 40, true);
  
  // point1
  p1 = new Point(80, 60, false);
  
  // control point2
  cp2 = new Point(60, 120, true);
  
  // point2
  p2 = new Point(100, 100, false);
}

void draw () {
  background(255);
  cp1.display();
  p1.display();
  cp2.display();
  p2.display();
  
  stroke(0);
  noFill();
  bezier(p1.x, p1.y, cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
}
