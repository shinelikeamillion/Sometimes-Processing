size = 6
noiseS = 0.1
gap = 2
setup = _ => {
    createCanvas(500, 500)
    rectMode(CENTER)
    stroke(255)
    noFill()
    num = floor(width / (size + gap))
    margin = (width % (size + gap)) / 2

}
draw = _ => {
    background(0)
    for (i = num / 4; i < num - num / 4; i++) {
        beginShape()
        for (j = num / 4; j < num - num / 4; j++) {
            // 调整噪音函数生成噪音特征及细节度
            noiseDetail(2, 0.2)
            noiseV = noise((frameCount / 4 + j) * noiseS,
                (frameCount / 4 + i) * noiseS)

            x = margin + j * (size + gap) + (size + gap) / 2
            y = margin + i * (size + gap) + (size + gap) / 2

            vertex(x + 100 * noiseV - 30, y + 100 * noiseV - 30)
        }
        endShape()
    }
}