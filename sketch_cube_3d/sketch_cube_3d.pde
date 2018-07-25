void setup () {
  size(600, 600, P3D);
  smooth();
}

void draw() {
  translate(width/2, height/2, 0);
  background(255);
  noFill();
  //box(40);
  
  rotateX(mouseY*0.01);
  rotateY(mouseX*0.01);
  cube(30);
}

void cube(int r) {
  beginShape();
  vertex(-r, -r, -r); // left_top
  vertex(r, -r, -r); // right_top
  vertex(r, r, -r); // right_bottom
  vertex(-r, r, -r); // left_bottom
  
  //vertex(-r, -r, r);
  //vertex(r, -r, r);
  //vertex(r, r, r);
  //vertex(-r, r, r);
  
  vertex(-r, -r, -r);
  vertex(r, -r, -r);
  vertex(r, -r, r);
  vertex(-r, -r, r);
  
  vertex(r, r, -r);
  vertex(-r, r, -r);
  vertex(-r, r, r);
  vertex(r, r, r);
  
  //vertex(r, r, -r);
  //vertex(-r, r, -r);
  //vertex(r, r, r);
  //vertex(-r, r, r);
  
  //vertex(-r, r, -r);
  //vertex(-r, -r, -r);
  //vertex(-r, r, r);
  //vertex(-r, -r, r);
  endShape(CLOSE);
}
