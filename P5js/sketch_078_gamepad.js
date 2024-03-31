let limit = 40;
let size = 20;
let padding = 40;
// let gap = size / 5;
let gap = 0;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
};

var updatedSize = size;
var updateR = 0;
var interactive = true;

let img;
function preload() {
  img = loadImage("./sources/p.png");
}

let boxs = [];
function setup() {
  frameRate(4);
  let [width, height] = Paper.A3;
  createCanvas(width, height);
  // noLoop();
  img.loadPixels();
  rows = (height - 2 * padding) / (size + gap);
  cols = (width - 2 * padding) / (size + gap);
  rectMode(CENTER);

  for (i = 0; i < rows; i++) {
    let y = i * (size + gap) + padding + size / 2;
    let iy = parseInt(map(y, 0, height, 0, img.height));
    for (j = 0; j < cols; j++) {
      let x = j * (size + gap) + padding + size / 2;
      let ix = parseInt(map(x, 0, width, 0, img.width));
      let color = convolution(ix, iy, 2, img);
      let level = brightness(color);

      let box = {
        index: random([1, 2, 3]),
        x: x,
        y: y,
        level: round(map(level, 0, 100, size, 4), 2),
        color: color,
      };
      boxs.push(box);
    }
  }
}
let strokeSize = size / 3;
function draw() {
  background(255);
  if (interactive) updateGamePad();

  if (GP.DP_UP && size < limit) size += 5;
  if (GP.DP_DOWN && size > 5) size -= 5;
  if (GP.X&& strokeSize < limit- 2) strokeSize += 2;
  if (GP.Y && strokeSize > 2) strokeSize -= 2;

  boxs.forEach((box) => {
    if(GP.A) box.index = random([1,2,3])
    push();
    translate(box.x, box.y);
    // updateR = GP.LR ? GP.LR : updateR;
    // rotate(updateR);

    getShape(box);
    pop();
  });
}

function getShape(box) {
  let color = box.color;
  let i = box.index;
  if (i == 3) {
    noStroke();
    fill(color);

    rect(0, 0, strokeSize, size);
    rect(0, 0, size, strokeSize);
  } else {
    noFill();
    strokeCap(SQUARE);
    stroke(color);
    strokeWeight(strokeSize);

    if (i == 1) {
      arc(-size / 2, -size / 2, size, size, 0, HALF_PI);

      arc(size / 2, size / 2, size, size, PI, PI + HALF_PI);
    }
    if (i == 2) {
      arc(size / 2, -size / 2, size, size, HALF_PI, PI);
      arc(-size / 2, size / 2, size, size, -HALF_PI, 0);
    }
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
  saveCanvas("final", "png");
}
