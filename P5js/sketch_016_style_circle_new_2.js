
let Paper = {
  A4: [595, 842],
  A3: [794, 1123],
}
let landscape = false;

let img;
let nums;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/lou.jpg')
}

let lines = [];
function setup() {
  let [width, height] = landscape ? Paper.A3.reverse() : Paper.A3;
  cavs = createCanvas(width, height, SVG)
	strokeWeight(.6)
  smooth(8)
  noFill()
  noLoop();
  img.loadPixels()

  let maxImgW = width > height ? (landscape ? width: height) : (landscape ? height: width);
  for(y = stepY/2; y < height; y+=(stepY+gapY)){
    var m = true;
    let iy = parseInt(map(y, 0, maxImgW, 0, img.height))

    let line = [];
    let tempY = 0;
    for(x = 0; x < width-stepX;) {

        let startY = y + (tempY*(m?-1:1));
        line.push([x.toFixed(3), startY])
        
        let ix = parseInt(map(x, 0, width,0, img.width))
        let index = (ix + iy * img.width) * 4
        let level = brightness(getColor(img, index))
        stepX = map(level, 0, 100, 2, 3)
        tempY = map(level, 0, 100, -15, 0)
        if(tempY >-2) tempY = 0;
        x += stepX;
        m = !m;
    }
    if(line.length > 0)lines.push(line);
  }
}

// todo 区域内平均色值； 动态大小
// 连续曲线
var stepX = 5;
var stepY = 30;
var gapY = 2;
function draw() {
  background(mouseIsPressed?255:250);
  
  // console.log(JSON.stringify(lines));
  lines.forEach(line => {
    beginShape()
    line.forEach((v) => {
      let [x, y] = v;
      vertex(x, y)
    })
    endShape()
  })
  // rect(0, 0, width, height)
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
  // save('final.svg')
}

// toggle plot: axicli --mode toggle
// disable xy, xicli -m manual -M disable_xy 
// axicli -m manual -M walk_x --walk_dist 1.5
