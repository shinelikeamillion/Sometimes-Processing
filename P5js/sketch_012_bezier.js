var value = 0
var halfWindowW 
var halfWindowH
function setup(){
    createCanvas(windowWidth, windowHeight)
    halfWindowH = windowHeight/2
    halfWindowW = windowWidth/2
    noFill()
    background(0)
    stroke(100, 100, 200)
}

function draw(){

    // bezier(0, halfWindowH,
    //     halfWindowW/4, halfWindowH + value,
    //     halfWindowW*3/4, halfWindowH + value,
    //     windowWidth, halfWindowH)
    // bezier(0, halfWindowH,
    //     halfWindowW*5/4, halfWindowH + value,
    //     halfWindowW*7/4, halfWindowH + value,
    //     windowWidth, halfWindowH)

    bezier(0, halfWindowH,
        halfWindowW/4, halfWindowH + value,
        halfWindowW*3/4, halfWindowH + value,
        halfWindowW, halfWindowH)
    bezier(halfWindowW, halfWindowH,
        halfWindowW*5/4, halfWindowH - value,
        halfWindowW*7/4, halfWindowH - value,
        windowWidth, halfWindowH)
}

function mouseMoved() {
    value = mouseY - halfWindowH
    redraw()
}