const rad =  20;

let xSpeed = 4;
let ySpeed = 4;
let xDirection = 1;
let yDirection = 1;
let x = rad;
let y = rad;

function setup() {
    createCanvas(640, 480); 
}

function draw() {
    clear();
    drawBorders();
    setupBrush();

    if(x-rad < 0 || x+rad >= width) {
        xSpeed *= -1;
    }

    if(y-rad < 0 || y+rad >= height) {
        ySpeed *= -1;
    }

    x += xSpeed;
    y += ySpeed;

    ellipse(x, y, rad*2, rad*2);
}

function drawBorders() {
    strokeWeight(2);
    noFill();    
    rect(0, 0, 640, 480);
}

function setupBrush() {
    stroke(0);
    strokeWeight(1);
    fill(100);
}