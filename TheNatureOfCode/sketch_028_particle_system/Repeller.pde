class Repeller {
  PVector location;
  float r = 10;
  float strength = 500;
  
  Repeller(float x, float y) {
    location = new PVector(x, y);
  }
  
  void display() {
    fill(0);
    ellipse(location.x, location.y, r*2, r*2);
  }
  
  PVector repel(Particle p) {
    PVector dir = PVector.sub(location, p.location);
    float d = dir.mag();
    d = constrain(d, 5, 100);
    dir.normalize();
    float force = -1 * strength / (d*d);
    dir.mult(force);
    return dir;
  }
}
