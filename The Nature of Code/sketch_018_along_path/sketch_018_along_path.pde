float theta;
float start;
void setup() {
  size(800, 600);
  start = 0;
  rectMode(CENTER);
}

void draw() {
  if(theta < TWO_PI) {
    float x = start++;
    float y = sin(theta)*100 + height/2;
    theta += 0.01;
    point(x, y);
    
    if(x % 20 == 0) {
      pushMatrix();
      translate(x, y);
      rotate(((y - height/2)/x));
      rect(0, 0, 20, 20);
      popMatrix();
    }
  }
}
