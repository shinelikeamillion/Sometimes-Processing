void setup() {
  size(800, 600);
}

void draw() {
  drawLine(width/6, 2 * width / 3, 300);
}

void drawLine(float x, float len, float h) {
  if(len < 2) return;
  float y = x + len;
  line(x, h, y, h);
  
  float h1 = h - len/6f;
  float h2 = h + len/6f;
  line(x, h1, x, h2);
  line(y, h1, y, h2);
  
  drawLine(x - len/6f, len/3f, h1);
  drawLine(x - len/6f, len/3f, h2);
  drawLine(y - len/6f, len/3f, h1);
  drawLine(y - len/6f, len/3f, h2);
}

void mousePressed() {
  save("img.png");
}
