let size = 20;
let padding = 10;
let gap = 3;

let style1 = {
  color:"#000000",
  show:function(x, y){
  	stroke(this.color);
		ellipse(x, y, size, size);
  }
}

let style2 = {
  color:"#000000",
  show:function(x, y){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size - 6, size - 6);
  }
}

let style3 = {
  color:"#000000",
  show:function(x, y){
  	stroke(this.color);
    ellipse(x, y, size, size);
		ellipse(x, y, size - 7, size - 7);
    ellipse(x, y, size - 14, size - 14);
  }
}
let img;
let nums;
function preload(){
  img = loadImage('http://localhost:5500/P5js/sources/lou.jpg')
}

function setup() {
  createCanvas(410, 410);
	strokeWeight(2);
  smooth(8);
  noFill();
  // noLoop(); // preload img or img will not show
  img.loadPixels()
  nums = (width - 2 * padding) / (size + gap);
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(mouseIsPressed?80:255);
  // test
  // style3.show(width/2, height/2)
  for(i = 0; i < nums; i++){
    let y = i * (size + gap) + size/2 + padding
    let iy = parseInt(map(y, 0, height, 0, img.height))
    for(j = 0; j < nums; j++) {
      let x = j * (size + gap) + size/2 + padding
      let ix = parseInt(map(x, 0, width,0, img.width))
      let index = (ix + iy * img.width) * 4
      let level = brightness(getColor(img, index))
      // style1.color = map(level, 0, 100, 0, 255)
      if(level < 10) 
        style3.show(x, y)
      else if(level < 60)
        style2.show(x, y)
      else if(level < 100)
        style1.show(x, y)
    }
  }
  
  // testColorPicker()
}

function getColor(img, index){
  return color(
      img.pixels[index],
      img.pixels[index+1],
      img.pixels[index+2]
    )
}

function testColorPicker() {
  image(img, 0, 0)
  var x = parseInt(map(mouseX, 0, width, 0, img.width))
  var y = parseInt(map(mouseY, 0, height, 0, img.height))
  let index = (x + y * img.width) * 4
  fill(getColor(img, index))
  ellipse(x, y, 20, 20)
  ellipse(mouseX, mouseY, 30, 30)

  if(mouseIsPressed){
    println(x+"-"+y+"-"+index)
  }
}

