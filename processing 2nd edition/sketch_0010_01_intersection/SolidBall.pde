class SolidBall extends Ball{

  // Constructor
  SolidBall(float x, float y) {
    super(x, y);
  }
  
  // touched not inter
  @Override
  boolean intersect( Ball ball) {
    // calculate distance
    float distance = dist(x, y, ball.x, ball.y);
    if ((distance <= (r + ball.r))) {
      xspeed *= - 1;
      yspeed *= - 1;
      ball.xspeed *= - 1;
      ball.yspeed *= - 1;
      return true;
    } else {
      return false;
    }
  }
}
