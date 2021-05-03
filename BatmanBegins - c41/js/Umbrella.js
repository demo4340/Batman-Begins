class Umbrella {

    constructor(x, y){

        var umberellaOptions = {

            isStatic : true

        }

        this.body = Bodies.circle(x, y, 50, umberellaOptions);
        this.r = 50
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y);

    }

}