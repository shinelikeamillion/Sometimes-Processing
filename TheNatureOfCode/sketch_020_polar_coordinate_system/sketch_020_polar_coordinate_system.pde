float r = 75;
float theta = 0;

void setup(){
  size(200, 200);
  smooth();
  background(255);
  noLoop();
}

void draw(){
  
  stroke(0);
  fill(255);
  while(theta<TWO_PI){
    float x = r * cos(theta);
    float y = r * sin(theta);
    line(width/2, height/2, x+width/2, y+height/2);
    ellipse(x+width/2, y+height/2, 16, 16);
    theta += 0.3;
  }
}
