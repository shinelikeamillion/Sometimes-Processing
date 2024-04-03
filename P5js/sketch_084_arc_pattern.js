let limit = 40;
let size = 40;
let padding = 40;
let gap = 10;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
  Ins: [794, 992],
};

var updatedSize = size;
var updateR = 0;
var interactive = true;

function setup() {
  frameRate(4);
  let [width, height] = Paper.A3;
  createCanvas(width, height);
  noLoop();
  rows = parseInt((height - 2 * padding) / (size + gap));
  cols = parseInt((width - 2 * padding) / (size + gap));
  rectMode(CENTER);
  noFill();
}

function draw() {
  for (i = 0; i < rows; i++) {
    let y = i * (size + gap) + padding + size / 2;
    for (j = 0; j < cols; j++) {
      let x = j * (size + gap) + padding + size / 2;
      push();
      translate(x, y);
      // rect (0,0, size,size)
      let a = size / 2;
      arc(-a, -a, size, size, 0, HALF_PI);
      arc(a, -a, size, size, HALF_PI, PI);
      arc(a, a, size, size, -PI, -HALF_PI);
      arc(-a, a, size, size, -HALF_PI, 0);

      push();
      let step = a + gap / 2;
      translate(step, step);
      arc(-a, -a, size, size, 0, HALF_PI);
      arc(a, -a, size, size, HALF_PI, PI);
      arc(a, a, size, size, -PI, -HALF_PI);
      arc(-a, a, size, size, -HALF_PI, 0);
      pop();

      pop();
    }
  }
}

function getShape(box) {
  let i = box.index;

  // rect(0, 0, size, size)
  noFill();
  if (i == 1) {
    // line(0, -size / 2, size / 2, 0);
    // line(-size / 2, -size / 2, size / 2, size / 2);
    // line(-size / 2, 0, 0, size / 2);

    arc(0, 0, size, size, HALF_PI, PI);
    arc(0, 0, size, size, -HALF_PI, 0);
  } else {
    // line(-size / 2, 0, 0, -size / 2);
    // line(-size / 2, size / 2, size / 2, -size / 2);
    // line(0, size / 2, size / 2, 0);

    arc(0, 0, size, size, 0, HALF_PI);
    arc(0, 0, size, size, PI, PI + HALF_PI);
  }
}

function getColor(x, y, img) {
  let index = (x + y * img.width) * 4;
  return color(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2]);
}

function convolution(x, y, matrixsize, img) {
  var rtotal = 0.0;
  var gtotal = 0.0;
  var btotal = 0.0;
  var offset = matrixsize / 2;
  // Loop through convolution matrix
  for (var i = 0; i < matrixsize; i++) {
    for (var j = 0; j < matrixsize; j++) {
      // What pixel are we testing
      var xloc = x + i - offset;
      var yloc = y + j - offset;
      var loc = (xloc + yloc * img.width) * 4;
      // Make sure we have not walked off the edge of the pixel array
      loc = constrain(loc, 0, img.pixels.length - 1);
      // Calculate the convolution
      // We sum all the neighboring pixels multiplied by the values in the convolution matrix.
      rtotal += img.pixels[loc] / pow(matrixsize, 2);
      gtotal += img.pixels[loc + 1] / pow(matrixsize, 2);
      btotal += img.pixels[loc + 2] / pow(matrixsize, 2);
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  // Return the resulting color

  return color(rtotal, gtotal, btotal);
}

function mousePressed() {
  noLoop();
  // platMode = !platMode;
  // redraw();
  // saveCanvas("final", "png");
}
