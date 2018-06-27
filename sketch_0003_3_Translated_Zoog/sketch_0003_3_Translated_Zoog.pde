void setup(){
  size(800, 600);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(30); // set frame rate to 30
}

void draw() {
  background(255);
  // Draw everything relative to (mouseX, mouseY)
  translate(mouseX, mouseY);
  drawZoog();
}
  
void drawZoog() {
  drawHead(0, 0 - 30);
  drawEyes(0, 0 - 30);
  drawBody(0, 0 + 25);
  drawLegs(0, 0 + 50);
}
void drawHead(int x, int y) {
  // Head
  fill(255);
  ellipse(x, y, 60, 60);
}

void drawEyes(int x, int y) {
  // Eyes
  fill(mouseX/2, 0, mouseY/2); 
  ellipse(x - 15, y, 16, 32); 
  ellipse(x + 15, y, 16, 32);
}

void drawBody(int x, int y){
  // Body
  stroke(0);
  fill(150);
  rect(x, y, 20, 50);
}

void drawLegs(int x, int y) {
  // Legs
  stroke(0);
  line(x - 10, y, x - 20, y + 20);
  line(x + 10, y, x + 20, y + 20);
}
