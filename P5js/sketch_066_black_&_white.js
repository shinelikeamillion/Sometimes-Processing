let pg;

var thetaR = 0.0;
var thetaC = 0.0;
var r;
var px;
var py;
var stopX, stopY;
setup = _ => {
    createCanvas(800, 600);
    r = height / 2;
    px = r / 2;
    py = 0;
    stopX = px;
    stopY = py;
    smooth();

    pg = createGraphics(800, 600);
    // noLoop()
}

draw = _ => {
    background(175);
    stroke(0);
    noFill();
    push();
    translate(width / 2, height / 2);
    ellipse(0, 0, r, r);

    thetaR = (thetaR + 0.153) % TWO_PI;
    thetaC = (thetaC - 0.135) % TWO_PI;

    var xR = r * cos(thetaR) / 2;
    var yR = r * sin(thetaR) / 2;

    var xC = r * cos(thetaC) / 2;
    var yC = r * sin(thetaC) / 2;

    line(xR, -height / 2, xR, height / 2);
    line(-width / 2, yC, width / 2, yC);

    fill(0);
    ellipse(xR, yR, 8, 8);
    fill(255);
    ellipse(xC, yC, 8, 8);

    noStroke();
    fill(color(255, 0, 0));
    ellipse(xR, yC, 5, 5);
    pop();

    pg.stroke(color(255, 0, 0));
    pg.push()
    pg.translate(pg.width / 2, pg.height / 2)
    pg.line(px, py, xR, yC);
    pg.pop()
    px = xR;
    py = yC;

    image(pg, 0, 0)
}

mousePressed = _ => noLoop()
