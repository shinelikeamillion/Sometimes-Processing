/**
 * 一个简单的系统，系统整齐的分配一些人，人与人之前互相影响
 * 同与活跃分子的距离和自己的受影响因子有关系
 */

class Person {
    constructor(px, py, index) {
        this.index = index;
        this.px = px;
        this.py = py;
        this.shake = 3;
        this.personility = random(300);
        this.coutWake = 0;
        this.size = 10;
    }
    display () {
        push();
        translate(this.px, this.py);
        if(this.coutWake < this.personility && this.personility < 290) {
            fill(0)
            ellipse(0, 0, 10, 10);
        } else {
            fill(255)
            ellipse(random(-this.shake, this.shake),
            random(-this.shake, this.shake), 10, 10);
            pushOthers(this.index);
        }
        pop();
    }
    push() {
        if(this.coutWake < this.personility)
            this.coutWake ++;
    }
}

/** 推动其他人
 * 规则，一个人一旦动起来则开始推动前后左右四位同学
 * 注意上下左右的边界
 */
function pushOthers(index) {
    // 推动左右但没换行的同学
    if(index-1 >= 0 && persons[index].py == persons[index - 1].py)
        persons[index-1].push();

    if(index+1 < persons.length && persons[index].py == persons[index + 1].py)
        persons[index+1].push();

    if(index-num > 0 && persons[index].px == persons[index-num].px)
        persons[index - num].push();
    if(index+num < persons.length && persons[index].px == persons[index + num].px)
        persons[index+num].push(); 
}

var persons = new Array();
var space = 5;
var num;

var startDrawing = false;

function setup() {
    createCanvas(400, 400);
    smooth();
    noStroke();
    frameRate(20)
    // 为舍弃小数点后，调试很久。。
    num = (int)(width / 15);
    for(var i = 0; i < num; i++) {
        for(var j = 0; j < num; j++) {
            persons[j + i*num] = new Person((j+1) * 15 - 5, (i + 1) * 15 - 5, j + i*num);
        }
    }
}

function draw() {
    background(135);
    if(!startDrawing) return;
    persons.forEach(function(person){
        person.display();
    });
}

function mouseClicked() {
    startDrawing = !startDrawing;
}

