void setup () {
  size(800, 600);
  loadPixels();
}

void draw() {
  for(int x = 0; x < width; x++) {
    for(int y = 0; y < height; y++) {
      int loc = x + y*width;
      if(loc % 2 == 0) {
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();
}
