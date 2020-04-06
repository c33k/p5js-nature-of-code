// A Gaussian random walk is defined as one in which the step size (how far the object moves in a given direction) 
// is generated with a normal distribution. Implement this variation of our random walk.

const exerciseL5 = () => {
    const sketch = p => {
        let walker;
        
        p.setup = () => {
            p.createCanvas(640, 240);
            walker = new Walker(p.createVector(p.width/2, p.height/2));
        }
        
        p.draw = () => {
            drawBorder();
        
            const stepSizeX = p.randomGaussian(0, 2);
            const stepSizeY = p.randomGaussian(0, 2);
        
            walker.step(stepSizeX, stepSizeY);
            walker.position.x = normalize(walker.position.x, p.width);
            walker.position.y = normalize(walker.position.y, p.height);
            walker.draw();
        }
        
        function drawBorder() {
            p.noFill();
            p.rect(0,0, p.width, p.height);
        }

        function normalize(coordinate, limit) {
            if (coordinate < 0) return 0;
            if (coordinate > limit) return limit;
            return coordinate;
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
                p.noStroke();
                p.fill(0, 100);
                p.rect(this.position.x, this.position.y, 5, 5);
            }
        }
    };
    
    let node = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(node);
    new p5(sketch, node);
};

