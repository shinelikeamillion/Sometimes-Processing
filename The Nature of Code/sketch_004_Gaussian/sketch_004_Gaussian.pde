import java.util.Random;
Random generator;

void setup() {
  size(800, 600);
  background(255);
  ellipseMode(CENTER);
  generator = new Random();
}

void draw () {
  float numX = (float)generator.nextGaussian();
  float numY = (float)generator.nextGaussian();
  
  float sd = 60;
  float x = sd * numX + width/2;
  float y = sd * numY + height/2;
  
  noStroke();
  float xl = (float)Math.pow(Math.abs(sd * numX), 2);
  float yl = (float)Math.pow(Math.abs(sd * numY), 2);
  float l = (float)Math.sqrt(xl + yl);
  initRGB((int)l, 200);
  fill(r, g, b);
  ellipse(x, y, 10, 10);
}

void mousePressed () {
  save(getClass().getSimpleName()+".png");
}

int i=0;         
float r=0;
float g=0;
float b=0;

void initRGB(int i, int sd) {
  if(i<sd/3){
    r=255;
    g=(float)Math.ceil(255*3*i/sd);
    b=0;
  }else if(i<sd/2){
      r=(float)Math.ceil(750-i*(250*6/sd));
      g=255;
      b=0;
  }else if(i<sd*2/3){
      r=0;
      g=255;
      b=(float)Math.ceil(i*(250*6/sd)-750);
  }else if(i<sd*5/6){
      r=0;
      g=(float)Math.ceil(1250-i*(250*6/sd));
      b=255;
  }else{
      r=(float)Math.ceil(150*i*(6/sd)-750);
      g=0;
      b=255;
  }
}
