float r;
float theta = 0;
float border;

void setup() {
  size(800, 600);
  background(255);
  border = 16;
  r = (height - border)/2;
}

// points on the circle X*X + Y*Y = R*R;
void draw() {
  float x = r * cos(theta);
  float y = r * sin(theta);
  noStroke();
  fill(0);
  
  // Dan's example
  //ellipse(x + width/2, y + height/2, 16, 16);
  
  translate(width/2, height/2);
  ellipse( x, y, 16, 16);
  theta += 0.02;
}
