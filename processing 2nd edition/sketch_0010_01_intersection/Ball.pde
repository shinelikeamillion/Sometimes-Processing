class Ball {

  float r; // radius
  float x, y;
  float xspeed, yspeed;
  int alpha = 50;
  color c = color(100, 50);

  // Constructor
  Ball(float x, float y) {
    r = random(1, width/10);
    this.x = x;
    this.y = y;
    xspeed = random( -5, 5);
    yspeed = random( -5, 5);
  }

  void move() {
    x += xspeed; // Increment x
    y += yspeed; // Increment y

    // Check horizontal edges
    if (x > width || x < 0) {
      xspeed *= - 1;
    }

    // Check vertical edges
    if (y > height || y < 0) {
      yspeed *= - 1;
    }
  }
  
  void highLight() { 
    c = color(0, alpha+30);
  }

  void display() {
    stroke(0);
    fill(c);
    ellipse(x, y, r*2, r*2);
    c = color(100, 50);
  }
  
  boolean intersect(Ball ball) {
    // calculate distance
    float distance = dist(x, y, ball.x, ball.y);
    
    return (distance < (r + ball.r));
  }
}
