class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage("sprites/sling1.png");
        
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1, 200, 20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke("#47DEBC")
            if(pointA.x < 220){
            strokeWeight(7);
            }else{
            strokeWeight(3);
            }
            line(pointA.x-25, pointA.y, pointB.x, pointB.y);
        }
    }
    
}