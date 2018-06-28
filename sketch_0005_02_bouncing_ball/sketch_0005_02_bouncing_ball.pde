void setup(){
  size(800, 600);
  background(255);
}

int radius = 20;
float x = radius;
float y = radius;
float k;
int speed = 5;
float speedX;
float speedY;
void draw() {
  
  ellipse(x, y, 2*radius , 2*radius);
  
  k = (mouseX - x) / (mouseY - y);
  speedX= (float)Math.sqrt(Math.pow(speed, 2)/(float)(1 + Math.pow(k, 2)));
  speedX = (mouseX - x) > 0 ? speedX : -speedX;
  speedY = speedX * k;
  
  x = x + speedX;
  y = y + speedY;
  
  isTouchedGround();
}

void isTouchedGround() {
  
  if (x < radius ) {
    x = radius;
    speedX = -speedX;
  }
  if ( x > width-radius ) {
    x = width-radius;
    speedX = -speedX;
  }
  if ( y < radius ) {
    y = radius;
    speedY = -speedY;
  }
  if ( y > height-radius ) {
    y = height-radius;
    speedY = -speedY;
  }
}
