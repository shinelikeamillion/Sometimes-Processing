
/**
 * inspire : https://twitter.com/transformvtion/status/1058898945588543488
 * Focus on the center of the image
 * and allow yout eyes to relax
 * 2 spirals will become 3, then 3 will become 1.
 * Hold focus on the 1 spiral as long as possible.
 */
var cFrom;
var cTo;
var halfWidth;
var space;
var maxSize = 200;
var off = 0;
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  noFill()
  smooth();
  // strokeWeight(2);

  colorMode(HSB, 100);

  cFrom = color(random(100), 67, 53);
  cTo = color(random(100), 133, 244);
  halfWidth = windowWidth / 2;
  space = maxSize / 4;
}

function draw() {

  for (var i = 10; i < maxSize; i += 10) {
    var c = map(cos(map(i, 10, 190, -TWO_PI, 0) - off), -1, 1, 0, 1);
    stroke(lerpColor(cFrom, cTo, c));
    ellipse(halfWidth - space, height / 2, i, i);
    ellipse(halfWidth + space, height / 2, i, i);
  }
  off += 0.02;
}
