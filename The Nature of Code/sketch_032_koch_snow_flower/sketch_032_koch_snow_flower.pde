ArrayList<KochLine> lines;
void setup() {
  size(800, 300);
  lines = new ArrayList<KochLine>();
  
  PVector start = new PVector(0, 250);
  PVector end = new PVector(width, 250);
  
  lines.add(new KochLine(start, end));
}

void draw() {
  background(255);
  for(KochLine line : lines) {
    line.display();
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
