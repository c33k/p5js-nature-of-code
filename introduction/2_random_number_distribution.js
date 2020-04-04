const randomNumbersDistribution = () => {
    const sketch = p => {
        const frequency = {};

        p.setup = function() {
            p.createCanvas(640, 240);
        };

        p.draw = function () {
            drawBorder();

            p.strokeWeight(2);
            p.fill(200);

            // count the number of times each number from 0-9 is picked
            const number = p.int(p.random(10));
            frequency[number] = frequency[number]+1 || 1;
            p.rect(number * 64, p.height - frequency[number], 64, frequency[number]);
        };

        function drawBorder() {
            p.noFill();
            p.rect(0,0, p.width, p.height);
        }
    };

    let node = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(node);
    new p5(sketch, node);
};

