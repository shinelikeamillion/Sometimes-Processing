// Day 1
// lilSean
// geeks.liu@gmail.com


void setup () {
  size(800, 600);
  background(255);
}

void draw () {
  drawZoag();
}

// Stroke fill
void drawRect () {
  stroke(0);
  fill(150);
  rect(50, 50, 75, 100);
}

// No Fill
void  drawEllipse(){
  noFill(); // leaves the shape with only a outline
  stroke(0);
  ellipse(60, 60, 100, 100);
}

// Rgb Color
void drawRGBCircle () {
  noStroke();
  
  fill(255, 0, 0);
  ellipse(20, 20, 16, 16);
  
  fill(127, 0, 0);
  ellipse(40, 20, 16, 16);
  
  fill(255, 200, 200);
  ellipse(60, 20, 16, 16);
}

// Alpha
void deawAlpha() {
  noStroke();
  
  fill(0, 0, 255); // no fourth argument OR 255 means 100% opacity.
  rect(0, 0, 240, 240);
  
  fill(225, 0, 0, 191); // 75% opacity.
  rect(0, 50, 480, 40);
}

// Zoag
void  drawZoag() {
  ellipseMode(CENTER);
  rectMode(CENTER);
  
  noFill();
  ellipse(240, 100, 60, 60);
  
  fill(0);
  ellipse(221, 100, 16, 32);
  ellipse(259, 100, 16, 32);
  
  stroke(0);
  fill(150);
  rect(240, 155, 20, 50);
  
  stroke(0);
  line(230, 180, 220, 200);
  line(250, 180, 260, 200);
}
