PImage img;
PImage destination;
float threshold = 120;

void setup() {
  size(1024, 576);
  img = loadImage("shoes.jpg");
  destination = createImage(img.width, img.height, RGB);
}

void draw() {
  img.loadPixels();
  destination.loadPixels();
  
  threshold = map(mouseX, 0, width, 0, 255);

  for (int x = 0; x < img.width; x++ ) {
    for (int y = 0; y < img.height; y++ ) {

      int loc = x + y*img.width;
      if(brightness(img.pixels[loc]) > threshold) {
        destination.pixels[loc] = color(255);
      } else {
        destination.pixels[loc] = color(0);
      }
    }
  }
  destination.updatePixels();
  image(destination, 0, 0);
}
