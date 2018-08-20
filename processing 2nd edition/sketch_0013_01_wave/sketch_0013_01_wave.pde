float theta = 0.0;
int radius = 8;

void setup() {
  size(800, 400);
}

void draw() {
  background(255);
  noStroke();
  fill(0);
  
  float angle = theta;
  for(int i = radius; i < width; i+= 2 * radius) {
    ellipse(i, map(sin(angle), -1, 1, radius, height - radius), 2 * radius, 2 * radius);
    //ellipse(i, map(sin(angle+PI/2), -1, 1, radius, height - radius), 2 * radius, 2 * radius);
    //ellipse(i, map(sin(angle+PI), -1, 1, radius, height - radius), 2 * radius, 2 * radius);
    //ellipse(i, map(sin(angle+3*PI/2), -1, 1, radius, height - radius), 2 * radius, 2 * radius);
    angle += 0.1;
  }
  theta += 0.02;
}
  
