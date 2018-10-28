var start = 10;
function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  noFill();
  noLoop();
}
var i = 0;
var y = 0;
function draw() {
  background(175);
  
//   1
  // while(i<100){
  //         ellipse(270,
  //                 20+i*2,
  //                 100*(1+0.005*i),
  //                 20*(1+0.005*i));
  //         i += 5;
  // }
  
//   2
  // translate(width/2, height/2);
  // while(i < 100) {
  // 	ellipse(0, 0, 100 + i * 2, 100 + i * 2);
  //   i += 5;
  // }
  
//   3
  // translate(width/2, height/2);
  // while(i < 100) {
  //   if(i != 50)
  // 		ellipse(0, 0, 100 + i * 2, 100 - i * 2);
  //   i += 5;
  // }

//   4
  // translate(width/2, height/2);
  // while(i < 100) {
  // 	ellipse(0, 0, 300 - i * 2, 100 + i * 2);
  //   i += 5;
  // }
  
  //   5
  translate(width/2, height/2);
  while(i < 100) {
    if(i != 50) {
  		ellipse(0, -0.6*i, 100 + i * 2, 100-i*2);
    }
    i += 5;
  }
}