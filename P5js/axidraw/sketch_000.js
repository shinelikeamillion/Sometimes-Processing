let size = 16
let padding = 20
let gap = size/5
let platMode = false;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
}

let img;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/2.png')
}

let maxWidth = 0;
function setup() {
  let [width, height] = Paper.A3;
  cavs = createCanvas(width, height, SVG)
  smooth(8)
  noFill()
  noLoop(); // preload img or img will not show
  img.loadPixels()
  rows = (height - 2 * padding) / (size + gap)
  cols = (width - 2 * padding) / (size + gap)
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(255);
  rectMode(CENTER)
  for(i = 0; i < rows; i++){
    let y = i * (size + gap) + padding
    let iy = parseInt(map(y, 0, height, 0, img.height))
    for(j = 0; j < cols; j++) {
      let x = j * (size + gap) + padding
      let ix = parseInt(map(x, 0, width,0, img.width))
      let level = brightness(getColor(ix, iy, img))
      // let level = brightness(convolution(ix, iy, 2, img))
      iHight = map(level, 0, 100, 10, 0)
      fill(level)
      push()
      translate(x, y);
      rotate(-PI/4.0)
      if(platMode){
        if(iHight<3)line(-size/2, 0, size+4-size/2, 0)
        if(iHight>3){
          for(let k = 0; k < iHight; k++){
            line(0, k, size+4, k)
          }
        }
      } else {
        rect(size/2, 0, size+4, iHight)
      }
      pop()
    }
  }
}

function getColor(x, y, img){
  let index = (x + y * img.width) * 4
  return color(
      img.pixels[index],
      img.pixels[index+1],
      img.pixels[index+2]
    )
}
function convolution( x,  y,   matrixsize,  img) {
 var rtotal = 0.0;
 var gtotal = 0.0;
 var btotal = 0.0;
 var offset = matrixsize / 2;
 // Loop through convolution matrix
 for (var i = 0; i < matrixsize; i++){
   for (var j= 0; j < matrixsize; j++){
     // What pixel are we testing
     var xloc = x+i-offset;
     var yloc = y+j-offset;
     var loc = (xloc + yloc * img.width) * 4;
     // Make sure we have not walked off the edge of the pixel array
     loc = constrain(loc,0,img.pixels.length-1);
     // Calculate the convolution
     // We sum all the neighboring pixels multiplied by the values in the convolution matrix.
     rtotal += img.pixels[loc] / pow(matrixsize,2);
     gtotal += img.pixels[loc+1] / pow(matrixsize,2);
     btotal += img.pixels[loc+2] / pow(matrixsize,2);
   }
 }
 // Make sure RGB is within range
 rtotal = constrain(rtotal,0,255);
 gtotal = constrain(gtotal,0,255);
 btotal = constrain(btotal,0,255);
 // Return the resulting color

 return color(rtotal,gtotal,btotal);
}

function mousePressed(){
  // saveCanvas(cavs, 'final', 'jpg')
}