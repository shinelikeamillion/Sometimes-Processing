PFont f;
String message = "click mouse to free them";
Letter[] letters;

void setup() {
  size(800, 600);
  
  f = createFont("Arial", 40);
  textFont(f);
  
  letters = new Letter[message.length()];
  int x = (int)(width - textWidth(message))/2;
  
  for(int i = 0; i < message.length(); i++) {
    letters[i] = new Letter(x, height/2, message.charAt(i));
    x += textWidth(message.charAt(i));
  }
}

void draw() {
  background(255);
  
  for (Letter letter : letters) {
    letter.display();
    
    if(mousePressed) {
      letter.shake();
    } else {
      letter.goHome();
    }
  }
}
