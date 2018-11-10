/**
 * 一个简单的系统，系统整齐的分配一些人，人与人之前互相影响
 * 同与活跃分子的距离和自己的受影响因子有关系
 */

class Person {
    constructor(px, py, index) {
        this.index = index;
        this.px = px;
        this.py = py;
        this.shake = 4;
        this.personility = random(200);
        this.coutWake = 0;
        this.size = 10;
    }
    display () {
        push();
        translate(this.px, this.py);
        if(this.coutWake < this.personility) {
            ellipse(0, 0, 10, 10);
        } else {
            ellipse(random(-this.shake, this.shake),
            random(-this.shake, this.shake), 10, 10);
            pushOthers(this.index);
        }
        pop();
    }
    push() {
        this.coutWake ++;
    }
}

/** 推动其他人
 * 规则，一个人一段动力起来则开始推动前后左右四位同学
 * 注意上下左右的边界
 */
function pushOthers(index) {
    // 推动左右但没换行的同学
    if(index-1 > 0 && persons[index].py == persons[index - 1].py)
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
function setup() {
    createCanvas(400, 400);
    smooth();
    noStroke();
    // 为舍弃小数点后，调试很久。。
    num = (int)(width / 15);
    for(var i = 0; i < num; i++) {
        for(var j = 0; j < num; j++) {
            persons[j + i*num] = new Person((j+1) * 15 - 5, (i + 1) * 15 - 5, j + i*num);
        }
    }
}

function draw() {
    background(0);
    persons.forEach(function(person){
        person.display();
    });
    persons[0].shake = 4;
    persons[0].personility = 17;
    persons[0].push();
}

