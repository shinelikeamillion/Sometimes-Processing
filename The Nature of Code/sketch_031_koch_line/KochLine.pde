class KochLine {
  PVector start;
  PVector end;
  PVector base;
  PVector b, c, d;
  
  KochLine(PVector start, PVector end) {
    this.start = start.copy();
    this.end = end.copy();
    
    base= PVector.sub(end, start).div(3);
    b = start.copy().add(base.copy());
    c = b.copy().add(base.copy().rotate(-radians(60)));
    d = b.copy().add(base.copy());
  }
  
  void display() {
    stroke(0);
    line(start.x, start.y, end.x, end.y);
  }
}
