Bob bob;
Spring spring;
void setup() {
  size(200, 400);
  bob = new Bob();
  spring = new Spring(100, 0.1);
}

void draw(){
  background(255);
  
  spring.connect(bob);
  spring.display();
  spring.displayLine(bob);
  
  bob.update();
  bob.display();
  
  bob.drag();
}

void mousePressed(){
  bob.clicked();
}

void mouseReleased(){
  bob.stopDragging();
}
