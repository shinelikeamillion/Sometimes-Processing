Pendulum pendulum;
void setup() {
  size(800, 600);
  smooth();
  
  pendulum= new Pendulum(200f, PI/2);
}

void draw() {
  background(175);
  pendulum.go();
}

void mousePressed(){
  pendulum.fresh();
}
