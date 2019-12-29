// source: https://www.openprocessing.org/sketch/143704

step = 9
setup=_=>{
    createCanvas(500,500)
    noLoop()
}

draw=_=>{
    background(235)
    strokeWeight(1); 
    noStroke();
    for (let i = 0; i<width-1; i+=2) {
      for (let j = 0; j<height-1; j+=2) {
        fill(random(235-40, 235+30), 25);
        rect(i, j, 2, 2);
      }
    }
  
    for (let i = 0; i<30; i++) {
      fill(random(130, 215), random(100, 170));
      rect(random(0, width-2), random(0, height-2), random(1, 3), random(1, 3));
    }
    fill(200)
    rect(0, 0, 2, height)
    fill(220)
    rect(0, height-2, width, 2)
}
