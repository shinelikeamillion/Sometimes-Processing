void setup() {
  size(800, 600);
}

void draw() {
  background(50);
  stroke(255);
  fill(frameCount / 2);
  rectMode(CENTER);
  rect(width/2, height/2, mouseX, mouseY);
}
