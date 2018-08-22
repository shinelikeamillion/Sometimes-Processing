float x;
float y;

float speed = 0;
float gravity = 1;

void setup() {
  size(800, 600);
  x = 400;
  y = 0;
  noStroke();
  fill(175);
  rectMode(CENTER);
}
void draw () {
  background(255);
  rect(x, y, 20, 20);
  
  y += speed;
  speed += gravity;
  
  rebond();
}

void rebond() {
  if (y > height - 10) {
    speed = speed * -0.6;
    y = height - 10;
  }
}
