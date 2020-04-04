const gaussianOnWidth = () => {
    const sketch = p => {
        p.setup = () => {
            p.createCanvas(640, 240);
        }
        
        p.draw = () => {
            drawBorder();
        
            const x = p.randomGaussian(p.width/2, 60); // median and deviation, respectively

            p.noStroke();
            p.fill(40, 10);
            p.ellipse(x, p.height/2, 16,16);
        }
        
        function drawBorder() {
            p.strokeWeight(1);
            p.noFill();
            p.rect(0,0, p.width, p.height);
        }
    };
    
    let node = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(node);
    new p5(sketch, node);
}

