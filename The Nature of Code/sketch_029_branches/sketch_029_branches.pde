float h = 10;
void setup() {
  size(800, 100);
  noLoop();
}

void draw() {
  drawLine(10f, width - 10f, h);
}

void drawLine(float x, float x1, float h) {
  // todo p.mag() got some problem here
  line(x, h, x1, h);
  h += 10;
  float l = (x1 - x) / 3f;
  if(h < height && l > 1) {
    drawLine(x, x + l, h);
    drawLine(x1 - l, x1, h);
  }
}
