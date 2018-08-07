void setup(){
  size(800, 200);
}

void draw(){
  background(255);
  float period = 120;
  float amplitude = width/2 - 10;
  float x = cos(TWO_PI * frameCount / period)*amplitude;
  ellipse(x+width/2, height/2, 16, 16);
  line(width/2, height/2, x+width/2, height/2);
}
