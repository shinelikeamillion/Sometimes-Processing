let limit = 40;
let size = 20;
let padding = 40;
// let gap = size / 5;
let gap = 0;
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
function preload() {
  img = loadImage("./sources/p.png");
}

let boxs = [];

let picked = [];
function setup() {
  frameRate(4);
  let [width, height] = Paper.A3;
  createCanvas(width, height);
  noLoop();
  img.loadPixels();
  rows = parseInt((height - 2 * padding) / (size + gap));
  cols = parseInt((width - 2 * padding) / (size + gap));
  rectMode(CENTER);

  // let rR = random([...Array(rows).keys()])
  // let rC = random([...Array(cols).keys()])

  for (i = 0; i < rows; i++) {
    let y = i * (size + gap) + padding + size / 2;
    let iy = parseInt(map(y, 0, height, 0, img.height));
    for (j = 0; j < cols; j++) {
      let x = j * (size + gap) + padding + size / 2;
      let ix = parseInt(map(x, 0, width, 0, img.width));
      let c = convolution(ix, iy, 2, img);
      let level = brightness(c);

      // let index = (i + rows * j) % 3 == 0 ? 2 : 1;
      // if(i == rR && j == rC) {
      //   index = index == 2 ? 1 : 2;
      //   picked = [x, y];
      // }
      let box = {
        // index: (i+j) % 3,
        // index: (i*j) % 3,
        // index: ((i+j)/2) % 3,
        // index: ((2*i*j)) % 3,
        // index: (i + rows * j) % 3 == 0 ? 2 : 1,
        index: (i +  j) % 2,
        x: x,
        y: y,
        level: round(map(level, 0, 100, size, 4), 2),
        color: c,
      };
      boxs.push(box);
    }
  }
}
let strokeSize = size / 3;
function draw() {
  if (interactive) updateGamePad();

  if (GP.DP_UP && size < limit) size += 5;
  if (GP.DP_DOWN && size > 5) size -= 5;
  if (GP.X && strokeSize < limit - 2) strokeSize += 2;
  if (GP.Y && strokeSize > 2) strokeSize -= 2;

  boxs.forEach((box) => {
    if (GP.A) box.index = random([1, 2, 3]);
    push();
    translate(box.x, box.y);

    getShape(box);
    pop();
  });

  noFill();
  strokeWeight(2);
  stroke(color("red"));
  circle(picked[0], picked[1], size);
  // rect(0,0,size,size)
}

function getShape(box) {
  let i = box.index;

  // rect(0, 0, size, size)
  noFill()
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
  return;
  if (i == 2) {
    noStroke();
    fill(box.color);

    rect(0, 0, strokeSize, size);
    rect(0, 0, size, strokeSize);
  } else {
    noFill();
    strokeCap(SQUARE);
    stroke(box.color);
    strokeWeight(strokeSize);

    if (i == 0) {
      arc(-size / 2, -size / 2, size, size, 0, HALF_PI);

      arc(size / 2, size / 2, size, size, PI, PI + HALF_PI);
    }
    if (i == 1) {
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
  // saveCanvas("final", "png");
}
