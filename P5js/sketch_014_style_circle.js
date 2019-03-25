let size = 20;
let padding = 10;
let gap = 3;
let style1 = {
  color:"#40C4FF",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, 6 + n, 6 + n);
  }
}

let style2 = {
  color:"#C0CA33",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size + (n - 10), size + (n - 10));
  }
}

let style3 = {
  color:"#EF6C00",
  show:function(x, y, n){
  	stroke(this.color);
    ellipse(x, y, size, size);
    stroke(color("#00796B"))
		ellipse(x, y, size, size + (n - 10));
  }
}

let style4 = {
  color:"#EF6C00",
  show:function(x, y, n){
  	stroke(this.color);
    ellipse(x, y, size, size);
    stroke(color("#00796B"))
		ellipse(x, y, size + (n - 10), size);
  }
}

var nums;
var theta  = 0;
function setup() {
  createCanvas(410, 410);
	strokeWeight(2);
  // smooth();
	noFill();
  
  nums = (width - 2 * padding) / (size + gap);
}

function draw() {
  background(0);
  let n = map(sin(theta+=0.1), -1, 1, 0, 10);
  for(i = 0; i < nums; i++){
    for(j = 0; j < nums; j++) {
      let x = i * size + size/2 + padding;
      let y = j * size + size/2 + padding;
      x += i * gap;
      y += j * gap;
      if(i % 2 == 0 && j % 2 == 0) {
        style1.show(x, y, n);
      } else if(i % 2 == 1 && j % 2 == 1) {
        style2.show(x, y, -n);
      } else if(i % 2 == 0 && j % 2 == 1) {
        style3.show(x, y, n);
      } else if(i % 2 == 1 && j % 2 == 0) {
        style4.show(x, y, n);
      }
    }
  }
}
