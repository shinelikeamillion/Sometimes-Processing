
let Paper = {
  A4: [2480, 3508],
  A3: [842, 1191],
}

let img;
let nums;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/jin1.jpg')
}

let lines = [];
setup = _ => {
  let [width, height] = Paper.A3
  cavs = createCanvas(width, height, SVG)
	strokeWeight(.6)
  smooth(8)
  noFill()
  noLoop();
  img.loadPixels()

  let maxImgW = width > height ? width : height;
  for(y = 0; y < height; y+=(stepY+gapY)){
    var m = true;
    let iy = parseInt(map(y, 0, maxImgW, 0, img.height))

    let line = [];
    for(x = 0; x < width-stepX;) {

        let startY = m ? y : y+stepY;
        line.push([x.toFixed(3), startY])
        
        let ix = parseInt(map(x, 0, width,0, img.width))
        let index = (ix + iy * img.width) * 4
        let level = brightness(getColor(img, index))
        stepX = map(level, 0, 100, 1, 3)
        x += stepX;
        m = !m;
    }
    if(line.length > 0)lines.push(line);
  }
}

// todo 区域内平均色值； 动态大小
// 连续曲线
var stepX = 5;
var stepY = 20;
var gapY = 2;
function draw() {
  background(mouseIsPressed?255:250);
  
  console.log(JSON.stringify(lines));
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

function keyPressed(){
  // saveCanvas(cavs, 'final', 'jpg')
  if(key === 's') save('final.svg')
}

