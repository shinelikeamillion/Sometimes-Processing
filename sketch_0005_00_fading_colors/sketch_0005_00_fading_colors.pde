float r = 150;
float g = 0;
float b = 0;

void setup(){
  size(800, 600);
}

void draw() {
  background(r, g, b);
  stroke(255);
  line(width/2, 0, width/2, height);
  
  if(mouseX > width/2) {
    r++;
  } else {
    r--;
  }
  // Constrain all color values to betweent 0 and 255
  constrain(r, 0, 255);
}
