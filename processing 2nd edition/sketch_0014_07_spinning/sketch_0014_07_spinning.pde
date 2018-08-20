
Spinner[] spinners;
void setup() {
  size(800, 600);
  spinners = new Spinner[20];
  
  for (int i = 0; i < spinners.length; i++) {
    int radius = (int)random(5, 25);
    spinners[i] = new Spinner((int)random(radius, width - radius), (int)random(radius, height - radius), radius);
    spinners[i].setSpeed(random(-0.1, 0.1));
  }
}

void draw() {
  background(255);
  
  for(Spinner spinner : spinners) {
    spinner.spin();
  }
}
