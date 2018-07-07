PFont f;
String[] singleNotes = {"A","B","C","D","E","F","G"};
int savedTime = 0;
int totalTime = 2000;
String note;

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
    note = singleNotes[(int)random(singleNotes.length)];
    savedTime = millis();
  }
  text(note, width/2, height/2);
}
