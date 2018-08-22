import java.util.Iterator;
class ParticleSystem {
  ArrayList<Particle> particles;
  PVector origin;
  
  ParticleSystem() {
    particles = new ArrayList<Particle>();
    origin = new PVector(100, 100);
  }
  
  void addParticle () {
    particles.add(new Particle(origin));
  }
  
  void applyForce(PVector force) {
    for(Particle p : particles) {
      p.applyForce(force);
    }
  }
  
  void applyRepeller(Repeller r) {
    for(Particle p : particles) {
      p.applyForce(r.repel(p));
    }
  }
  
  void run() {
    Iterator<Particle> it = particles.iterator();
      while(it.hasNext()) {
        Particle p = it.next();
        p.run();
        if(p.isDead()) {
          it.remove();
        }
      }
  }
  
  void setOrigin() {
    origin.set(mouseX, mouseY);
  }
}
