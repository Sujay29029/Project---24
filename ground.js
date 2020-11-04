class Ground {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'isStatic':true,
            'friction':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 1600;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      this.body.color(rgb(255, 255, 0));
      fill(255);
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  