class Letter {
  char letter;
  PVector home;
  PVector location;
  PVector v;
  
  Letter(float x_, float y_, char letter_) {
    home = new PVector(x_, y_);
    location = new PVector(x_, y_);
    letter = letter_;
  }
  
  void display() {
    fill(0);
    textAlign(LEFT);
    text(letter, location.x, location.y);
  }
  
  void shake() {
    v = new PVector (random(-4, 4), random(-4, 4));
    
    location.add(v);
  }
  
  void goHome() {
    PVector back = PVector.sub(location, home);
    if (back.mag() > 1) {
      v = back.copy().normalize().mult(random(-4, -1));
      location.add(v);
    } else {
      location = home.copy();
    }
  }
}
