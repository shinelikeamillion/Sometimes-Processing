let size = 15
let gap = size/10
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
function preload(){
  img = loadImage('http://localhost:5500/P5js/sources/lou.jpg')
}

function setup() {
  cavs = createCanvas(canvasSize, canvasSize)
	strokeWeight(1.5)
  smooth(8)
  noFill()
  noLoop(); // preload img or img will not show
  img.loadPixels()
}
// todo 区域内平均色值； 动态大小
function draw() {
  background(mouseIsPressed?50:0);
  // testColorPicker()
  // test
  // style3.show(width/2, height/2)
  for(i = 0; i < nums; i++){
    let y = i * (size + gap) + size/2 + padding
    let iy = parseInt(map(y, 0, height, 0, img.height))
    for(j = 0; j < nums; j++) {
      let x = j * (size + gap) + size/2 + padding
      let ix = parseInt(map(x, 0, width,0, img.width))
      
      stroke(getColor(img, ix, iy))
      // if(level < 10) 
      style3.show(x, y)
    //   else if(level < 60)
    //     style2.show(x, y)
    //   else if(level < 101)
    //     style1.show(x, y)
    }
  }
}

function getColor(img, ix, iy){
  var r, g, b
  let offset = 1
  // for(i = 0; i < 3; i++) {
  //   for(j = 0; j < 3; j++) {
  //     // let xcol = ix + i - offset
  //     // let ycol = iy + j - offset
  //     // let index = constrain((xcol + ycol * img.width) * 4, 0, img.pixels.length-1)
  //     print(i + "=" + j)
  //     // r += (img.pixels[index] / pow(3, 2));
  //     // g += (img.pixels[index+1] / pow(3, 2));
  //     // b += (img.pixels[index+2] / pow(3, 2));
  //   }
  // }
  let index = (ix + iy * img.width) * 4
  r = img.pixels[index]
  g = img.pixels[index+1]
  b = img.pixels[index+2]
  return color(r, g, b)
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

