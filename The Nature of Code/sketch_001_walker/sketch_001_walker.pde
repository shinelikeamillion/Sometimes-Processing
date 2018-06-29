class Walker {
  int x, y;
  Walker(int x, int y) {
    this.x = x;
    this.y = y;
  }
    
  void display() {
        stroke(0);
        point(x, y);
  }
  void step(){
        int choice = (int)random(4);
        if (choice == 0) {
          x++;
        } else if (choice ==1) {
          x--;
        } else if (choice ==2) {
          y++;
        } else {
          y--;
        }
  }
}

Walker walker;
void setup() {
  size(400, 400);
  background(220);
  walker = new Walker(width/2, height/2);
}

void draw() {
  walker.step();
  walker.display();
}
