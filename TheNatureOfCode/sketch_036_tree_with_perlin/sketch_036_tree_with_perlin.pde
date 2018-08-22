float theta;
float i;
void setup() {
  size(800, 600);
  theta = PI/6;
  strokeCap(SQUARE);
}

void draw() {
  background(255);
  i += 0.01;
  if(mouseX > 0) theta = map(mouseX, 0, width, 0, PI/2);
  translate(width/2, height);
  branch(240, 6);
}

void branch(float len, float strength) {
  if(len < 2) return;
  strokeWeight(strength);
  line(0, 0, 0, -len);
  translate(0, -len);
  
  len = map(noise(i), 0, 1, len*0.5, len*0.7);
  strength = constrain(strength*0.8, 1, 6);
  
  pushMatrix();
  rotate(-theta);
  branch(len, strength);
  popMatrix();
  
  pushMatrix();
  rotate(theta);
  branch(len, strength);
  popMatrix();
}
