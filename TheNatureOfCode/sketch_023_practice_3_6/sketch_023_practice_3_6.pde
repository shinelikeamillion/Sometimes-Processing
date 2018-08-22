float amplitude;
void setup(){
  size(200, 600);
  amplitude = height - 10;
}

void draw(){
  background(255);
  float period = 120;
  float y = map(cos(TWO_PI * frameCount / period), -1, 1, 10, amplitude);
  ellipse(width/2, y, 16, 16);
  line(width/2, 0, width/2, y);
  amplitude = constrain(amplitude-1, 10, height);
}
