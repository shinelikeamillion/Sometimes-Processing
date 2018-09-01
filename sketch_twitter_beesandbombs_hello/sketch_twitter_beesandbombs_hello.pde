
float handle = 0;
int lines = 9;
int max_size = 30;
float startY;
void setup() {
  size(800, 600);
  smooth();
  noFill();
  stroke(255);
  //noLoop();
  startY = (height - 9*30)/2;
}

void draw() {
  background(0);
  
  for(int i = 0; i < lines; i++) {
    float theta = 0;
    for(int j = 1; j < width/10; j++) {
      float size = map(
      cos(theta+handle+(i % 2 == 0 ? 0 : PI))
      , 1, -1, 1, max_size);
      ellipse(12*j, startY+30*i-15, size, size);
      theta += 0.25;
    }
  }
  handle+= 0.05;
}
