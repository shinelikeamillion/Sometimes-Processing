// author : https://www.zhihu.com/question/47842081/answer/108015475
PImage img;
float Rmax = 10;
float gap = 2;

float hexDis = Rmax * sin(PI/6);
float distanceX = (2*hexDis+gap)*sin(PI/12);
float distanceY = (2*hexDis+gap)*cos(PI/6);

float cols, rows;

void settings(){
  img = loadImage("lou.jpg");
  size(img.width, img.height);
  
  cols = width/distanceX;
  rows = height/distanceY;
}

void setup(){
  background(255);
  img.loadPixels();
  smooth(8);
  colorMode(RGB);
  
  for(int i = 0; i < cols; i++) {
    for(int j = 0; j < rows; j++) {
      float x = i*distanceX;
      //float y = i % 2 == 0 ? i*distanceY : (i-1)*distanceY;
      float y = j*distanceY;
      
      float loc = x + y * img.width;
      loc = constrain(loc,0,img.pixels.length-1);
      color c = color(red(img.pixels[(int)loc]), green(img.pixels[(int)loc]), blue(img.pixels[(int)loc]));
      
      if(brightness(c) < 255)
      drawHex(x, y, Rmax, c);
    }
  }
}

void drawHex(float x, float y, float r, color c) {
  noStroke();
  fill(c);
  pushMatrix();
  translate(x, y);
  ellipse(x, y, r, r);
  //beginShape();
  //vertex(r,0);
  //vertex(r*cos(PI/3), r*sin(PI/3));
  //vertex(r*cos(PI/3*2), r*sin(PI/3*2));
  //vertex(r*cos(PI), r*sin(PI));
  //vertex(r*cos(PI/3*4),r*sin(PI/3*4));
  //vertex(r*cos(PI/3*5),r*sin(PI/3*5));
  //endShape(CLOSE);
  popMatrix();
}

void draw(){}
void mousePressed(){}

class Point {
  float x;
  float y;
  color c;
  Point(float x, float y, color c) {
    this.x = x;
    this.y = y;
    this.c = c;
  }
}
