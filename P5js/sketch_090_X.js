let limit = 40;
let size = 20;
let padding = 40;
let gap = size;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
  Ins: [794, 992],
};

var updatedSize = size;
var updateR = 0;
var interactive = true;

let img;
let samplesPerFrame = 1;
let numFrames = 20;
function preload() {
  img = loadImage("./sources/2.png");
}

let boxs = [];

let picked = [];
var t = 0;
function setup() {
  // frameRate(10);
  let [width, height] = Paper.A3;
  createCanvas(width, height, WEBGL);
  // noLoop();
  img.loadPixels();
  rows = parseInt((height - 2 * padding) / (size + gap));
  cols = parseInt((width - 2 * padding) / (size + gap));
  rectMode(CENTER);
  noStroke()

  for (i = 0; i < rows; i++) {
    let y = i * (size + gap) + padding + size / 2;
    let iy = parseInt(map(y, 0, height, 0, img.height));
    for (j = 0; j < cols; j++) {
      let x = j * (size + gap) + padding + size / 2;
      let ix = parseInt(map(x, 0, width, 0, img.width));
      let c = convolution(ix, iy, 2, img);
      let level = brightness(c);

      let box = {
        x: x - width / 2,
        y: y - height / 2,
        // c:c,
        level: map(level, 0, 100, 4, size+10),
      };
      boxs.push(box);
    }
  }
}
let strokeSize = size / 3;
function draw() {
  background(0);

  t = map((frameCount - 1) / samplesPerFrame, 0, numFrames, 0, 1);
  boxs.forEach((box) => {
    push();
    translate(box.x, box.y);
    rect(0, 0, 3, box.level);
    rect(0, 0, box.level, 3);
      push();
      translate(size, size);
      rotate(PI/4)
      rect(0, 0, 3, box.level);
      rect(0, 0, box.level, 3);
      pop();
    pop();
  });
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
