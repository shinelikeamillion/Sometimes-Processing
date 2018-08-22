float h = 10;
void setup() {
  size(800, 100);
  noLoop();
}

void draw() {
  drawLine(10, width - 10, h);
}

void drawLine(float x, float x1, float h) {
  // todo p.mag() got some problem here
  h += 10;
  float l = (x1 - x) / 3f;
  if(h < height && l > 1) {
    line(x, h, x1, h);
    println(x, x1, l);
    drawLine(x, x + l, h);
    drawLine(x1 - l, x1, h);
  }
}
