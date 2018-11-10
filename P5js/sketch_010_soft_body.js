/**
 * from : https://processing.org/examples/softbody.html
 * 通过 curveVertex() 和 curveTightness() 模拟动力学
 */

var centerX, centerY;
var radius = 45, rotAngle = -90;
var accelX = 0.0, accelY = 0.0;
var springing = 0.0009, damping = 0.98;

var nodes = 5;
var nodeStartX = [];
var nodeStartY = [];

var nodeX = [];
var nodeY = [];
var angleE = [];
var frequency = [];

var organicConstant = 1.0;

function setup(){
    createCanvas(640, 360);
    centerX = width/2;
    centerY = height/2;
    noStroke();

    for(var i = 0; i < nodes; i++) {
        nodeStartX[i] = 0;
        nodeStartY[i] = 0;
        nodeY[i] = 0;
        angleE[i] = 0;

        frequency[i] = random(5, 12);
    }
}

function draw() {
    fill(0, 100);
    rect(0, 0, width, height);
    drawShap();
    moveShape();
}

function drawShap() {
    for(var i = 0; i < nodes; i++) {
        nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
        nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
        rotAngle += 360.0/nodes;
    }

    curveTightness(organicConstant);
    fill(255);
    beginShape();
    for(var i = 0; i < nodes; i++) {
        curveVertex(nodeX[i], nodeY[i]);
    }
    for(var i = 0; i < nodes - 1; i++) {
        curveVertex(nodeX[i], nodeY[i]);
    }
    endShape(CLOSE);
}

function moveShape() {
    deltaX = mouseX - centerX;
    deltaY = mouseY - centerY;

    deltaX *= springing;
    deltaY *= springing;

    accelX += deltaX;
    accelY += deltaY;

    centerX += accelX;
    centerY += accelY;

    accelX *= damping;
    accelY *= damping;

    organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);

    for(var i = 0; i < nodes; i++) {
        nodeX[i] = nodeStartX[i] + sin(radians(angleE[i]) * (accelX * 2));
        nodeY[i] = nodeStartY[i] + sin(radians(angleE[i]) * (accelY * 2));
        angleE[i] += frequency[i];
    }
}

