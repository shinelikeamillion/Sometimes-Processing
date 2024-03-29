let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
};

let lyrics = `
I am a moonshiner
For 17 long years
And I spent all my money
On whisky and beers

And I go to some hollow
And set up my still
If whisky don't kill me
Lord, I don't know what will

And I go to some barroom
To drink with my friends
Where the women they can't follow
To see what I spend

God bless them, pretty women
I wish they was mine
With breath as sweet as
The dew on the vine

Let me eat when I'm hungry
Let me drink when I'm dry
Two dollars when I'm hard up
Religion when I die

The whole world is a bottle
And life is but a dram
When the bottle gets empty
Lord, it sure ain't worth a damn`
// .replace(/\s+|\n+$/g, '')
.replace(/\s/g, '·')
.replace(/\n+/g, '');

let size = 6;
let padding = 30;
let gap = 1;
let platMode = false;

let img;
let cavs;

function preload() {
  img = loadImage("http://localhost:5501/sources/3.png");
}

let maxWidth = 0;
setup = (_) => {
  let [width, height] = Paper.A3;
  // cavs = createCanvas(width, height);
  cavs = createCanvas(width, height, SVG);
  smooth(8);
  noFill();
  noLoop(); // preload img or img will not show
  img.loadPixels();
  rows = parseInt((height - 2 * padding) / (size + gap+3));
  cols = parseInt((width - 2 * padding) / (size + gap+1));
  fill(0);
  textAlign(CENTER);
};
// todo 区域内平均色值； 动态大小
var wi = 0;
draw = (_) => {
  // background(255);
  for (i = 0; i < rows; i++) {
    let y = i * (size + gap+3) + padding + size / 2;
    let iy = parseInt(map(y, 0, height, 0, img.height));
    for (j = 0; j < cols; j++) {
      let x = j * (size + gap+1) + padding + size / 2;
      let ix = parseInt(map(x, 0, width, 0, img.width));
      let level = brightness(getColor(ix, iy, img));
      // let level = brightness(convolution(ix, iy, 2, img))
      iHight = map(level, 0, 100, 12, 6);
      // fill(level);
      push();
      translate(x, y);
      // rotate(-PI / 4.0);
      if (platMode) {
          for (let k = 0; k < iHight; k++) {
            line(-size / 2, k, size + 4 - size / 2, k);
          }
      } else {
        if(iHight > 6.1) {
          var w = lyrics[(parseInt((wi++) % lyrics.length))];
          textSize(iHight)
          if(iHight > 9)textStyle(BOLD)
          else textStyle(NORMAL)
          text(w, 0, 0);
          // stroke(map(level, 0, 100, 0, 100))
          // strokeWeight(iHight);
          // point(0, 0);
        } else {
          // point(0, 0);
        }
      }
      pop();
    }
  }
};

getColor = (x, y, img) => {
  let index = (x + y * img.width) * 4;
  return color(img.pixels[index], img.pixels[index + 1], img.pixels[index + 2]);
};
convolution = (x, y, matrixsize, img) => {
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
};

mousePressed = (_) => {
  // drawLine = !drawLine;
  noLoop();
};
