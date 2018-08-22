Ball[] balls = new Ball[1];
float gravity = 0.1;

void setup() {
  size(800, 600);
  balls[0] = new Ball( 400, 0);
}

void draw() {
  background(255);
  
  for(int i = 0; i < balls.length; i++) {
    balls[i].gravity();
    balls[i].move();
    balls[i].display();
  }
}

void mousePressed() {
  Ball ball = new Ball(mouseX, mouseY);
  balls = (Ball[])append(balls, ball);
}

class Ball {
  float x;
  float y;
  float speed;
  float radius = 20;
  
  Ball(float tempX, float tempY) {
    x = tempX;
    y = tempY;
    speed = 0;
  }
  
  void gravity() {
    speed = speed + gravity;
  }
  
  void move () {
    y = y + speed;
    
    if (y > height) {
      speed = -0.95 * speed;
      y = height;
    }
  }
  
  void display () {
    fill(175);
    stroke(0);
    ellipse(x, y, radius, radius);
  }
}
