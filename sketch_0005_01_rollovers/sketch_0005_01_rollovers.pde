void setup() {
  size(800, 600);
}

void draw() {
  background(255);
  stroke(0);
  line(0, height/2, width, height/2);
  line(width/2, 0, width/2, height);
  
  noStroke();
  fill(0);
  
  if(mouseX < width/2 && mouseY < height/2) {
    rect(0, 0, width/2, height/2);
  } else if (mouseX > width/2 && mouseY < height/2) {
    rect(width/2, 0, width, height/2);
  } else if (mouseX > width/2 && mouseY > height/2) {
    rect(width/2, height/2, width, height);
  } else {
    rect(0, height/2, width/2, height);
  }
 }
