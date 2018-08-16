ParticleSystem ps;
void setup() {
  size(600, 600);
  smooth();
  ps = new ParticleSystem();
}

void draw() {
  background(255);
  ps.addParticle();
  ps.run();
}
