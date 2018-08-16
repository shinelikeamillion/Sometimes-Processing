Particle p;
void setup() {
  size(200, 200);
  p = new Particle(new PVector(width/2, 10));
  smooth();
}

void draw() {
  background(255);
  p.run();
  if(p.isDead()) {
    println("Particle dead!");
    stop();
  }
}
