class Mover {
  
  PVector location;
  PVector velocity;
  PVector acceleration;
  int topspeed = 10;
  float mass = 1.0;
  float radius = 13;
  
  float normal = 1;
  
  Mover(float w, float h) {
    location = new PVector(w, h);
    acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
    velocity.limit(topspeed);
  }
  
  void setRadius(float radius) {
    this.radius = radius;
    mass = radius/10;
  }
  
  void addFriction (float u) {
    PVector friction = velocity.copy().normalize();
    friction.mult(-1);
    friction.mult(u*normal);
    applyForce(friction);
  }
  
  void move() {
    
    velocity.add(acceleration);
    location.add(velocity);
    checkEdges();
    acceleration.mult(0);
    display();
  }
  
  void applyForce(PVector force) {
    // get() will not to change force this function deprecate
    //PVector f = force.get();
    //f.div(mass);
    
    acceleration.add(PVector.div(force, mass));
  }
  
  void display() {
    ellipse(location.x, location.y, 2*radius, 2*radius);
  }
  
  void checkEdges() {
    if (location.x > width - radius) {
      location.x = width - radius;
      velocity.x *= -1;
    } else if (location.x < radius) {
      location.x = radius;
      velocity.x *= -1;
    }
    if (location.y > height - radius) {
      location.y = height - radius;
      velocity.y *= -1;
    } else if (location.y < radius) {
      location.y = radius;
      velocity.y *= -1;
    }
  }
}
