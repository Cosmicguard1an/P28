class Rope {
    constructor(bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 1,
            stiffness: 0.004
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        if(this.rope.bodyA) {
            strokeWeight(5);
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }

    fly() {
        this.rope.bodyA = null;
    }

    attach(body) {
        this.rope.bodyA = body;
    }
}