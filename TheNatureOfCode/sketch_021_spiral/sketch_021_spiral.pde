float r = 0;
float theta = 0;

void setup(){
  size(800, 200);
  smooth();
  background(255);
  noLoop();
}

void draw(){
  
  fill(0);
  float x = 0;
  float y = 0;
  while(x < 400){
    x = r * cos(theta);
    y = r * sin(theta);
    //line(width/2, height/2, x+width/2, y+height/2);
    ellipse(x+width/2, y+height/2, 16, 16);
    theta += 0.1;
    r += 0.5;
  }
}
