
PVector location;
PVector velocity;
Mover mover;
void setup() {
  size(800, 600);
  smooth();
  
  location = new PVector(100, 100);
  velocity = new PVector(2.5, 5);
  mover = new Mover();
}

void draw() {
  background(255);
  location.add(velocity);
  
  if (dist(mover.location.x, mover.location.y, location.x, location.y) <= 23) {
    velocity.x += mover.velocity.x;
    velocity.y += mover.velocity.y;
  }
  
  if (velocity.x > 2.5) velocity.x -= 0.5;
  if (velocity.y > 5) velocity.y -= 0.5;
  
  if((location.x > width) ||
    (location.x < 0)) {
    velocity.x *= -1;
  }
  if((location.y > height) ||
    (location.y < 0)) {
    velocity.y *= -1;
  }
  
  stroke(0);
  fill(175);
  ellipse(location.x, location.y, 20, 20);
  mover.move();
}
