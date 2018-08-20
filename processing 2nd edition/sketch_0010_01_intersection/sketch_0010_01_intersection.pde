Ball[] balls; 

void setup() {
  size(800, 600);

  // Initialize balls
  balls = new Ball[] {new Ball(width/2, 0)};
}

void draw() {
  background(255);
 
 for(int i = 0; i < balls.length; i++) { //<>//
   balls[i].move();
    for(int j = i+1; j < balls.length; j++) {  //<>//
      if (balls[i].intersect(balls[j])){
        balls[i].highLight();
        balls[j].highLight();
      }
    }
    
    balls[i].display();
 }
}

void mousePressed () {
  Ball ball = new Ball(mouseX, mouseY);
  balls = (Ball[])append(balls, ball);
}
