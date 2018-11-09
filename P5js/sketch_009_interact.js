/**
 * 一个简单的系统，系统整齐的分配一些人，人与人之前互相影响
 * 同与活跃分子的距离和自己的受影响因子有关系
 */

class Person {
    constructor(px, py, index) {
        this.index = index;
        this.px = px;
        this.py = py;
        this.shake = random(5);
        this.personility = random(20);
        this.coutWake = 0;
        this.size = 10;
    }
    display () {
        push();
        translate(this.px, this.py);
        if(this.coutWake < this.personility && this.personility < 18) {
            ellipse(0, 0, 10, 10);
        } else {
            ellipse(random(-this.shake, this.shake),
            random(-this.shake, this.shake), 10, 10);
            if(this.index-1 > 0)
                persons[this.index-1].push();

            if(this.index+1< persons.size)
                persons[this.index+1].push();

            // if(this.index+ num < persons.size)
            //     persons[this.index+=num].push();

            // if(this.index-num > 0)
            //     persons[this.index-=num].push();
        }
        pop();
    }
    push() {
        print(this.index+" been pushed")
        this.coutWake ++;
    }
}

var persons = new Array();
var space = 5;
function setup() {
    createCanvas(400, 400);
    smooth();
    noStroke();
    // 为舍弃小数点后，调试很久。。
    var num = (int)(width / 15);
    for(var i = 0; i < num; i++) {
        for(var j = 0; j < num; j++) {
            persons[j + i*num] = new Person((j+1) * 15 - 5, (i + 1) * 15 - 5);
        }
    }
}

function draw() {
    background(0);
    persons.forEach(function(person){
        person.display();
    });
}

