//void setup() {
//  size(800, 600);
//  background(255);
//  noStroke();
//}

//float step = 20;
//void draw() {
//  float xoff = 0.0;
//    for (int x = 0; x < width; x+=20) {
//      float yoff = 0.0;
//      for (int y = 0; y < height; y+=20) {
//        float rx = map(noise(xoff, yoff), 0, 1, 0, x);
//        float ry = map(noise(xoff, yoff), 0, 1, 0, y);
//        fill(0, 50);
//        rect(rx, ry, step, step);
//        yoff += 0.1;
//      }
//      xoff += 0.01;
//    }
//    stop();
//}
