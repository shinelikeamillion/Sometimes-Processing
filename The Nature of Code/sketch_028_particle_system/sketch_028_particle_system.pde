ParticleSystem ps;
void setup() {
  size(600, 600);
  smooth();
  ps = new ParticleSystem();
  rectMode(CENTER);
}

void draw() {
  background(255);
  
  PVector gravity = new PVector(0, 0.1);
  ps.applyForce(gravity);
  
  ps.addParticle();
  ps.run();
  
  if(mousePressed) ps.setOrigin();
}
