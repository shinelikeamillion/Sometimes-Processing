let n = 100;
let points = [];
let samplesPerFrame = 1;
let numFrames = 75;
let shutterAngle = 1;
setup = (_) => {
  createCanvas(500, 500, WEBGL);
  result = [width * height][3];
  // frameRate(10)
  // noLoop()

  for (var i = 0; i < n; i++) {
    theta = (TWO_PI * i) / n;
    points[i] = new Thing(theta, 150);
  }
};

var t = 0;
draw = (_) => {
  background(0);

  t = map(((frameCount - 1 + shutterAngle) / samplesPerFrame), 0, numFrames, 0, 1);
  // t = map((frameCount-1) % 100, 0, 100, 0 ,1)
  points.forEach((p) => {
    p.show();
  });
};

class Thing {
  constructor(theta, r) {
    this.theta = theta;
    this.s = random(1, 5);
    this.r = r
    this.offset = random(0, 0.6);
  }

  show() {
    stroke(255);
    // strokeWeight(random(1, 5));
    this.radius = this.r + 80 * sin((TWO_PI * t) + this.offset);
    this.x = round(this.radius * cos(this.theta), 1)
    this.y = round(this.radius * sin(this.theta), 1)
    let a = 20 * noise(0.02*this.radius , 0.02*this.radius );

    point(this.x+a, this.y);
  }
}
