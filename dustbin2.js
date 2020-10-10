class Dustbin2 {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':1.0,
        'friction': 1.5,
        'restitution':0.5,isStatic : true

      };
      this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER)
        rect (0,0,this.width,this.height)
        
        pop();
    };
  };
  1