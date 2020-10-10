class Paper {
    constructor(x, y,r) {
      var options = {
        'density':1.2,
        'friction': 0,
        'restitution':0.3,isStatic : false

      };
      this.body = Bodies.circle(x, y,r/2, options);
     this.r = r
     this.image = loadImage("paper.png"); 
      World.add(world, this.body);

    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
     // ellipse (0,0,this.r,this.r)
     imageMode(CENTER);
     image(this.image, 0, 0, this.r, this.r); 
      pop();
    };
  };
  