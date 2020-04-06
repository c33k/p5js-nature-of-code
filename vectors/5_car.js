const car = () => {
  const sketch = p => {
    class Car {
      constructor(x, y) {
        this.location = p.createVector(x, y);
        this.velocity = p.createVector(0, 0);
        this.aceleration = p.createVector(0, 0);
        this.acelerationStep = 0.1;
        this.topSpeed = 20;
        this.breaking
      }
  
      acelerate() {
        this.breaking = false;
        this.aceleration.x = this.acelerationStep;
      }
  
      break() {
        this.breaking = true;
        this.aceleration.x = -this.acelerationStep; 
      }
  
      move() {
        this.velocity.add(this.aceleration);

        if(this.breaking && this.velocity.x <= 0) {
          this.velocity.x = 0;
        } else {
          this.velocity.limit(this.topSpeed);
        }

        this.location.add(this.velocity);
        this.normalizeLocation();
      }
  
      draw() {
        p.fill(100);
        p.ellipse(this.location.x, this.location.y, 16, 16);
      }
  
      normalizeLocation() {
        if (this.location.x < 0) this.location.x = p.width;
        else if (this.location.x > p.width) this.location.x = 0;
  
        if (this.location.y < 0) this.location.y = p.height;
        else if (this.location.y > this.height) this.location.y = 0;
      }
    }

    let car;

    p.setup = () => {
      p.createCanvas(640, 240);
      car = new Car(p.width/2, p.height/2);
    }
    
    p.draw = () => {
      p.clear();
      drawBorder();
      car.move();
      car.draw();
    }
    
    p.keyPressed = () => {
      if (p.keyCode === p.UP_ARROW) {
        car.acelerate();
      } else if (p.keyCode === p.DOWN_ARROW) {
        car.break();
      }
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

