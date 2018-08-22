PFont f;
String typing = "";
String saved = "";
int paddingLeft;
void setup () {
  size(800, 600);
  f = createFont("Arial", 16);
  
  textFont(f);
  fill(0);
  paddingLeft = 25;
}

void draw() {
  background(255);
  text("Click in this window and type. \nHint enter to save. ", paddingLeft, 40);
  text("Input: " + typing, paddingLeft, 190);
  text("Saved text: " + saved, paddingLeft, 230);
}

void keyPressed () {
  if (key == '\n') {
    saved = typing;
    typing = "";
  } else {
    typing = typing + key;
  }
}
