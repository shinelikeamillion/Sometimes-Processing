let size = 80;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
};
let padding = 20;

var updateR = 0;
var interactive = true;

function preload() {}

let boxs = [];
let gap = 0;
function setup() {
  // noLoop();
  gap = size * sin(QUARTER_PI)*2 - size;
  // frameRate(10);
  updateR = QUARTER_PI;
  let [width, height] = Paper.A3;
  createCanvas(width, width);
  noStroke();
  fill(0);
  rectMode(CENTER);
  rows = (height ) / (size + gap) + 2;
  cols = (width) / (size + gap) + 2;
  for (i = -1; i < rows; i++) {
    let y = i * (size + gap) + size / 2;
    for (j = -1; j < cols; j++) {
      let x = j * (size + gap) + size / 2;

      let box = {
        x: x,
        y: y,
      };
      boxs.push(box);
    }
  }
}
let swi = false;
let bingo = false;
function draw() {
  if (interactive) {
    updateGamePad();
  } else {
    noLoop();
  }

    if(bingo) {
      swi = !swi;
      updateR = QUARTER_PI;
    }
    if(swi) {
      background(255);
      fill(0)
      boxs.forEach((box) => {
        push();
        translate(box.x, box.y);
        rotate(updateR);
        rect(0,0, size, size);
        pop();
      });
    } else {
      background(0);
      fill(255)
      boxs.forEach((box) => {
        push();
        translate(box.x+size * sin(QUARTER_PI), box.y+size * sin(QUARTER_PI));
        rotate(updateR);
        rect(0,0, size, size);
        pop();
      });
    }

    if (interactive) {
      updateR += 0.01;
      updateR = round(updateR,2)
    }
    bingo = Math.abs(round(cos(updateR), 2)) == round(cos(QUARTER_PI), 2);
    print(updateR)
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
  // saveCanvas(cavs, 'final', 'jpg')
}
