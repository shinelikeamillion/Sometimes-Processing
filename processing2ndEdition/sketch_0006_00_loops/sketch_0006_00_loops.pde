int x = 0;
int y;
int spacing = 10;
int len = 100;
int endLegs;

void setup() {
  size(800, 600);
  stroke(255);
  y = height/2 - 50;
  endLegs = width/2;
}

void draw() {
  
  background(0);
  x = 0;
  
  spacing = constrain(mouseX/2, 10, endLegs);
  
  while(x <= endLegs) {
    line(x, y, x, y+len);
    x += spacing;
  }
}

// this example has some problem, can you find where?
// http://learningprocessing.com/examples/chp06/example-06-05-infiniteloop2
