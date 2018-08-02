Mover[] movers;
Attractor a;

void setup() {
  size(800, 600);
  noStroke();
  movers = new Mover[10];
  a = new Attractor();
  
  for(int i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(width), random(height), random(0.1, 2));
    movers[i].setRadius(random(10, 20));
  }
}

void draw() {
  background(0);
  
  a.display();
  
  for (Mover m : movers) {
    m.applyForce(a.attract(m));
    m.move();
  }
}
