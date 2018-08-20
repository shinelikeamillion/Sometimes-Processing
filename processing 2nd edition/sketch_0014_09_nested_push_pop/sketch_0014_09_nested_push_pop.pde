float theta = 0;
int lineIn = 36;
int lineOut = 0;

void setup() {
  size(800, 600);
  stroke(255);
  strokeWeight(2);
}

void draw() {
  
  background(0);
  
  translate(width/2, height/2);
  
  if (mouseX > 50) lineOut = width / mouseX;
  
  for(float i = 0; i < lineIn; i++) {
    pushMatrix();
    rotate(theta + i*(TWO_PI/lineIn));
    line(0, 0, 100, 0);
    
    for(float j = 0; j < lineOut; j++) {
      pushMatrix();
      translate(100, 0);
      rotate(-theta - j*(TWO_PI/lineOut));
      line(0, 0, 50, 0);
      popMatrix();
    }
    popMatrix();
  }
  
  theta += 0.01;
}

void mousePressed(){
  stop();
}
