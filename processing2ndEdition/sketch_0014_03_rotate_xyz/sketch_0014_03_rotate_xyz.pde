
int mouse[];
Pyramid pyramid;
float thetaX = 0;
float handleX = 0;
float thetaY = 0;
float handleY = 0;

void setup() {
  size(800, 600, P3D);
  
  pyramid = new Pyramid(150);
}

void draw() {
  background(255);
  stroke(0);
  
  translate(width/2, height/2, 0);
  
  if(mousePressed) {
    if(mouseX != pmouseX) {
      thetaY = map(mouseX - mouse[0], -width, width, -PI, PI);
    }
    if(mouseY != pmouseY) {
      thetaX = map(-mouseY + mouse[1], -height, height, -PI, PI);
    }
  }
  rotateX(thetaX+handleX);
  rotateY(thetaY+handleY);
  
  pyramid.draw();
}

void mousePressed () {
  handleX = (handleX + thetaX) % TWO_PI;
  handleY = (handleY += thetaY) % TWO_PI;
  mouse = new int[] {mouseX, mouseY};
  thetaX = 0;
  thetaY = 0;
}
