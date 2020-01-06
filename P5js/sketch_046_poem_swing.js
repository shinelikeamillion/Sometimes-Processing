lyrics = '敕勒川，阴山下，\
天似穹庐，笼罩四野。\
天苍苍，野茫茫，\
风吹草低见牛羊。\
敕勒川，阴山下，\
天似穹庐，笼罩四野。\
天苍苍，野茫茫，\
风吹草低见牛羊。\
敕勒川，阴山下，\
天似穹庐，笼罩四野。\
天苍苍，野茫茫，\
风吹草低见牛羊。\
敕勒川，阴山下，\
天似穹庐，笼罩四野。\
天苍苍，野茫茫，\
风吹草低见牛羊。\
天苍苍，野茫茫，\
风吹草低见牛羊。'

setup = _ => {
    createCanvas(600, 600)
    // noLoop()
    capture = new CCapture({
        format: 'gif',
        workersPath: 'ccapture.js/src/',
        verbose: true,
        framerate: 60
    })
}
draw = _ => {
    capture.start()
    translate(width / 2, height / 2)
    background(255)
    // beginShape()
    for (let i = 0; i < width / 2 - 10; i++) {
        t = map(sin(frameCount / 20), -1, 1, 15 * TWO_PI + PI, 16 * TWO_PI + PI)
        p = map(i, 0, width / 2, 0, t)
        y = i * sin(p)
        x = i * cos(p)
        // vertex(x, y)
        // line(x, y, x, y + map(i, 0, width / 2, 2, 20))
        textSize(int(i / 20 + 3))
        text(lyrics[i % lyrics.length], x, y)
    }
    capture.capture(document.getElementById('defaultCanvas0'))
    // 由上面可知道周期为 TWO_PI + PI 250
    if (frameCount >= 40*PI) {
        noLoop()
        capture.stop()
        capture.save()
    }
}
