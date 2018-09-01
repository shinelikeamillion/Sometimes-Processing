float theta = 0;
float size;
void setup() {
  size(800, 600);
}

void draw() {
  background(255);
  size = map(sin(theta+=0.005), -1, 1, 3, 40);
  println(size);
  ellipse(width/2, height/2, size, size);
}
