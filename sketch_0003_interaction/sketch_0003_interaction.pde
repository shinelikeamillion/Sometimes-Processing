void setup() {
  size(600, 800);
}

void draw() {
  background(255);

  // Set ellipses and rects to CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER);

  drawHead(mouseX, mouseY-30);
  drawEyes();
  drawBody(mouseX, mouseY+25);
  drawLegs();
}

void drawHead(int x, int y) {
  // Head
  fill(255);
  ellipse(x, y, 60, 60);
}

void drawBody(int x, int y){
  // Body
  stroke(0);
  fill(150);
  rect(x, y, 20, 50);
}

void drawLegs() {
  // Legs
  stroke(0);
  line(230, 195, 220, 205);
  line(250, 195, 260, 205);
}

void drawEyes() {
  // Eyes
  fill(0);
  ellipse(221, 115, 16, 32);
  ellipse(259, 115, 16, 32);
}
