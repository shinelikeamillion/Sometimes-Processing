
void setup() {
  size(800, 600);
  noLoop();
  strokeWeight(2);
}

void draw() {
  drawLine(new PVector(width/2, height/2 + 300), new PVector(width/2, height/2+100));
}

void drawLine(PVector start, PVector end) {
  PVector v = PVector.sub(end, start).mult(2/3.0);
  if(v.mag() < 4) return;
  line(start.x, start.y, end.x, end.y);
  
  PVector branchL = end.copy().add(v.copy().rotate(-radians(45)));
  PVector branchR = end.copy().add(v.copy().rotate(radians(45)));
  drawLine(end, branchL);
  drawLine(end, branchR);
}
