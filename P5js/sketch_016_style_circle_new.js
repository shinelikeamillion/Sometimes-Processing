
let Paper = {
  A4: [2480, 3508],
  A3: [842, 1191],
}

let img;
let nums;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/lou.jpg')
}

let lines = [];
function setup() {
  let [width, height] = Paper.A3
  cavs = createCanvas(width, height)
	strokeWeight(.6)
  smooth(8)
  noFill()
  noLoop();
  img.loadPixels()

  let maxImgW = width > height ? height : width;
  for(y = 0; y < height; y+=(stepY+gapY)){
    var m = true;
    let iy = parseInt(map(y, 0, maxImgW, 0, img.height))

    let line = [];
    for(x = 0; x < width-stepX;) {

        let startY = m ? y : y+stepY;
        line.push([x, startY])
        let endY = m ? y + stepY : y;

        let ix = parseInt(map(x, 0, width,0, img.width))
        let index = (ix + iy * img.width) * 4
        let level = brightness(getColor(img, index))
        stepX = map(level, 0, 100, 2, 3)
        
        line.push([x+=stepX, endY])
        m = !m;
    }
    lines.push(line);
  }
}

// todo 区域内平均色值； 动态大小
var stepX = 5;
var stepY = 30;
var gapY = 2;
function draw() {
  background(mouseIsPressed?255:250);
  
  let maxImgW = width > height ? height : width;
  lines.forEach(line => {
    beginShape()
    line.forEach((v) => {
      let [x, y] = v;
      vertex(x, y)
    })
    endShape()
  })
}

function getColor(img, index){
  return color(
      img.pixels[index],
      img.pixels[index+1],
      img.pixels[index+2]
    )
}

function mousePressed(){
  // saveCanvas(cavs, 'final', 'jpg')
}

