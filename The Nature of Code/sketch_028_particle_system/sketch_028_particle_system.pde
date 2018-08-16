ArrayList<Particle> ps = new ArrayList();
void setup() {
  size(200, 200);
  for(int i = 0; i < 10; i++) {
  }
  smooth();
}

void draw() {
  ps.add(new Particle(new PVector(100, 100)));
  background(255);
  for(int i = ps.size()-1; i >= 0; i--) {
    Particle p = ps.get(i);
    p.run();
    if(p.isDead()) {
      println("Particle is dead!");
      ps.remove(p);
    }
  }
}
