
class Capture {
    constructor(p5, frameN) {
        this.p5 = p5
        this.capture = new CCapture({
            format: 'gif',
            workersPath: 'ccapture.js/src/',
            framerate: this.p5._targetFrameRate
        })
        // 如果需要导出动图，需要抗锯齿
        this.p5.setAttributes('antialias', true)
        this.caping = false
        this.frameN = frameN
        this.cap = function () {
            if (this.p5.frameCount >= 1) {
                if (!this.caping) {
                    this.capture.start()
                    this.caping = !this.caping
                }
                this.capture.capture(document.getElementById('defaultCanvas0'))
                if (this.caping && this.p5.frameCount >= this.frameN) {
                    noLoop()
                    this.capture.stop()
                    this.capture.save()
                    this.caping = !this.caping
                }
            }
        }
    }
}
