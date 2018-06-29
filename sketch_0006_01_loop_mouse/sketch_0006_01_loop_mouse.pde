void setup() {
  size(800, 600);
  noStroke();
}

void draw() {
  background(0);
  
  int i = 0; 
  while(i < width) {
    float distance = map(abs(mouseX - i), 0, 400, 0, 255);
    fill(distance);
    rect(i, 0, 20, height);
    i+=20;
  }
}
