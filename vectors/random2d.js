const random2D = () => {
  let location, velocity;

  const sketch = p => {
    let xoff = 0.0;
    
    p.setup = () => {
      p.createCanvas(640, 240);
      location = p.createVector(p.width/2, p.height/2);
      velocity = p.createVector(0, 0);
    }
    
    p.draw = () => {
      p.clear();
      drawBorder();

      const accMagX = p.map(p.noise(xoff), 0, 1, -1, 1);
      const accMagY = p.map(p.noise(xoff+1000), 0, 1, -1, 1);
      xoff += 0.01;
      const aceleration = p.createVector(accMagX, accMagY);

      velocity.add(aceleration);
      velocity.limit(5);
      location.add(velocity);

      if(location.x - 10 < 0) location.x = 10;
      else if(location.x + 10 > p.width) location.x = p.width - 10;

      if(location.y - 10 < 0) location.y = 10;
      else if(location.y + 10 > p.height) location.y = p.height - 10;

      p.fill(100);
      p.ellipse(location.x, location.y, 20, 20);
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

