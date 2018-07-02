void setup() {
  size(800, 600);
}

void draw() {
  loadPixels();
  float xoff = 0.0;
  for (int x = 0; x < width; x++) {
    float yoff = 0.0;
    for (int y = 0; y < height; y++) {
      float bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      // add second paramter 10 to color will be fun
      pixels[x+y*width] = color(bright);
      yoff += 0.01;
    }
    xoff += 0.01;
  }
  updatePixels();
}
      
