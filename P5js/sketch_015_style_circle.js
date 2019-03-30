let size = 20;
let padding = 10;
let gap = 3;
let style1 = {
  color:"#FFFFFF",
  show:function(x, y){
  	stroke(this.color);
		ellipse(x, y, size, size);
  }
}

let style2 = {
  color:"#AD1457",
  show:function(x, y){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size - 6, size - 6);
  }
}

let style3 = {
  color:"#FF5252",
  show:function(x, y){
  	stroke(this.color);
    ellipse(x, y, size, size);
    fill(this.color)
    ellipse(x, y, size - 6, size - 6);
    noFill()
  }
}

let style4 = {
  color:"#EF6C00",
  show:function(x, y){
  	stroke(this.color);
    ellipse(x, y, size, size);
		ellipse(x, y, size - 12, size - 12);
  }
}

let style5 = {
  color:"#D32F2F",
  show:function(x, y){
  	stroke(this.color);
    ellipse(x, y, size, size);
    let r = size / 2 - 1;
    // middle of the border
    line(x - r, y, x + r, y)
    let r2 = r * cos(PI/6)
    line( x - r2, y - r/2, x + r2, y - r/2);
    line( x - r2, y + r/2, x + r2, y + r/2);
  }
}

let style6 = {
  color:"#EF6C00",
  show:function(x, y){
  	stroke(this.color)
    ellipse(x, y, size, size)
    let r = size / 2
    // stroke("#fff")
    let gap = size / 4 - 1
    let r2 = r * cos(asin((gap/2  / r)))
    line(x - r2, y - gap/2, x + r2, y - gap/2)
    line(x - r2, y + gap/2, x + r2, y + gap/2)

    let r3 = r * cos(asin((3*gap / 2) / r)) - 1
    line(x - r3, y - (3*gap / 2), x + r3, y - (3*gap / 2))
    line(x - r3, y + (3*gap / 2), x + r3, y + (3*gap / 2))
  }
}

// 圆的方程 (x-a)²+(y-b)²=r²
// 转换：y = sqrt(sq(r, 2) - sq(x - a, 2)) + b

var nums;
var styles;
function setup() {
  createCanvas(410, 410);
	strokeWeight(2);
  smooth(8);
  noFill();
  noLoop();
  
  nums = (width - 2 * padding) / (size + gap);
  styles = [style1, style2, style3, style4, style5, style6]
}

function draw() {
  background(0);
  // test
  // style6.show(width/2, height/2)
  for(i = 0; i < nums; i++){
    for(j = 0; j < nums; j++) {
      let x = i * size + size/2 + padding;
      let y = j * size + size/2 + padding;
      x += i * gap;
      y += j * gap;

      var style
      let ran = random()
      if(ran > 0.4) {
        style = styles[0]
      } else {
        style = styles[Math.floor(random()*styles.length - 1) + 1]
      }
      style.show(x, y)
      // if(i % 2 == 0 && j % 2 == 0) {
      //   style1.show(x, y);
      // } else if(i % 2 == 1 && j % 2 == 1) {
      //   style2.show(x, y);
      // } else if(i % 2 == 0 && j % 2 == 1) {
      //   style5.show(x, y);
      // } else if(i % 2 == 1 && j % 2 == 0) {
      //   style6.show(x, y);
      // }
    }
  }
}
