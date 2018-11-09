/**
 * from : http://processingjs.org/learning/basic/distance2d/
 */
var max_distance;
var toogleRectOrEllipse;

function setup() {
    createCanvas(400, 400);
    smooth();
    noStroke();
    max_distance = dist(0, 0, width, height);
    rectMode(CENTER);
    fill(0);
}

function draw() {
    background(255);

    for(var i = 0; i <= width; i += 20) {
        for(var j = 0; j <= width; j += 20) {
            var size = dist(mouseX, mouseY, i, j);
            size = 25 - size / max_distance * 25;
            if(toogleRectOrEllipse) {
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