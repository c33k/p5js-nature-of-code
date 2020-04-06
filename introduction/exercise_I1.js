// Create a random walker that has a tendency to move down and to the right.

const exerciseL1 = () => {
    const sketch = p => {
        let walker = undefined;
        const stepSize = 2;
        
        p.setup = () => {
            p.createCanvas(640, 240);
            walker = new Walker(p.createVector(p.width/2, p.height/2));
        };
        
        p.draw = () => {
            drawBorder();
        
            const prob = p.random();
        
            if(prob <= 0.2) // 20% chane of going left
                walker.step(-stepSize, 0);
            else if(prob <= 0.4) // 20% chane of going up
                walker.step(0, -stepSize);
            else if(prob <= 0.7) // 30% chane of going right
                walker.step(stepSize, 0);
            else // 30% chane of going down
                walker.step(0, stepSize);
            
            walker.position.x = normalize(walker.position.x, p.width);
            walker.position.y = normalize(walker.position.y, p.height);
            walker.draw();
        };
        
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



