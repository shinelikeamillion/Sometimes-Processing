Planet sun, earth, moon, rock;
void setup() {
  size(800, 600);
  
  sun = new Planet(width/2, height/2, 60, 0, color(255, 200, 50));
  earth = new Planet(width/2 + 150, height/2, 20, 1, color(50, 200, 255));
  moon = new Planet(width/2 + 200, height/2, 10, -4, color(50, 255, 200));
  rock = new Planet(width/2 + 180, height/2, 4, 1, color(50, 255, 200));
}

void draw() {
  background(255);
  
  sun.display(sun.x, sun.y);
  translate(sun.x, sun.y);
  
  earth.fly(sun);
  moon.fly(earth);
  popMatrix();
  rock.fly(earth);
  popMatrix();
  popMatrix();
}
