var c1;
var c2;

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 100)

  c1 = color(random(100), 100, 100)
  c2 = color(random(100), 100, 30)
  
  for(var y = 0; y < windowHeight; y++) {
    var n = map(y, 0, windowHeight, 0, 1)
    var newc = lerpColor(c1, c2, n)
    stroke(newc)
    line(0, y, width, y)
  }
}

function draw() {
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}