
/**
 * inspire : https://twitter.com/transformvtion/status/1058898945588543488
 * Focus on the center of the image
 * and allow yout eyes to relax
 * 2 spirals will become 3, then 3 will become 1.
 * Hold focus on the 1 spiral as long as possible.
 */
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(255)
  noFill()
  smooth();
  var maxSize = 200;
  var halfWidth = windowWidth/2;
  var space = maxSize/4;
  for(var i = 10; i < maxSize; i+=10) {
    ellipse(halfWidth - space, height/2, i, i)
    ellipse(halfWidth + space, height/2, i, i)
  }
}

function draw() {
}
