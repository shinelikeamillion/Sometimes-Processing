let size = 12;
let s = size / 3;
let padding = 40;
let gap = size / 5;
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
  img = loadImage("./sources/lou.jpg");
}

let boxs = [];
function setup() {
  frameRate(4);
  updateR = -PI / 4;
  let [width, height] = Paper.A3;
  createCanvas(width, height);
  noStroke();
  fill(0);
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

      let box = {
        x: x,
        y: y,
        level: convolution(ix, iy, 2, img),
      };
      boxs.push(box);
    }
  }
}
let change1 = 0;
let change2 = 0;
function draw() {
  background(255);
  if (interactive) {
    updateGamePad();
    change1 += (GP.DP_RIGHT ? 2 : 0) + (GP.DP_LEFT ? -2 : 0);
    change2 += (GP.DP_UP ? 2 : 0) + (GP.DP_DOWN ? -2 : 0);

    updateR = GP.LR ? GP.LR : updateR;
  } else {
    noLoop();
  }
  boxs.forEach((box) => {
    push();
    translate(box.x, box.y);
    rotate(updateR);
    fill(box.level);
    a2();
    // if (box.level > 90) {
    //   a();
    // } else if (box.level > 50) {
    //   if (box.level > 80) {
    //     rect(0, 0, (size * 4) / 9, (size * 4) / 9);
    //   } else if (box.level > 60) {
    //     rect(0, 0, (size * 5) / 9, (size * 5) / 9);
    //   } else {
    //     a1();
    //   }
    // } else if (box.level > 30) {
    //   a2();
    // } else {
    //   a3();
    // }
    pop();
  });
}

a = (_) => {
  rect(0, 0, s, s);
};

a1 = (_) => {
  rect(0, 0, size / 2, size / 2);
};

a2 = (_) => {
  rect(-s, -s, s, s);
  rect(s, s, s, s);
  rect(0 + change1, 0 + change2, s, s);
  rect(-s, s, s, s);
  rect(s, -s, s, s);
};

a3 = (_) => {
  rect(0, 0, size, size);
};

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
  // saveCanvas(cavs, 'final', 'jpg')
}
