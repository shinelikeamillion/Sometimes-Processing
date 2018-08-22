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
        if (choice < 0.3) {
          x++;
        } else if (choice < 0.6) {
          y++;
        } else if (choice < 0.8) {
          x--;
        } else {
          y--;
        }
  }
}
