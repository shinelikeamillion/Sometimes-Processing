
PImage img;
int cellsize = 4;
int cols, rows; 
float thetaX = 0.0;
float thetaY = 0.0;

float maxBri;

void setup() {
  size(500, 500, P3D);
  img = loadImage("pig.jpg"); 
  cols = img.width/cellsize;
  rows = img.height/cellsize;
  
  img.loadPixels();
  maxBri = img.pixels[0];
}

void draw() {
  
  background(255);
  
  translate(width/2, height/2, 0);
  if(mouseX != 0 && mouseY != 0) {
    thetaX = map(mouseX - width/2, - width/2, width/2, HALF_PI, -HALF_PI);
    thetaY = map(mouseY - height/2, - height/2, height/2, -HALF_PI, HALF_PI);
    rotateY(thetaX);
    rotateX(thetaY);
  }

  for (int i = 0; i < cols; i++ ) {
    // Begin loop for rows
    for (int j = 0; j < rows; j++ ) {
      int x = i*cellsize + cellsize/2;
      int y = j*cellsize + cellsize/2;
      int loc = x + y*img.width;
      color c = img.pixels[loc];
      
      if(brightness(c) > maxBri) maxBri = brightness(c);
      
      float z = brightness(c) - maxBri;
      // Translate to the location, set fill and stroke, and draw the rect
      pushMatrix();
      translate(x, y, z); 
      fill(c);
      noStroke();
      rectMode(CENTER);
      rect(0 - img.width/2, 0 - img.height/2, cellsize, cellsize);
      popMatrix();
    }
  }
}

void mousePressed() {
  cellsize -= 2;
  cellsize = constrain(cellsize, 5, 40);
  setup();
}
