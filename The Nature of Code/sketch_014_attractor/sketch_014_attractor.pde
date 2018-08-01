Mover m;
Attractor a;

void setup() {
  size(800, 600);
  m = new Mover(random(width), random(height));
  a = new Attractor();
}

void draw() {
  background(0);
  
  PVector f = a.attract(m);
  m.applyForce(f);
  
  a.display();
  m.move();
}
