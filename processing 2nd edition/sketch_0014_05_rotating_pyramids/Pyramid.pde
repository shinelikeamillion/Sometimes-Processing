class Pyramid{
 float t;
 color[] colors = new color[]{#e60035,#10FF00,#00FFEC,#0006FF, #FF0000};
 
 Pyramid(float t) {
   this.t = t;
 }
 
 void draw(){
   
   beginShape(TRIANGLES);
   
   //fill(colors[0], 150);
   vertex(-t, -t, -t);
   vertex(t, -t, -t);
   vertex(0, 0, t);
   
   //fill(colors[1], 150);
   vertex(t, -t, -t);
   vertex(t, t, -t);
   vertex(0, 0, t);
   
   //fill(colors[2], 150);
   vertex(t, t, -t);
   vertex(-t, t, -t);
   vertex(0, 0, t);
   
   //fill(colors[3], 150);
   vertex(-t, t, -t);
   vertex(-t, -t, -t);
   vertex(0, 0, t);
   
   endShape();
   
   // bottom
   //beginShape();
   //fill(colors[4], 150);
   //vertex(-t, -t, -t);
   //vertex(t, -t, -t);
   //vertex(t, t, -t);
   //vertex(-t, t, -t);
   //endShape(CLOSE);
   
 }
}
