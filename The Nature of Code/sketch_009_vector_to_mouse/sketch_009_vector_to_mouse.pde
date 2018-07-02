
Mover[] movers = new Mover[50];
void setup() {
  size(800, 600);
  background(255);
  ellipseMode(CENTER);
  noStroke();
  fill(0);
  smooth();
  
  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover();
  }
}

void draw() {
  background(255);
  
  for(Mover mover : movers) {
    mover.move();
  }
}
