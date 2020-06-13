/**
 * from : http://processingjs.org/learning/basic/distance2d/
 */
var max_distance;
var toogleRectOrEllipse;

function setup() {
    createCanvas(300, 300);
    smooth();
    noStroke();
    max_distance = dist(0, 0, width, height);
    rectMode(CENTER);
}

function draw() {
    background(0);
    gap = width / 10;
    for (var i = 0; i <= width; i += gap) {
        for (var j = 0; j <= width; j += gap) {
            var size = dist(mouseX, mouseY, i, j);
            size = map(size, 0, width, 0, gap * 2)
            if (toogleRectOrEllipse) {
                rect(i, j, size, size);
            } else {
                ellipse(i, j, size, size);
            }
        }
    }
}

function mouseClicked() {
    toogleRectOrEllipse = !toogleRectOrEllipse;
}