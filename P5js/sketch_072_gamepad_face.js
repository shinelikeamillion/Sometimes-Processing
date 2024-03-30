let size = 12;
let padding = 40;
let gap = size / 5;
let platMode = false;
let iHight = 0;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
};

var updatedSize = size;
var updateR =0;

let img;
function preload() {
  img = loadImage("./sources/2.png");
}

let maxWidth = 0;
let boxs = [];
function setup() {
  updateR = -PI/4;
  let [width, height] = Paper.A3;
  createCanvas(width, height);
  // frameRate(4);
  // smooth(8);
  // noFill();
  noStroke();
  // stroke(color(255, 40, 100));
  fill(0);
  // noLoop(); // preload img or img will not show
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
      let level = brightness(getColor(ix, iy, img));

      iHight = parseInt(map(level, 0, 100, 10, 0));
      var a = {};
      a.x = x;
      a.y = y;
      a.height = iHight;
      boxs.push(a);
    }
  }
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(255);
  handleUpdate();
  boxs.forEach((box) => {
    push();
    translate(box.x, box.y);
    rotate(updateR);
    rect(0, 0, updatedSize+4, box.height < 2 ? 1 : box.height);
    pop();
  });
  // rect(0, 0, updatedSize, 30);
}

handleUpdate = (_) => {
  var gp = navigator.getGamepads()[0];
  if (gp) {
    // console.log(gp)
    let change = gp.axes[0]
    if(Math.abs(change) > .1) {

      updatedSize += change;
      updatedSize = Math.round(updatedSize*100)/100
    }
    if(Math.abs(gp.axes[2])> .1){
      updateR += Math.round(gp.axes[1]*1000)/200
    }

  }
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
  // platMode = !platMode;
  // redraw();
  // saveCanvas(cavs, 'final', 'jpg')
}
