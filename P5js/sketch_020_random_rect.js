
let canvasSize = 620
let nums = 20
let cavs
let points = []
off = 5

function setup() {
  cavs = createCanvas(canvasSize, canvasSize)
  smooth(8)
  strokeWeight(2);
  // background(175)
  noFill()
  noLoop(); // preload img or img will not show


  size = canvasSize/nums
  center = createVector(canvasSize/2, canvasSize/2)
  for(i = 0; i < nums; i++){
    for (j = 0; j < nums; j++){
      let x = i * size + 10
      let y = j * size + 10
      let dis = p5.Vector.dist(center, createVector(x, y))
      offset = (canvasSize/2 - dis) / (canvasSize/2) * off
      points.push(createVector(x + random(-offset, offset),
       y+ random(-offset, offset)))
    }
  }
}

function draw() {
  let desiredseparation = size
  for(let i  = 0; i < points.length; i++) {
    for(let j = 0; j < points.length; j++) {
      let dis = p5.Vector.dist(points[i], points[j])
      if( dis > 0
          && dis < desiredseparation) {
            for (z = 0; z < 2; z++){
              stroke(66,133,244, 80)
              line(points[i].x,points[i].y, points[j].x, points[j].y)
              stroke(219,68,55, 80)
              line(points[i].x - 3,points[i].y-3, points[j].x- 3, points[j].y-3)
              stroke(244,160,0, 80)
              line(points[i].x+3,points[i].y+3, points[j].x+3, points[j].y+ 3)
            }
      }
    }
  }
}

