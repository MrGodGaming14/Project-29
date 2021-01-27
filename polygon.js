class Polygon {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.image = loadImage("polygon.png");

      this.body = Bodies.circle(50, 200, 20, options);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        //pos.x = mouseX;
        //pos.y = mouseY;
  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        imageMode(CENTER);
        image(this.image, 0, 0, 100, 100);
        //rect(0, 0, this.width, this.height, 50, 50);
        pop();
      }
    };
