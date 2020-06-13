size = 6
gap = 2
var loopN, loopY
setup = _ => {
    createCanvas(500, 500)
    // 调整噪音函数生成噪音特征及细节度
    noiseSeed(100)
    noiseDetail(2, 0.2)
    rectMode(CENTER)
    stroke(255)
    noFill()
    num = floor(width / (size + gap))
    margin = (width % (size + gap)) / 2
    // noLoop()
    loopN = new LoopNoise(width / 2)
    loopY = new LoopNoise(width / 2)
    // capture = new Capture(this, 360)
}
draw = _ => {
    background(0)
    translate(width / 2, height / 2)
    for (i = -num / 4; i < num / 4; i++) {
        beginShape()
        for (j = -num / 4; j < num / 4; j++) {

            x = margin + j * (size + gap) - loopY.getNoise(frameCount + i) * 100
            y = margin + i * (size + gap) - loopN.getNoise(frameCount + j) * 200
            vertex(x, y)
        }
        endShape()
    }

    // capture.cap()
}

function LoopNoise(size) {
    this.a = 0
    this.size = size
    this.getNoise = function (j) {
        this.a = radians(j % 360)
        let x = this.size * cos(this.a) * 0.02
        let y = this.size * sin(this.a) * 0.02
        let n = noise(x, y)
        return n
    }
}