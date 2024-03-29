step = 26;
rate = 0;
size = 800;
preload = (_) => {
  bg = loadImage("./sources/lou.jpg");
};
setup = (_) => {
  // frameRate(3)
  createCanvas(size, size);
  rectMode(CENTER);
  stroke(color(255, 40, 100));
  // noLoop();
  rate = bg.width < bg.height ? bg.width / width : bg.height / height;
};
var bw = 20;
var bh = 20;
var seed = 5;
draw = (_) => {
  background(125);
  // image(bg, 0, 0, size, bg.height / rate);
  handleUpdate();
  translate(width / 2.0, height / 2.0);

  rect(0, 0, bw, bh);
};
/**
 */
handleUpdate = (_) => {
  var gp = navigator.getGamepads()[0];
  if (gp) {
    fixedW = Math.round(gp.axes[0]*100)/100;
    // axes[1] < 0 is up
    fixedH = Math.round(-gp.axes[1]*100)/100;
    // console.log(fixedH)
    if ((bw >= 0 && fixedW < 0) || (bw <= size && fixedW > 0))
      bw += fixedW * seed;
    if ((bh >= 0 && fixedH < 0) || (bh <= size && fixedH > 0))
      bh += fixedH * seed;
  }
};

mousePressed = () => noLoop();
