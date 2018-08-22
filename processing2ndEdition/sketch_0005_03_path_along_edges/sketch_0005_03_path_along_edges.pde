int x = 0;
int y = 0;
final int redius = 20;
int speed = 5;
void setup() {
  size(800, 600);
  noStroke();
  fill(0);
}

void draw() {
  background(255);
  rect(x, y, redius, redius);
  
  if(x < width - redius && y == 0) {
    x += speed;
    if (x > (width - redius))
    x = width - redius;
  } else if (y < height - redius && x == width - redius) {
    y += speed;
    if (y > height - redius)
    y = height - redius;
  } else if (x > 0) {
    x -= speed;
    if (x < 0)
    x = 0;
  } else if (y > 0 && x == 0){
    y -= speed;
    if (y < speed)
    y = 0;
  }
}



/** Dan's solution

// Example 5-8: Square following edge, uses a �state� variable

int x = 0;  // x location of square
int y = 0;  // y location of square

int speed = 5;  // speed of square

// A variable to keep track of the square�s "state."  
// Depending on the value of its state, it will either move right, down, left, or up.
int state = 0;  

void setup() {
  size(480, 270);
}

void draw() {
  background(255);

  // Display the square
  stroke(0);
  fill(175);
  rect(x,y,9,9);

  // If the state is 0, move to the right.
  if (state == 0) {
    x = x + speed;
    // If, while the state is 0, it reaches the right side of the window, change the state to 1
    // Repeat this same logic for all states!?
    if (x > width-10) {
      x = width-10;
      state = 1;
    }
  } else if (state == 1) {
    y = y + speed;
    if (y > height-10) {
      y = height-10;
      state = 2;
    }
  } else if (state == 2) {
    x = x - speed;
    if (x < 0) {
      x = 0;
      state = 3;
    }
  } else if (state == 3) {
    y = y - speed;
    if (y < 0) {
      y = 0;
      state=0;
    }
  }
}
*/
