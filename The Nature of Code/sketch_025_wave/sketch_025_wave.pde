void setup(){
  size(800, 100);
  smooth();
}

float step = 0;
void draw(){
  
  background(255);
  stroke(0);
  strokeWeight(2);
  noFill();
  
  drawWave(0, 0.2);
  
  step += 0.1;
}

void drawWave(float angle, float angleVel){
  beginShape();
  for(int x = 0; x <= width; x += 5){
    float y = map(sin(angle+step), -1, 1, 0, height);
    vertex(x,y);
    angle += angleVel;
  }
  endShape(); 
}
