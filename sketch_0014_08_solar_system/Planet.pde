class Planet {
  float x;
  float y;
  float speed;
  float radius;
  float theta = 0.0;
  color c;
  
  Planet (float x, float y, float radius, float speed, color c) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.c = c;
  }
  
  void display(float relactX, float relactY) {
    fill(c);
    ellipse(relactX, relactY, 2*radius, 2*radius);
  }
  
  void fly(Planet planet) {
    
    pushMatrix();
    rotate(speed * theta);
    translate(x - planet.x, y - planet.y);
    display(0, 0);
    
    theta += 0.01;
  }
}
