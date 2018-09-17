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

void pop(){
  popStyle();
  popMatrix();
}

void draw() {
  
  if(!recording){
    t = mouseX*1.0/width;
    c = mouseY*1.0/height;
    if(mousePressed)
        println(c);
    draw_();
  }
  
  else {
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

int samplesPerFrame = 8;
int numFrames = 400;        
float shutterAngle = .5;

boolean recording = false;

void setup() {
  size(720,720,P3D);
  smooth(8);
  ortho();
  result = new int[width*height][3];
}

float x, y, z, tt;
float r = 220, l;
int N = 35;

void draw_() {
  background(18); 
  push();
  translate(width/2,height/2);
  push();
  rotateX(HALF_PI*(int(4*t) + ease((4*t)%1,6))); 
  strokeWeight(3);
  for(int i=0; i<N; i++){
    stroke(lerpColor(#12C7FC,#002D68,i/float(N-1)));
    y = map(i,-.2,N-.8,-r,r);
    l = 2*sqrt(r*r - y*y);
    push();
    rotateY(i>N/2 ? acos(.5*l/r) : -acos(.5*l/r) );
    line(-r,y,r,y);
    pop();
  }
  pop();
  strokeWeight(1.75);
  stroke(250);
  noFill();
  ellipse(0,0,2*r+15,2*r+15);
  pop();
}