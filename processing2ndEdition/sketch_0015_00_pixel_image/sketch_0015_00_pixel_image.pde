PImage image;
void setup () {
  size(800, 600);
  image = loadImage("3.gif");
}

void draw() {
  loadPixels();
  image.loadPixels();
  for(int y = 0; y < height; y++){
    for(int x = 0; x < width; x++) {
      int loc = x + y*width;
      //int imageLoc = (int)map(x, 0, width, 0, image.width) + (int)map(y, 0, height, 0, image.height)*image.width;
      int imageLoc = x % image.width + (y % image.height)*image.width;
      float r = red(image.pixels[imageLoc]);
      float g = green(image.pixels[imageLoc]);
      float b = blue(image.pixels[imageLoc]);
      pixels[loc] = color(r, g, b);
    }
  }
  updatePixels();
}
  
