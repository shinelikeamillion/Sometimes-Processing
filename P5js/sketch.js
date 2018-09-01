var theta = 0
var lines = 9
var maxSize = 40
var numberOfCircle
var gap = maxSize/2
var startY;
function setup() {
  createCanvas(windowWidth, windowHeight)
  noFill()
  stroke(255)

  calculate()
}

function draw() {
  background(0)
  for(var i = 0; i < lines; i++) {
    for(var j = 1; j < numberOfCircle-1; j++) {
      var size = map(cos(j*0.25+theta+(i % 2 == 0 ? 0 : PI)), 1, -1, 1, maxSize)
      ellipse(gap*j, startY+maxSize*i*0.8, size, size)
    }
  }
  theta+= 0.02
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

  calculate()
}

function calculate() {
  var minHeight = lines*maxSize
  startY = minHeight > height ? 0 : (height - lines*maxSize*0.8)/2
  numberOfCircle = width/gap
}