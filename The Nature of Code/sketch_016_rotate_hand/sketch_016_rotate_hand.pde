float theta = 0;
void setup() {
  size(200, 200);
  smooth();
  noFill();
}

void draw() {
  background(175);
  translate(width/2, height/2);
  rotate(theta+=0.1);
  ellipse(-30, 0, 10, 10);
  line(-25, 0, 25, 0);
  ellipse(30, 0, 10, 10);
}
