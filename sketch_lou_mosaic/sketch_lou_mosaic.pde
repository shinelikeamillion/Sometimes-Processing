// implement : https://www.zhihu.com/question/47842081/answer/108015475
// in my own way
PImage img;
float Rmax = 60;
float gap = 2;

float hexDis = Rmax * cos(PI/6);
float distanceX = (2*hexDis+gap)*cos(PI/6);
float distanceY = (2*hexDis+gap)*sin(PI/6);

float cols, rows;

void settings(){
  img = loadImage("lou.jpg");
  size(img.width, img.height);
  
  cols = width/distanceX;
  rows = height/(2*hexDis+gap);
}

void setup(){
  background(255);
  img.loadPixels();
  smooth(8);
  colorMode(RGB);
  
  println(cols+"=="+rows);
  for(int xi = 0; xi <= cols; xi++) {
    for(int yi = 0; yi <= rows; yi++) {
      float x = xi*distanceX;
      float y = xi % 2 == 0 ? 2*yi*distanceY : (yi+0.5)*distanceY;
      
      float loc = x + y * img.width;
      loc = constrain(loc,0,img.pixels.length-1);
      color c = color(red(img.pixels[(int)loc]), green(img.pixels[(int)loc]), blue(img.pixels[(int)loc]));
      
      //if(brightness(c) < 255)
      println(x+"----"+y+";");
      drawHex(x, y, Rmax, c);
    }
  }
  noLoop();
}

void drawHex(float x, float y, float r, color c) {
  stroke(0);
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

void draw(){}
void mousePressed(){}
