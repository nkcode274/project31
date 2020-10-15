class Plinko{
    constructor(x, y, radius) {
        var options = {
            isStatic:true
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, this.radius, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle= this.body.angle;
  
        push();
        var pos = this.body.position;
        fill ("orange")
        ellipseMode(CENTER)
        ellipse(this.body.position.x, this.body.position.y,this.raidus,this.radius)
        translate(pos.x,pos.y);
        rotate(angle);
        pop();
      }
  }