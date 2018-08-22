void setup() {
  size(800, 600);
  background(255);
}

void draw(){
  stroke(0);
  if(mousePressed)
  line(pmouseX, pmouseY, mouseX, mouseY);
}

void mousePressed() {
  println("mousePressed");
}
void keyPressed(){
  background(255);
}
