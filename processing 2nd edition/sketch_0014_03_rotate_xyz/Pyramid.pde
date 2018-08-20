class Pyramid {
  
  int t;
  Pyramid(int t) {
   stroke(0);
   this.t = t;
  }
  
  void draw() {
     // this pyramid has 4 sides, each drawn as a separate triangle
     // each side has 3 vertices, making up a triangle shape
     // the parameter " t " determines the size of the pyramid
     beginShape(TRIANGLES);
   
     fill(255, 150); // Note that each polygon can have its own color.
     vertex(-t, -t, -t);
     vertex( t, -t, -t);
     vertex( 0, 0, t);
   
     fill(150, 150);
     vertex( t, -t, -t);
     vertex( t, t, -t);
     vertex( 0, 0, t);
    
     fill(255, 150);
     vertex( t, t, -t);
     vertex(-t, t, -t);
     vertex( 0, 0, t);
    
     fill(150, 150);
     vertex(-t, t, -t);
     vertex(-t, -t, -t);
     vertex( 0, 0, t);
    
     endShape(); 
  }
}
