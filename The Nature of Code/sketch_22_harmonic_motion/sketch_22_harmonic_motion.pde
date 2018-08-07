float theta = 0;
void setup(){
  size(800, 200);
}

void draw(){
  float x = sin(theta)*width/2 + width/2;
  ellipse(x, height/2, 16, 16);
  theta = theta >= PI ? -PI : theta+0.02; 
}
