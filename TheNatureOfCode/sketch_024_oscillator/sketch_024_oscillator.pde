Oscillator oscillator;
void setup() {
  size(800, 600);
  oscillator = new Oscillator();
}
void draw(){
  //background(175);
  oscillator.oscillate();
}
