float zoogX;
float zoogY;

float eyeR;
float eyeG;
float eyeB;

void setup(){
  size(800, 600);
  ellipseMode(CENTER);
  rectMode(CENTER);
  frameRate(10); // make flash
}

void draw() {
  background(255);
  if(frameCount % 5 == 0)
  drawZoog();
}

void drawZoog() {
  zoogX = random(width);
  zoogY = random(height);
  drawHead(zoogX, zoogY - 30);
  drawEyes(zoogX, zoogY - 30);
  drawBody(zoogX, zoogY + 25);
  drawLegs(zoogX, zoogY + 50);
}
void drawHead(float x, float y) {
  // Head
  fill(255);
  ellipse(x, y, 60, 60);
}

void drawEyes(float x, float y) {
  // Eyes
  eyeR = random(255);
  eyeG = random(255);
  eyeB = random(255);
  fill(eyeR, eyeG, eyeB);
  ellipse(x - 15, y, 16, 32);
  ellipse(x + 15, y, 16, 32);
}

void drawBody(float x, float y){
  // Body
  stroke(0);
  fill(150);
  rect(x, y, 20, 50);
}

void drawLegs(float x, float y) {
  // Legs
  stroke(0);
  line(x - 10, y, x - 20, y + 20);
  line(x + 10, y, x + 20, y + 20);
}
