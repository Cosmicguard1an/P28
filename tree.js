class Tree {
    constructor() {
       var options = {
           isStatic: true
       }
       this.body = Bodies.rectangle(800,400,600,600,options)
       this.image = loadImage("tree.png")
       World.add(world,this.body)
    }

    display() {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,600,600)

    }
}