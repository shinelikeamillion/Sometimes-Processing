let n = 1000;
let points = [];
let samplesPerFrame = 5;
let numFrames = 50;
let shutterAngle = 1.5;
setup = (_) => {
  createCanvas(500, 500, WEBGL);
  result = [width * height][3];

  for (var i = 0; i < n; i++) {
    points[i] = new Thing();
  }
};

let t = 0;
draw = (_) => {
  background(0);

  t = map(frameCount - 1 + shutterAngle / samplesPerFrame, 0, numFrames, 0, 1);
  points.forEach((p) => {
    p.show();
  });
};

class Thing {
  constructor() {
    this.x = random(-200, 200);
    this.y = random(-200, 200);
    this.r = random(2, 20);
    this.s = random(1, 2.5);
    this.offset = 9 * noise(0.02 * this.x, 0.02 * this.y);
  }

  show() {
    stroke(255);
    strokeWeight(this.s);
    // point(this.x, this.y)
    point(
      this.x + this.r * cos(TWO_PI * t + this.offset),
      this.y + this.r * sin(TWO_PI * t + this.offset)
    );
  }
}
