PGraphics pg;

float thetaR = 0.0;
float thetaC = 0.0;
float r;
float px;
float py;
float stopX, stopY;
void setup() {
  size(800, 600);
  r = height/2;
  px = r/2;
  py = 0;
  stopX = px;
  stopY = py;
  smooth();
  
  pg = createGraphics(800, 600);
}

void draw() {
  background(255);
  stroke(0);
  noFill();
  pushMatrix();
  translate(width/2, height/2);
  ellipse(0, 0, r, r);
  
  thetaR = thetaR+0.1 % TWO_PI;
  thetaC = thetaC-0.16 % TWO_PI;
  
  float xR = r*cos(thetaR)/2;
  float yR = r*sin(thetaR)/2;
  
  float xC = r*cos(thetaC)/2;
  float yC = r*sin(thetaC)/2;
  
  line(xR, -height/2, xR, height/2);
  line(-width/2, yC, width/2, yC);
  
  fill(0);
  ellipse(xR, yR, 8, 8);
  fill(255);
  ellipse(xC, yC, 8, 8);
  
  noStroke();
  fill(color(255, 0, 0));
  ellipse(xR, yC, 5, 5);
  popMatrix();
  
  pg.beginDraw();
  pg.stroke(color(255, 0, 0));
  pg.translate(width/2, height/2);
  pg.line(px, py, xR, yC);
  px = xR;
  py = yC;
  //pg.fill(color(255, 0, 0));
  //pg.ellipse(xR, yC, 2, 2);
  pg.endDraw();
  
  image(pg, 0, 0);
}

void mousePressed() {
  stop();
}
