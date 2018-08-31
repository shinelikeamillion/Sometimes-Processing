CA ca;
void setup() {
  size(1000, 600);
  ca = new CA();
  background(0);
}

void draw() {
  if(frameCount % 8 == 0) mousePressed();
  ca.show();
}
  
void mousePressed() {
  ca.generate();
  if(ca.generation * ca.size > height) {
    ca.generation = 0;
    ca.ruleset = new int[]{1, 1, 0, 1, 1, 0, 1, 0};
    clear();
    redraw();
  }
}
