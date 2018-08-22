Mover[] movers;
Attractor a;

void setup() {
  size(800, 600);
  noStroke();
  movers = new Mover[10];
  a = new Attractor();
  
  for(int i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(width), random(height));
    movers[i].setRadius(random(10, 30));
  }
}

void draw() {
  background(0);
  
  a.display();
  
  for (Mover m : movers) {
    for (Mover m1 : movers) {
      if(m != m1) m.applyForce(m.attract(m1));
    }
    m.applyForce(a.attract(m));
    m.move();
  }
}
