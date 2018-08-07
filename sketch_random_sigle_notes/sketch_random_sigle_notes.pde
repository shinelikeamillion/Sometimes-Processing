PFont f;
String[] singleNotes = {"A","B","C","D","E","F","G"};
int[] indexs= {6,7,1,2,3,4,5};
int savedTime = 0;
int totalTime = 2000;
int index;

void setup() {
  size(800, 600);
  f = createFont("Arial", height/2);
  textFont(f);
  textAlign(CENTER, CENTER);
  fill(0);
  frameRate(1);
}

void draw() {
  background(255);
  
  
  if(millis() - savedTime > totalTime) {
    index = (int)random(singleNotes.length);
    savedTime = millis();
  }
  textFont(f, height/2);
  text(singleNotes[index], width/2, height/2);
  textFont(f, height/5);
  text(indexs[index], width - 250, height/2+100);
}
