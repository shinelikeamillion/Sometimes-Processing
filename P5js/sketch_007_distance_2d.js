/**
 * from : http://processingjs.org/learning/basic/distance2d/
 */
var d;

function setup() {
    createCanvas(200, 200);
    smooth();
    noStroke();
    d = dist(0, 0, width, height);
}

function draw() {
    background(0);

    for (var i = 0; i <= width; i += 20) {
        for (var j = 0; j <= width; j += 20) {
            var size = dist(mouseX, mouseY, i, j);
            size = size / d * 66;
            ellipse(i, j, size, size);
        }
    }
}