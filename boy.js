class Boy {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(175,510,200,300,options);
        this.image = loadImage("boy.png");
        World.add(world,this.body)
    }

    display() {
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,200,300)
    }
    
}