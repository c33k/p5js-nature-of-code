const mag = () => {
  const sketch = p => {
    let center;

    p.setup = () => {
      p.createCanvas(640, 240);
      center = p.createVector(p.width/2, p.height/2);
    }
    
    p.draw = () => {
      p.clear();
      drawBorder();

      const mouse = p.createVector(p.mouseX, p.mouseY);
      mouse.sub(center);

      p.push();
      p.translate(center.x, center.y);
      p.line(0, 0, mouse.x, mouse.y);
      p.pop();

      const vecMag = mouse.mag();

      p.fill(0);
      p.rect(0, 0, vecMag, 10);
    }
    
    function drawBorder() {
      p.noFill();
      p.rect(0,0, p.width, p.height);
    }
  };
  
  let node = document.createElement('div');
  document.getElementsByTagName('body')[0].appendChild(node);
  new p5(sketch, node);
};

