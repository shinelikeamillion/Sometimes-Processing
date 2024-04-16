size = 20
noiseS = 0.02
gap = 2
setup = _ => {
    createCanvas(500, 500)
    background(175)
    rectMode(CENTER)
    noStroke()
    num = floor(width / (size + gap))
    margin = (width % (size + gap)) / 2
}
draw = _ => {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            // 调整噪音函数生成噪音特征及细节度
            noiseDetail(2, 3)
            noiseV = noise((mouseX + j) * noiseS,
                (mouseY + i) * noiseS)

            y = margin + i * (size + gap) + (size + gap) / 2
            x = margin + j * (size + gap) + (size + gap) / 2

            fill(255 * noiseV)
            rect(x, y, size, size)
        }
    }
}