var singleNotes;
var savedTime = 0;
var totalTime = 2000;
var notes;
var savedTime;
var totalTime = 3000;
var index = 0;
var textSize = 0;
var stop = false;

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
    fill(255);
    textAlign(CENTER, CENTER);
    notes[index].play();
}

function draw() {
    background(0);
    var passedTime = millis() - savedTime;
    text(singleNotes[index], width/2, height/2);
    if(stop) return;
    if (passedTime > totalTime) {
        
        index = int(random(singleNotes.length));
        notes[index].play();
        savedTime = millis();
    }
}

function keyPressed() {
    stop = !stop;
}