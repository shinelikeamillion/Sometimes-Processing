// implement : https://www.zhihu.com/question/47842081/answer/108015475
// in my own way
Mosaic mosaic;

void setup(){
  size(800, 600);
  mosaic = new Mosaic ("lou.jpg", 7, 2);  
  
  background(255);
  smooth(8);
  colorMode(RGB);
  noLoop();
}

void draw(){
  translate(width/2, height/2);
  for(Point point : mosaic.points) {
    point.x = point.x - mosaic.mosaicSize[0]/2;
    point.y = point.y - mosaic.mosaicSize[1]/2;
    mosaic.drawHex(point);
  }
}
void mousePressed(){
 save("lou"+mouseX+".png");
}
