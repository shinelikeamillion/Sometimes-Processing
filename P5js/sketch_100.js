var simple = function ($) {
    var x = 0;
    var y = 100;

    //always put the paramater if you call p5 element
    $.setup = function () {
        $.createCanvas(200, 200);
    }

    $.draw = function () {
        $.background(0, 0, 200);
        //draw some animation
        $.rect(!(x > 200) ? x++ : x = 0, y, 10, 10);
    }
};