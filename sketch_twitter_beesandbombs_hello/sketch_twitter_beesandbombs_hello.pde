
float handle = 0;
int lines = 9;
int max_size = 30;
int numberOfCircle = 0;
float startY;
int gap;
float offset = 0;
void setup() {
  size(900, 600);
  smooth();
  noFill();
  stroke(255);
  //noLoop();
  //frameRate(10);
  gap = max_size / 3;
  numberOfCircle = width/gap + 2;
  startY = (height - 9*max_size)/2;
}

void draw() {
  background(0);
  offset += 0.2;
  //println("--"+offset);
  offset = Math.round(offset*100) / 100f;
  println(offset);
  // for loop
  if(offset == gap) {
    offset = 0;
    handle += 0.25;
  } else {
    handle += 0.05;
  }
  
  for(int i = 0; i < lines; i++) {
    float theta = 0;
    for(int j = 0; j < numberOfCircle; j++) {
      float size = map(cos(theta+handle+(i % 2 == 0 ? 0 : PI)), 1, -1, 1, max_size);
      ellipse(gap*j - offset, startY+30*i-gap, size, size);
      theta += 0.25;
    }
  }
}
