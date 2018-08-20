ArrayList<KochLine> lines;
void setup() {
  size(300, 300);
  lines = new ArrayList<KochLine>();
  
  PVector start = new PVector(-35, -70*cos(PI/6));
  PVector middle = new PVector(0, -70*cos(PI/6)*2);
  PVector end1 = new PVector(35, -70*cos(PI/6));
  
  lines.add(new KochLine(start, middle));
  lines.add(new KochLine(middle, end1));
}

void draw() {
  background(255);
  translate(width/2, height/2);
  for(int i = 0; i < 6; i++){
    pushMatrix();
    rotate(i * PI/3);
    for(KochLine line : lines) {
      line.display();
    }
    popMatrix();
  }
}

void generate() {
  ArrayList next = new ArrayList<KochLine>();
  
  for(KochLine line : lines) {
    if(line.base.mag() < 2) return;
    next.add(new KochLine(line.start, line.b));
    next.add(new KochLine(line.b, line.c));
    next.add(new KochLine(line.c, line.d));
    next.add(new KochLine(line.d, line.end));
  }
  lines = next;
}

void mousePressed() {
  generate();
}
