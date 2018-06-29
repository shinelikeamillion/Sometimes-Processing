Walker walker;
void setup() {
  size(400, 400);
  background(220);
  stroke(0);
  strokeWeight(2);
  walker = new Walker(width/2, height/2);
}

void draw() {
  walker.step();
  if(walker.x < width)
  walker.display();
}

class Walker {
  int x, y;
  Walker(int x, int y) {
    this.x = x;
    this.y = y;
  }
    
  void display() {
    point(x, y);
  }
  void step(){
    float choice = random(0, 1);
    float cc = (mouseX - x)/(mouseY - y);
    if (choice < 0.5) {
      x = (mouseX > x) ? x+1 : x-1;
      y = (mouseY > y) ? y+1 : y-1;
    } else {
    }
  }
}
