Particle[] ps = new Particle[10];
void setup() {
  size(200, 200);
  for(int i = 0; i < 10; i++) {
    ps[i] = new Particle(new PVector(100, 100));
  }
  smooth();
}

void draw() {
  background(255);
  for(Particle p : ps) {
    p.run();
    if(p.isDead()) {
      println("Particle dead!");
      stop();
    }
  }
}

void mousePressed() {
  //p.applyForce(new PVector(0.05, 0.05));
}
