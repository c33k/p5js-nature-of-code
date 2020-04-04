// Create a random walker with dynamic probabilities. For example, can you give it a 50% chance of moving in the direction of the mouse?

const exerciseL3 = () => {
    const sketch = p => {
        const stepSize = 2;
        let walker;
        
        p.setup = () => {
            p.createCanvas(640, 240);
            walker = new Walker(p.createVector(p.width/2, p.height/2));
        }
        
        p.draw = () => {
            drawBorder();
        
            let prob = p.random();
            const sx = (p.mouseX > walker.position.x)? stepSize : -stepSize;
            const sy = (p.mouseY > walker.position.y) ? stepSize : -stepSize;
        
            if(prob <= 0.5) { // 50% chane of going on the direction of the mouse
                walker.step(sx, sy);
            } else {
                prob = p.random();
        
                if(prob <= 0.25)
                    walker.step(0, -stepSize);
                else if(prob <= 0.5) 
                    walker.step(0, -stepSize);
                else if(prob <= 0.75)
                    walker.step(stepSize, 0);
                else 
                    walker.step(0, stepSize);
            }
            
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
                p.stroke(0);
                p.strokeWeight(stepSize);
                p.point(this.position.x, this.position.y);
            }
        }
    };
    
    let node = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(node);
    new p5(sketch, node);
}

