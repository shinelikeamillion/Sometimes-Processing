int r = 100;
void setup() {
  size(800, 600);
  background(0);
  smooth();
  noLoop();
}

void draw() {
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  noFill();
  for(int theta = 0; theta <= 8; theta++) {
    ellipse(-r+(theta*25), 0, 2*(r - theta*25), 2*r);
  }
  
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("loop", 0, 150);
}
