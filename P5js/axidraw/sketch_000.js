let size = 16
let padding = size/2
let gap = size/10
let canvasSize = 410

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
let nums;
let cavs;
function preload(){
  img = loadImage('http://localhost:5500/sources/lou.jpg')
}

function setup() {
  cavs = createCanvas(canvasSize, canvasSize)
	strokeWeight(1.5)
  smooth(8)
  noFill()
  noLoop(); // preload img or img will not show
  img.loadPixels()
  nums = (width - 2 * padding) / (size + gap)
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(mouseIsPressed?255:175);
  rectMode(CENTER)
  for(i = 0; i < nums; i++){
    let y = i * (size + gap) + size/2 + padding
    let iy = parseInt(map(y, 0, height, 0, img.height))
    for(j = 0; j < nums; j++) {
      let x = j * (size + gap) + size/2 + padding
      let ix = parseInt(map(x, 0, width,0, img.width))
      let index = (ix + iy * img.width) * 4
      let level = brightness(getColor(img, index))
      iHight = map(level, 0, 100, 10, 1)
      fill(level)
      push()
      translate(x, y);
      rotate(-PI/4.0)
      rect(0, 0, 20, iHight)
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

function mousePressed(){
  saveCanvas(cavs, 'final', 'jpg')
}

