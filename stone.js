class Stone {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution:0.8,
            friction:0.3,
            density:0.3
        }
        this.body = Bodies.circle(x,y,r,options)
        this.image = loadImage("stone.png");
        this.r = r
        World.add(world,this.body);
    }

    display() {
        imageMode(RADIUS);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

    }
}


