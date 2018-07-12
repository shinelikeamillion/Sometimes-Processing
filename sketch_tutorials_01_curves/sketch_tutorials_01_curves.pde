/**
curve(cpx1, cpy1, x1, y1, x2, y2, cpx2, cpy2);

cpx1, cpy1  Coordinates of the first control point
x1, y1      Coordinates of the curve’s starting point
x2, y2      Coordinates of the curve’s ending point
cpx2, cpy2  Coordinates of the second control point
*/

void setup () {
  size(200, 200);
  background(255);
  smooth();
  
  noStroke();
  // control point1
  fill(255, 0, 0);
  ellipse(40, 40, 3, 3);
  
  // point1
  fill(0, 0, 255);
  ellipse(80, 60, 3, 3);
  
  // control point2
  fill(255, 0, 0);
  ellipse(60, 120, 3, 3);
  
  // point2
  fill(0, 0, 255);
  ellipse(100, 100, 3, 3);
}
