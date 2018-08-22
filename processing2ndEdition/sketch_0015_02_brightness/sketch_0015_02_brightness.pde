PImage img;

void setup() {
  size(1024, 576);
  img = loadImage("shoes.jpg");
}

void draw() {
  loadPixels();
  img.loadPixels();

  for (int x = 0; x < img.width; x++ ) {
    for (int y = 0; y < img.height; y++ ) {

      int loc = x + y*img.width;

      float r = red  (img.pixels[loc]);
      float g = green(img.pixels[loc]);
      float b = blue (img.pixels[loc]);
      
      //float adjustBrightness = map(mouseX, 0, width, 0, 8);
     
      float distance = dist(x, y, mouseX, mouseY);
      float adjustBrightness = map(distance, 0, 100, 7, 0);
      
      r = constrain(r * adjustBrightness, 0, 255); 
      g = constrain(g * adjustBrightness, 0, 255);
      b = constrain(b * adjustBrightness, 0, 255);

      color c = color(r, g, b);
      pixels[loc] = c;
    }
  }

  updatePixels();
}
