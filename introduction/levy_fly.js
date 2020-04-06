const levyFlight = () => {
  const sketch = p => {
      let walker;
      
      p.setup = () => {
          p.createCanvas(640, 240);
          walker = new Walker(p.createVector(p.width/2, p.height/2));
      }
      
      p.draw = () => {
        drawBorder();

        const direction = p.random(2) > 1 ? 1 : -1;
        const step = p.createVector(levy() * direction, levy() * direction);

        walker.walk(step);
        normalize(walker, p.width, p.height);
        walker.draw();
      }
      
      function drawBorder() {
          p.noFill();
          p.rect(0,0, p.width, p.height);
      }

      function levy() {
        while(true) {
          let r1 = p.random(10);
          //let prob = 10 - r1; // complement - the lower the number, the higher is its probability
          //let prob = r1; // monte carlo distribution
          let prob = r1*r1;
  
          let r2 = p.random(10);
  
          if(r2 <= prob)
            return r2 ;
        }
      }

      function normalize(walker, limitW, limitH) {
        if( walker.position.x < 0 ) walker.position.x = 0;
        if( walker.position.y < 0 ) walker.position.y = 0;
        if( walker.position.x > limitW ) walker.position.x = limitW;
        if( walker.position.y > limitH ) walker.position.y = limitH;
      }

      class Walker {
          constructor(position) {
              this.position = position;
          }
      
          walk(direction) {
            this.position.add(direction);
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

