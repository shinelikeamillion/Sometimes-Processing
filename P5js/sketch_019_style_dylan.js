let size = 8
let gap = size/5
let canvasSize = 620
let nums = parseInt(canvasSize / (size + gap))
let padding = (canvasSize - nums * (size + gap) + gap) / 2

let style1 = {
  color:"#000000",
  show:function(x, y){
  	// stroke(this.color)
		ellipse(x, y, size, size)
  }
}

let style2 = {
  color:"#000000",
  show:function(x, y){
  	// stroke(this.color)
		ellipse(x, y, size, size)
		ellipse(x, y, 0.7*size, 0.7*size)
  }
}

let style3 = {
  color:"#000000",
  show:function(x, y){
  	// stroke(this.color)
    ellipse(x, y, size, size)
		ellipse(x, y,size/2 + 3, size/2 + 3)
    ellipse(x, y, size/4+1, size/4+1)
  }
}
let img;
let cavs;
let imgSize;
function preload(){
  img = loadImage('http://localhost:5500/P5js/sources/dylan.jpg')
}

function setup() {
  cavs = createCanvas(canvasSize, canvasSize)
  smooth(8)
  noFill()
  noLoop(); // preload img or img will not show
  imgSize = img.width < img.height ? img.width : img.height;
  img.loadPixels()
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(mouseIsPressed?50:"#1a237e");
  // testColorPicker()
  // test
  // style3.show(width/2, height/2)
  for(i = 0; i < nums; i++){
    let y = i * (size + gap) + size/2 + padding
    let iy = parseInt(map(y, 0, height, 0, imgSize))
    for(j = 0; j < nums; j++) {
      let x = j * (size + gap) + size/2 + padding
      let ix = parseInt(map(x, 0, width,0, imgSize))
      
      stroke(getColor(img, ix, iy))
      style3.show(x, y)
    }
  }
}

function getColor(img, ix, iy){
  var r = 0, g = 0, b = 0
  let offset = 1
  for(let n = 0; n < 3; n++) {
    let ycol = iy + n - offset
    for(let m = 0; m < 3; m++) {
      let xcol = ix + m - offset
      let index = parseInt(constrain((xcol + ycol * img.width) * 4, 0, img.pixels.length-1))
      r += img.pixels[index] / pow(3, 2);
      g += (img.pixels[index+1] / pow(3, 2));
      b += (img.pixels[index+2] / pow(3, 2));
    }
  }
  // let index = (ix + iy * img.width) * 4
  // r = img.pixels[index]
  // g = img.pixels[index+1]
  // b = img.pixels[index+2]
  let level = map(brightness(color(r, g, b)), 0, 100, 0, 255)
  return level < 20 ? ("#311b92") : 
    level < 50 ? ("#4527a0"):
      level < 80 ? ("#512da8"):
      level < 110 ? ("#5e35b1"):
      level < 140 ? ("#673ab7"):
      level < 170 ? ("#7e57c2"):
      level < 200 ? ("#d50000"):
        level < 230 ? ("#ff5252"): ("#ff1744")

}

// function testColorPicker() {
//   image(img)
  // var x = parseInt(map(mouseX, 0, width, 0, img.width))
  // var y = parseInt(map(mouseY, 0, height, 0, img.height))
  // let index = (x + y * img.width) * 4
  // fill(getColor(img, index))
  // ellipse(x, y, 20, 20)
  // ellipse(mouseX, mouseY, 30, 30)

  // if(mouseIsPressed){
  //   println(x+"-"+y+"-"+index)
  // }
// }

// function mousePressed(){
//   saveCanvas(cavs, 'final', 'jpg')
// }

