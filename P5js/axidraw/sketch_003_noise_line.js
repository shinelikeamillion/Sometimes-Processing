let size = 40;
let padding = 40;
let Paper = {
  A3: [794, 1123],
  A4: [595, 842],
  A5: [559, 795],
};
size = 20;
noiseS = 0.02;
gap = 2;
drawLine = false;
length = 40;

setup = (_) => {
  frameRate(12);
  let [width, height] = Paper.A4;
  createCanvas(width, height, SVG);
  rectMode(CENTER);
  // noStroke();
  num = floor(width / (size + gap));
  margin = (width % (size + gap)) / 2;
};
draw = (_) => {
  background(255);
  for (i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      // 调整噪音函数生成噪音特征及细节度
      noiseDetail(20, .6);
      noiseV = noise((mouseX + j) * noiseS, (mouseY + i) * noiseS);

      y = margin + i * (size + gap ) + (size + gap) / 2;
      x = margin + j * (size + gap ) + (size + gap) / 2;

      push()
      if (!drawLine) {
        translate(x, y);
        rotate(map(noiseV, 0, 1, -1, 1) * HALF_PI);
        // line(0, 0, length, 0);
        line(-length/2, 0, length/2, 0);
      } else {
        // fill(255 * noiseV);
        // rect(x, y, size, size);
      }
      pop()
    }
  }
};

mousePressed = (_) => {
  // drawLine = !drawLine;
  noLoop()
};
