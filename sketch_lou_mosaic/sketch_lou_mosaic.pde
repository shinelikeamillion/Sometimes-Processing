// implement : https://www.zhihu.com/question/47842081/answer/108015475
// in my own way
PImage img;
float Rmax = 5;
float gap = 2;

float hexDis = Rmax * cos(PI/6);
float distanceX = int(2*hexDis+gap)*cos(PI/6);
float distanceY = (2*hexDis+gap)*sin(PI/6);

float cols, rows;

void settings(){
  img = loadImage("lou.jpg");
  size(img.width, img.height);
  
  cols = width/distanceX;
  rows = height/(2*distanceY);
}

void setup(){
  background(255);
  img.loadPixels();
  smooth(8);
  colorMode(RGB);
  
  println(cols+"=="+rows);
  for(int xi = 0; xi <= cols; xi++) {
    for(int yi = 0; yi <= rows; yi++) {
      int x = int(xi*distanceX);
      int y = int(xi % 2 == 0 ? 2*yi*distanceY : (2*yi+1)*distanceY);
      
      int loc = x + y * img.width;
      loc = constrain(loc,0,img.pixels.length-1);
      color c = color(red(img.pixels[loc]), green(img.pixels[loc]), blue(img.pixels[loc]));
      
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
  beginShape();
  for(int i = 0; i < 6; i++) {
    float theta = i*(TWO_PI/6);
    vertex(r*cos(theta), r*sin(theta));
  }
  endShape(CLOSE);
  popMatrix();
}

void draw(){}
void mousePressed(){
 save("lou"+mouseX+".png");
}
