modes = []
color = []
setup = _ => {
    createCanvas(300, 300)
    // strokeWeight(10)
    // noFill()
    colorMode(HSB, 100);
    noLoop()
    smooth()
    modes = [
        NORMAL,
        BLEND,
        DARKEST,
        LIGHTEST,
        DIFFERENCE,
        MULTIPLY,
        EXCLUSION,
        SCREEN,
        OVERLAY,
        HARD_LIGHT,
        SOFT_LIGHT,
        DODGE,
        BURN,
        ADD,
        // REPLACE,
    ]
    color = [
        color(random(100), 120, 120), color(random(100), 120, 120), color(random(100), 120, 120),
        // color(255, 0, 0), color(0, 255, 0), color(0, 0, 255),
    ]
}
draw = _ => {
    for (i = 0; i < modes.length; i++) {
        n = Math.ceil(sqrt(modes.length))
        size = Math.floor(width / n)
        x = (i % n) * size
        y = Math.floor((i / n)) * size
        drawTile(x, y, size, modes[i])
    }
}

function drawTile(x, y, size, mode) {
    offset = Math.floor(size / 8);

    push()
    blendMode(mode)
    translate(x + size / 2, y + size / 2)
    noStroke()
    fill(color[0])
    ellipse(-offset * cos(PI / 6), -offset * sin(PI / 6), size / 2)
    fill(color[1])
    ellipse(offset * cos(PI / 6), -offset * sin(PI / 6), size / 2)
    fill(color[2])
    ellipse(0, offset, size / 2)

    fill(0)
    textAlign(CENTER)
    textSize(10);
    text(mode, 0, 4 * offset);
    pop()
}