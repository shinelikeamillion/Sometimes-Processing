var singleNotes;
var savedTime = 0;
var totalTime = 2000;
var notes;
var savedTime;
var totalTime = 3000;
var index = 0;
var textSize = 0;
var stop = false;
var textColor = 255;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    textSize(windowHeight/2);
  }

function preload() {
    singleNotes = new Array("A","B","C","D","E","F","G");
    notes = new Array();
    for(var i = 0; i < singleNotes.length; i++) {
        notes[i] = loadSound('assets/'+singleNotes[i]+'.mp3');
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(windowHeight/2);
    textFont("Arial");
    noStroke();
    textAlign(CENTER, CENTER);
    notes[index].play();
}

function draw() {
    background(0);
    fill(constrain(textColor, 0, 255));
    text(singleNotes[index], width/2, height/2);
    if (!stop && millis() - savedTime > totalTime) {
        
        textColor = 255;
        index = int(random(singleNotes.length));
        notes[index].play();
        savedTime = millis();
    } else if (!stop) {
        textColor -= 2;
    }
}

function keyPressed() {
    stop = !stop;
}