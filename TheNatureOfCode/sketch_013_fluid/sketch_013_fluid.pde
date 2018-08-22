
Mover[] movers;
Fluid fluid;
PVector gravity = new PVector(0, 0.1);
PVector wind = new PVector(0.01, 0);
void setup() {
  size(800, 600);
  background(255);
  ellipseMode(CENTER);
  noStroke();
  fill(0);
  smooth();
  
  fluid = new Fluid(width/2, height/2, 200, 200);
  
  movers = new Mover[10];
  for(int i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(width), random(height));
    movers[i].setRadius(random(10, 20));
  }
}


void draw() {
  background(255);
  
  fluid.display();
  
  for (Mover mover : movers) {
    
    mover.applyForce(gravity);
    mover.applyForce(wind);
    if(fluid.isInsided(mover)) {
      mover.addDrag(fluid);
    } else {
      mover.addFriction(0.01);
    }
    mover.move();
  }
}
