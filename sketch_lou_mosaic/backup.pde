//// https://www.zhihu.com/question/47842081/answer/108015475
//// modified a little bit
//PImage img;
//float Rmax = 4;
//float gap = 1;

//float hexDis = Rmax;
//float distanceX = (2*hexDis+gap)*cos(PI/6);
//float distanceY = (2*hexDis+gap)*sin(PI/6);

//float cols, rows;

//void settings(){
//  img = loadImage("lou.jpg");
//  size(img.width, img.height);
  
//  cols = width/distanceX;
//  rows = height/(distanceY);
//}

//void setup(){
//  background(255);
//  img.loadPixels();
//  smooth(8);
//  colorMode(RGB);
  
//  println(cols+"=="+rows);
//  for(int xi = 0; xi <= cols; xi++) {
//    for(int yi = 0; yi <= rows; yi++) {
//      int x = int(xi*distanceX);
//      int y = int(yi*distanceY);
      
//      if (int(xi+yi)%2!=0){
//        color c = convolution(x, y, 3, img);
      
//        if(brightness(c) < 255)
//        drawHex(x, y, Rmax, c);
//      }
      
      
//    }
//  }
//}

//void drawHex(float x, float y, float r, color c) {
//  noStroke();
//  fill(c);
//  pushMatrix();
//  translate(x, y);
//  beginShape();
//  for(int i = 0; i < 6; i++) {
//    float theta = i*(TWO_PI/6);
//    vertex(r*cos(theta), r*sin(theta));
//  }
//  endShape(CLOSE);
//  popMatrix();
//}

//color convolution(int x, int y,  int matrixsize, PImage img) {
//  float rtotal = 0.0;
//  float gtotal = 0.0;
//  float btotal = 0.0;
//  int offset = matrixsize / 2;
//  // Loop through convolution matrix
//  for (int i = 0; i < matrixsize; i++){
//    for (int j= 0; j < matrixsize; j++){
//      // What pixel are we testing
//      int xloc = x+i-offset;
//      int yloc = y+j-offset;
//      int loc = xloc + img.width*yloc;
//      // Make sure we have not walked off the edge of the pixel array
//      loc = constrain(loc,0,img.pixels.length-1);
//      // Calculate the convolution
//      // We sum all the neighboring pixels multiplied by the values in the convolution matrix.
//      rtotal += (red(img.pixels[loc]) / pow(matrixsize,2));
//      gtotal += (green(img.pixels[loc]) / pow(matrixsize,2));
//      btotal += (blue(img.pixels[loc]) / pow(matrixsize,2));
//    }
//  }
//  // Make sure RGB is within range
//  rtotal = constrain(rtotal,0,255);
//  gtotal = constrain(gtotal,0,255);
//  btotal = constrain(btotal,0,255);
//  // Return the resulting color

//  return color(rtotal,gtotal,btotal);
//}

//void draw(){}
//void mousePressed(){
//  save("lou"+mouseX+".png");
//}
