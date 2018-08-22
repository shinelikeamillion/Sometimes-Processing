void setup(){
  size(800, 200);
}

void draw(){
  background(255);
  float period = 120;
  float amplitude = width/2 - 10;
  float x = cos(TWO_PI * frameCount / period)*amplitude + width/2;
  ellipse(x, height/2, 16, 16);
  line(width/2, height/2, x, height/2);
}
