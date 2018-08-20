
Pyramid[] pyramids;
float thetaX = 0.0;
float thetaY = 0.0;
float thetaZ = 0.0;
void setup() {
  size(800, 600, P3D);
  stroke(0);
  noFill();
  smooth();
  
  pyramids = new Pyramid[5];
  
  for(int i = 0; i < pyramids.length; i++) {
   pyramids[i] = new Pyramid(i * 20); 
  }
}

void draw() {
  background(255);

  translate(width/2, height/2, 0);

  thetaX += 0.01;
  thetaY += 0.02;
  thetaZ += 0.01;

  rotateX(thetaX);
  rotateY(thetaY);
  rotateZ(thetaZ);
  
  for(Pyramid pyramid : pyramids) {
    pyramid.draw();
  }
}
