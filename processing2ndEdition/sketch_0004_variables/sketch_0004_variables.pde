int circleX = 0;
int circleY = 100;

void setup() {
  size(800, 600);
}

void draw() {
  background(255);
  stroke(0);
  fill(175);
  ellipse(circleX, circleY, 50, 50);

  circleX = circleX + 1;
}
