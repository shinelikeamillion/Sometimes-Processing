import java.util.Iterator;
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
  Iterator<Particle> it = ps.iterator();
  while(it.hasNext()) {
    Particle p = it.next();
    p.run();
    if(p.isDead()) {
      println("Particle is dead!");
      it.remove();
    }
  }
}
