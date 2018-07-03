import java.awt.event.KeyEvent;
float rotateX;
float rotateY;
float rotateZ;

int KEY_CODE;
void setup() {
  size(480, 240, P3D);
}

void draw() {
  background(255);
  stroke(0);
  fill(175);
  translate(width/2, height/2);
  
  if(KEY_CODE == KeyEvent.VK_X){
    //rotateX = map(mouseY, 0, height, 0, TWO_PI);
    rotateX = map(mouseX, 0, width, 0, TWO_PI);
  }
  if(KEY_CODE == KeyEvent.VK_Y){
    rotateY = map(mouseX, 0, width, 0, TWO_PI);
  }
  if(KEY_CODE == KeyEvent.VK_Z){
    rotateZ = map(mouseX, 0, width, 0, TWO_PI);
  }
  rotateX(rotateX);
  rotateY(rotateY);
  rotateZ(rotateZ);
  rectMode(CENTER);
  rect(0, 0, 200, 150);
}

void keyPressed(){
  KEY_CODE = keyCode;
}
