
Mover mover= new Mover();
void setup() {
  size(800, 600);
  background(255);
  ellipseMode(CENTER);
  noStroke();
  fill(0);
  smooth();
  
  PVector gravity = new PVector(0, 0.5);
  mover.applyForce(gravity);
}

void draw() {
  background(255);
  
  if(mousePressed) {
    PVector wind = new PVector(0.5, 0);
    mover.applyForce(wind);
   }
  mover.move();
}
