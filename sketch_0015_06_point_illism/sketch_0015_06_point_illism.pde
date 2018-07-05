PImage img;
float pointillize = 8;
float yy;
void setup() {
  size(140, 151);
  noStroke();
  img = loadImage("miao.png");
  
  yy = width / pointillize;
}

void draw() {
  img.loadPixels();
  
  int x = int(random(width));
  int y = int(random(height));
  
  int loc = x + y*img.width;
  color c = color(red(img.pixels[loc]), green(img.pixels[loc]), blue(img.pixels[loc]));
  
  fill(c);
  ellipse(x, y, pointillize, pointillize);
}
