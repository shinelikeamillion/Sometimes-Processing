float angle = 0;
float aVelocity = 0;
float aAcceleration = 0.01;
void setup() {
  size(200, 200);
  smooth();
  noFill();
}

void draw() {
  background(175);
  translate(width/2, height/2);
  rotate(angle);
  ellipse(-30, 0, 10, 10);
  line(-25, 0, 25, 0);
  ellipse(30, 0, 10, 10);
  aVelocity += aAcceleration;
  angle += aVelocity;
}
