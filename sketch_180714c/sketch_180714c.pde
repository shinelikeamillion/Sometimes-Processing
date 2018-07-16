void setup () {
  size(800, 600, P3D);
  
  noLoop();
}

void draw() {

  translate(width/2, height/2);
  
  line(0, 0, 0, 0, 0, 100);
  line(0, 0, 0, 0, 100, 0);
  line(0, 0, 0, 100, 0, 0);  
}
