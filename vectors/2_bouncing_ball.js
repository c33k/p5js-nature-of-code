const rad =  10;
let speed, position = undefined;

function setup() {
    createCanvas(640, 480);
    speed = createVector(4, 4);
    position = createVector(rad, rad);

}

function draw() {
    clear();
    drawBorders();

    if(position.x-rad < 0 || position.x+rad >= width) {
        speed.x *= -1;
    }

    if(position.y-rad < 0 || position.y+rad >= height) {
        speed.y *= -1;
    }

    position.add(speed);

    drawBall(position, rad);
}

function drawBorders() {
    background(255);
    strokeWeight(2);
    noFill();    
    rect(0, 0, width, height);
}

function drawBall(position, rad) {
    stroke(0);
    strokeWeight(1);
    fill(100);
    ellipse(position.x, position.y, rad*2, rad*2);
}