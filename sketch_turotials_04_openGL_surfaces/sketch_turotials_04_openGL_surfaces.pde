PGraphics cube;
void setup() {
  size(200, 200, P3D);
  cube = createGraphics(width, height, P3D);
}

void drawCube() {
  cube.beginDraw();
  cube.lights();
  cube.background(0);
  cube.noStroke();
  cube.translate(width/2, height/2);
  cube.rotateX(frameCount/100.0);
  cube.rotateY(frameCount/200.0);
  cube.box(40);
  cube.endDraw();
}

void draw () {
  background(0);
  drawCube();
  image(cube, 0, 0);
}
