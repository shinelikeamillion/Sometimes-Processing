void setup() {
  size(800, 600);
}

float i = 0;
float x = 0;
void draw() {
  stroke(12);
  i += 0.01;
  point(x++, map(noise(i), 0, 1, 0, height));
}
