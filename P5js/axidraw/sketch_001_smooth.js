let size = 16
let padding = 20
let gap = size/5
let platMode = false;
let Paper = {
  A3: [794, 1123],
  A4: [595*2, 842*2],
  A5: [559, 795],
}

let img;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/2.png')
}

let maxWidth = 0;
function setup() {
  let [width, height] = Paper.A4;
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
      let index = (ix + iy * img.width) * 4
      let level = brightness(getColor(img, index))
      iHight = map(level, 0, 100, 10, 0)
      fill(level)
      push()
      translate(x, y);
      rotate(-PI/4.0)
      if(platMode){
        if(iHight<3)line(0, 0, size+4, 0)
        if(iHight>3){
          for(let k = 0; k < iHight; k++){
            line(0, k, size+4, k)
          }
        }
      } else {
        rect(0, 0, size+4, iHight)
      }
      pop()
    }
  }
}

function getColor(img, index){
  return color(
      img.pixels[index],
      img.pixels[index+1],
      img.pixels[index+2]
    )
}

function mousePressed(){
  saveCanvas(cavs, 'final', 'jpg')
}