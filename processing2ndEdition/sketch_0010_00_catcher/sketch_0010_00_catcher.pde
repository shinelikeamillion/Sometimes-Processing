
Catcher catcher;

void setup () {
  size(800, 600);
  catcher = new Catcher(20);
}

void draw() {
  background(255);
  catcher.setLocation(mouseX, mouseY);
  catcher.display();
}
