ParticleSystem ps;
Repeller repeller;
void setup() {
  size(600, 600);
  smooth();
  ps = new ParticleSystem();
  repeller = new Repeller(width/2, height/2);
  rectMode(CENTER);
}

void draw() {
  background(255);
  
  PVector gravity = new PVector(0, 0.1);
  ps.applyForce(gravity);
  ps.applyRepeller(repeller);
  
  ps.addParticle();
  ps.run();
  
  repeller.display();
  
  if(mousePressed) ps.setOrigin();
}
