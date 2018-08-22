float startAngle = 0;
void setup(){
  size(800, 200);
  smooth();
}
void draw(){
  
  background(255);
  stroke(0);
  noFill();
  
  drawWave(0.2);
  drawWave(0.5);
  
  startAngle += 0.01;
}

void drawWave(float angleVel){
  float angle = startAngle;
  beginShape();
  for(int x = 0; x <= width; x += 5){
    float y = map(sin(angle), -1, 1, 0, height);
    vertex(x,y);
    ellipse(x, y, 20, 20);
    angle += angleVel;
  }
  endShape(); 
}
