void setup() {
  // Set the size of the window
  size(480, 270);
  // Draw a white background
  background(255); 
}

// draw() loops continuously until you close the sketch window.
void draw() {  

  // Set CENTER mode
  ellipseMode(CENTER);
  rectMode(CENTER); 

  drawHead();
  drawEyes();
  drawBody();
  drawLegs();
  
  drawRectWithMouse();
}
void drawRectWithMouse() {

  // Body
  stroke(0);
  fill(175);
  rectMode(CENTER);
  rect(mouseX, mouseY, 50, 50);
}

void drawHead() {
  // Head
  fill(255);
  ellipse(240, 115, 60, 60);
}

void drawBody(){
  // Body
  stroke(0);
  fill(150);
  rect(240, 170, 20, 50);
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
