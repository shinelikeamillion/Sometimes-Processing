
Mover mover;
void setup() {
  size(800, 600);
  background(255);
  ellipseMode(CENTER);
  noStroke();
  fill(0);
  smooth();
  
  PVector floatForce = new PVector(0, -1);
  mover = new Mover(width/2, height);
  mover.applyForce(floatForce);
}

float seed = 0.01;
void draw() {
  background(255);
  
  if(mousePressed) {
    seed+=0.01;
    PVector wind = new PVector(map(noise(seed), 0, 1, -0.05, 0.05), 0);
    mover.applyForce(wind);
  }
  mover.move();
}
