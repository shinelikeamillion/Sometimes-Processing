num = 1
size = 0
setup = _ => {
    createCanvas(300, 300)
    frameRate(3)
}
draw = _ => {
    background(255)
    num = map(mouseX, 0, width, 1, 20, true);
    size = width / num;

    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            x = i * size
            y = j * size
            r = random()
            if (r < 0.5) line(x, y, x + size, y + size)
            else line(x + size, y, x, y + size)
        }
    }
}