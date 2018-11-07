/**
 * from http://processingjs.org/learning/basic/arctangent/
 * 的 JS5 版本
 */
function Eyes(ex, ey, angle) {
    this.ex = ex;
    this.ey = ey;
    this.angle = angle;
    this.update = function(mx, my) {
        angle = atan2(my-ey, mx-ex);
    };
    this.display = function() {
        push();
        translate(ex, ey);
        fill(255);
        ellipse(0, 0, size, size);
        rotate(angle);
        fill(0);
        ellipse(size/4, 0, size/2, size/2);
        pop();
    }
}

var size;
var eyes = new Array();
var space;
function setup() {
    createCanvas(400, 400);
    space = 8;
    size = 400 / 10 - space;
    smooth();
    noStroke();

    for(var i = 0; i < 10; i++) {
        eyes[i] = new Array()
        for(var j = 0; j< 10; j++) {
            eyes[i][j] = new Eyes(i*(size + space) + size/2, j*(size + space) + size/2, 0);
        }
    }
}

function draw() {
    background(0);
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j< 10; j++) {
            eyes[i][j].update(mouseX, mouseY);
            eyes[i][j].display();
        }
    }
}

