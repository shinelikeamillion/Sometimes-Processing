let size = 20;
let style1 = {
  color:"#4527a0",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, 6 + n, 6 + n);
  }
}

let style2 = {
  color:"#7953d2",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size + (n - 10), size + (n - 10));
  }
}

let style3 = {
  color:"#4527a0",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size, size + (n - 10));
  }
}

let style4 = {
  color:"#4527a0",
  show:function(x, y, n){
  	stroke(this.color);
		ellipse(x, y, size, size);
		ellipse(x, y, size + (n - 10), size);
  }
}

var nums;
var theta  = 0;
function setup() {
  createCanvas(400, 400);
	strokeWeight(2);
  smooth();
	noFill();
  
  nums = width/size;
}

function draw() {
  background(220);
  let n = map(sin(theta+=0.02), -1, 1, 0, 10);
  for(i = 0; i < nums; i++){
    for(j = 0; j < nums; j++) {
      let x = i * size + size/2;
      let y = j * size + size/2;
      if(i % 2 == 0 && j % 2 == 0) {
        style1.show(x, y, n);
      } else if(i % 2 == 1 && j % 2 == 1) {
        style2.show(x, y, n);
      } else if(i % 2 == 0 && j % 2 == 1) {
        style3.show(x, y, n);
      } else if(i % 2 == 1 && j % 2 == 0) {
        style4.show(x, y, n);
      }
    }
  }
}
