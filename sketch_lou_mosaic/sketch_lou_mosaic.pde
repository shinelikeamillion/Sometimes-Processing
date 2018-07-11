// implement : https://www.zhihu.com/question/47842081/answer/108015475
// in my own way
PImage img;
int Rmax = 7;
int gap = 2;

float hexDis = Rmax * cos(PI/6);
int distanceX = int((2*hexDis+gap)*cos(PI/6));
int distanceY = int((2*hexDis+gap)*sin(PI/6));

int cols, rows;
float scale;
float[] mosaicSize = new float[2];

void settings(){
  img = loadImage("lou.jpg");
  size(1000, 600);
  
  if(img.width > img.height){
    scale = (float)img.width/width;
    mosaicSize[0] = width;
    mosaicSize[1] = img.height/scale;
  } else {
    scale = (float)img.height/height;
    mosaicSize[0] = img.width/scale;
    mosaicSize[1] = height;
  }
  
  cols = int(mosaicSize[0]/distanceX);
  rows = int(mosaicSize[1]/(2*distanceY));
}

void setup(){
  background(255);
  img.loadPixels();
  smooth(8);
  colorMode(RGB);
  
  translate(width/2, height/2);
  for(int xi = 0; xi <= cols; xi++) {
    for(int yi = 0; yi <= rows; yi++) {
      int x = int(xi*distanceX);
      int y = int(xi % 2 == 0 ? 2*yi*distanceY : (2*yi+1)*distanceY);
      
      int imgX = (int)map(x, 0, mosaicSize[0], 0, img.width);
      int imgY = (int)map(y, 0, mosaicSize[1], 0, img.height);
      
      color c = convolution(imgX, imgY, 3, img);
      float b = brightness(c);
      float r;
      if(b < 200) {
        r = Rmax;
      } else {
        r = map(b, 200, 255, Rmax, 0);
      }
      if (r > 1) drawHex(x - mosaicSize[0]/2, y - mosaicSize[1]/2, r, c);
    }
  }
  noLoop();
}

void drawHex(float x, float y, float r, color c) {
  noStroke();
  fill(c);
  pushMatrix();
  translate(x, y);
  beginShape();
  for(int i = 0; i < 6; i++) {
    float theta = i*(TWO_PI/6);
    vertex(r*cos(theta), r*sin(theta));
  }
  endShape(CLOSE);
  popMatrix();
}

color convolution (int x, int y, int matrixSize, PImage img) {
  float rtotal = 0;
  float gtotal = 0;
  float btotal = 0;
  
  int offset = matrixSize / 2;
  for(int i = 0; i < matrixSize; i++) {
    for(int j = 0; j < matrixSize; j++) {
      int xloc = x+i-offset;
      int yloc = y+j-offset;
      int loc = constrain(xloc + yloc * img.width, 0, img.pixels.length-1);
      
      rtotal += (red(img.pixels[loc]) / pow(matrixSize, 2));
      gtotal += (green(img.pixels[loc]) / pow(matrixSize, 2));
      btotal += (blue(img.pixels[loc]) / pow(matrixSize, 2));
    }
  }
  
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  
  return color(rtotal, gtotal, btotal);
}

void draw(){}
void mousePressed(){
 save("lou"+mouseX+".png");
}
