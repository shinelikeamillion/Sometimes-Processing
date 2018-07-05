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

  // since we are loking at left neighobrs
  // we skip the first column
  for (int x = 1; x < width; x++ ) {
    for (int y = 0; y < height; y++ ) {

      // Pixel location and color
      int loc = x + y*img.width;
      color pix = img.pixels[loc];
      
      // Pixel to the left location and color
      int leftLoc = (x - 1) + y*img.width;
      color leftPix = img.pixels[leftLoc];
      
      float diff = abs(brightness(pix) - brightness(leftPix));
      destination.pixels[loc] = color(diff);
    }
  }
  destination.updatePixels();
  image(destination, 0, 0);
}
