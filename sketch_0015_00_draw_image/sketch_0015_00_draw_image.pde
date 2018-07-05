PImage image;
void setup () {
  size(800, 600);
  image = loadImage("3.gif");
}

void draw() {
  image(image, 0, 0);
}
  
