
let lines = function ($) {
    $.setup = $.draw = _ => {
        var container = $.select('#container')
        $.createCanvas(container.width, container.height)

        $.noLoop()
        $.strokeWeight(0.5)
        $.num = 3
        $.size = 300 / 7
        for (let i = 0; i < $.height; i += 2) {
            $.line(0, i, $.width, i)

            if ((i > $.size && i < 2 * $.size)
                || (i > 3 * $.size && i < 4 * $.size)
                || (i > 5 * $.size && i < 6 * $.size)) {
                for (let j = 0; j < $.num; j++) {
                    s = $.sin(i / 50 + j * $.PI / 2) * 2
                    // s = noise(i/100 + j*10) * 3
                    $.line((2 * j + 1) * $.size, i - 1, (2 * j + 2) * $.size, i + s)
                }
            }
        }
    }
};

let a = function ($) {

    $.step = 9
    $.rate = 0
    $.preload = _ => {
        $.bg = $.loadImage('./sources/dylan.jpg')
    }
    $.setup = _ => {
        var container = $.select('#container')
        $.createCanvas(container.width, container.height)
        rate = $.bg.width < $.bg.height ? $.bg.width / $.width : $.bg.height / $.height
        $.noLoop()
        $.noStroke()
        $.fill(0)
    }
    $.draw = _ => {
        for (let y = 0; y < $.height; y += $.step) {
            $.beginShape()
            $.b = []
            // x/step 应该很好理解，x+= step 会造成很多空数据
            for (let x = 0; x < $.width; x += $.step) {
                $.b[x / $.step] = $.map($.brightness($.bg.get(x * $.rate, y * $.rate)), 0, 100, $.step / 2, 0)

                $.vertex(x, y - $.b[x / $.step])
                // >= 至关重要( 为 ！（x < width）)
                if (x + $.step >= $.width) {
                    for (let x1 = x; x1 >= 0; x1 -= $.step) {
                        $.vertex(x1, y + $.b[x1 / $.step])
                    }
                }
            }
            $.endShape()
        }
    }

}

var displays = [lines];
