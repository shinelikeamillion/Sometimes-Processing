int[][] result;
float t, c;

float ease(float p) {
  return 3*p*p - 2*p*p*p;
}

float ease(float p, float g) {
  if (p < 0.5) 
    return 0.5 * pow(2*p, g);
  else
    return 1 - 0.5 * pow(2*(1 - p), g);
}

float mn = .5*sqrt(3), ia = atan(sqrt(.5));

void push() {
  pushMatrix();
  pushStyle();
}

void pop() {
  popStyle();
  popMatrix();
}

void draw() {

  if (!recording) {
    t = mouseX*1.0/width;
    c = mouseY*1.0/height;
    if (mousePressed)
      println(c);
    draw_();
  } else {
    for (int i=0; i<width*height; i++)
      for (int a=0; a<3; a++)
        result[i][a] = 0;

    c = 0;
    for (int sa=0; sa<samplesPerFrame; sa++) {
      t = map(frameCount-1 + sa*shutterAngle/samplesPerFrame, 0, numFrames, 0, 1);
      draw_();
      loadPixels();
      for (int i=0; i<pixels.length; i++) {
        result[i][0] += pixels[i] >> 16 & 0xff;
        result[i][1] += pixels[i] >> 8 & 0xff;
        result[i][2] += pixels[i] & 0xff;
      }
    }

    loadPixels();
    for (int i=0; i<pixels.length; i++)
      pixels[i] = 0xff << 24 | 
        int(result[i][0]*1.0/samplesPerFrame) << 16 | 
        int(result[i][1]*1.0/samplesPerFrame) << 8 | 
        int(result[i][2]*1.0/samplesPerFrame);
    updatePixels();

    saveFrame("f###.gif");
    if (frameCount==numFrames)
      exit();
  }
}

//////////////////////////////////////////////////////////////////////////////

int samplesPerFrame = 4;
int numFrames = 160;        
float shutterAngle = .5;

boolean recording = false;

void setup() {
  size(600, 600, P2D);
  smooth(8);
  result = new int[width*height][3];
  rectMode(CENTER);
  fill(250);
  stroke(32);
  strokeWeight(10);
}

float x, y, z, tt;
int N = 12;

void discs(){
  tt = constrain(3*t-1, 0, 1);
  push();
  scale(.8);
  rotate(HALF_PI);
  for (int i=0; i<N; i++) {
    if (i%2 == 0) {
      push();
      rotate(TWO_PI*(i+2*ease(tt, 4.75))/N);
      ellipse(100, 0, 120, 120);
      pop();
    } else {
      x = map(cos(TWO_PI*t), 1, -1, 0, 1);
      x = 100 + 140*ease(x, 7);
      push();
      rotate(TWO_PI*(i-2*ease(tt, 4.75))/N);
      if (t>.5)
        rotate(4*TWO_PI/N);
      ellipse(x, 0, 120, 120);
      pop();
    }
  }
  pop();
}

void draw_() {
  background(250); 
  push();
  translate(width/2, height/2);
  discs();
  loadPixels();
  for(int i=0; i<pixels.length/2; i++)
    pixels[pixels.length-i-1] = pixels[i];
  updatePixels();
  pop();
}