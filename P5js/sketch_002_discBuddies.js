function setup() {
  createCanvas(600, 600);
  smooth(8);
  rectMode(CENTER);
  fill(250);
  stroke(32);
  strokeWeight(10);
}

function draw() {
  // t from 0 to 1
    t = mouseX*1.0/width;
    draw_();
}

function push() {
  pushMatrix();
  pushStyle();
}

function pop() {
  popStyle();
  popMatrix();
}

// p from 0 to 1, g = speed
function ease( p, g) {
  if (p < 0.5) 
    return 0.5 * pow(2*p, g);
  else
    return 1 - 0.5 * pow(2*(1 - p), g);
}

var x, y, z, tt;
var N = 12;

function discs(){
  tt = constrain(3*t-1, 0, 1);
  push();
  scale(.8);
  rotate(HALF_PI);
  for (var i=0; i<N; i++) {
    if (i%2 == 0) {
      push();
      // totate 0 to 60`
      rotate(TWO_PI*(i+2*ease(tt, 4.75))/N);
      ellipse(100, 0, 120, 120);
      pop();
    } else {
      x = map(cos(TWO_PI*t), 1, -1, 0, 1);
      x = 100 + 140*ease(x, 7);
      push();
      rotate(TWO_PI*(i-2*ease(tt, 4.75))/N);
      // in move 60` out move -60, t > .5 move 120`
      if (t>.5) rotate(4*TWO_PI/N);
      ellipse(x, 0, 120, 120);
      pop();
    }
  }
  pop();
}

function draw_() {
  background(250); 
  push();
  translate(width/2, height/2);
  discs();
  copyHalfCanves();
  pop();
}

function copyHalfCanves() {
  loadPixels();
  var d = pixelDensity();
  var halfImage = 4 * (width * d) * (height / 2 * d);
  for(var i=0; i<halfImage; i++){
    pixels[2*halfImage - 2 - i] = pixels[i];
  }
  updatePixels();
}