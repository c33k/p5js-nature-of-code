const LEFT = 0;
const RIGHT = 1;
const UP = 2;
const DOWN = 3;

const pointWeight = 2;

let walker = undefined;

function setup() {
    createCanvas(640, 480);

    walker = new Walker(createVector(width/2, height/2));
}

function draw() {
    walker.step(random(-pointWeight, pointWeight), random(-pointWeight, pointWeight));
    walker.draw();
}

class Walker {
    constructor(position) {
        this.position = position;
    }

    step(x, y) {
        this.position.x += x;
        this.position.y += y;
    }

    draw() {
        stroke(0);
        strokeWeight(pointWeight);
        point(this.position.x, this.position.y);
    }
}