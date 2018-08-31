CA ca;
void setup() {
  size(1000, 600);
  ca = new CA();
}

void draw() {
  //background(255);
  ca.show();
}
  
void mousePressed() {
  ca.generate();
}
