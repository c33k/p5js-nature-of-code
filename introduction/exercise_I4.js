// Consider a simulation of paint splatter drawn as a collection of colored dots. 
// Most of the paint clusters around a central location, but some dots do splatter 
// out towards the edges. Can you use a normal distribution of random numbers to 
// generate the locations of the dots? Can you also use a normal distribution of 
// random numbers to generate a color palette?

const exerciseL4 = () => {
    const sketch = p => {
        //let R = 255; // representes the RED coordinate of the base color
        let color = undefined;
        
        p.setup = () => {
            p.createCanvas(640, 640);
            color = p.createVector(
                p.int(p.random(255)),
                p.int(p.random(255)),
                p.int(p.random(255))
            )
        }
        
        p.draw = () => {
            drawBorder();
        
            const x = p.randomGaussian(p.width/2, 80);
            const y = p.randomGaussian(p.height/2, 80);

            let xNorm = x - (p.width/2);

            if (xNorm < 0)
                xNorm = -xNorm;

            /*const R = p.randomGaussian(128, 100);
            const G = p.randomGaussian(128, 100);
            const B = p.randomGaussian(128, 100);
            let C = p.int(255 * xNorm / (p.width/2));*/

            // the more to the border, the bigger the transparency
            const alpha = 255 - p.int(255 * xNorm / (p.width/2));

            p.noStroke();
            p.fill(color.x, color.y, color.z, alpha);
            p.ellipse(x, y, 16, 16);
        }
        
        function drawBorder() {
            p.noFill();
            p.rect(0,0, p.width, p.height);
        }
    };
    
    let node = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(node);
    new p5(sketch, node);
}

