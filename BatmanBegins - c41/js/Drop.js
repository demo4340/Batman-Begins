class Drops {

    constructor(x, y){

        var dropsOptions = {

            friction : 0.001,
            restituution : 0.1

        }

        this.body = Bodies.circle(x, y, 5, dropsOptions);
        this.r = 5;
        World.add(world, this.body);

    }

    update(){

        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x: random(0, 800), y: random(0, 800)});

        }

    }

    display(){

        var pos = this.body.position;
        
        fill ("lightblue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.r, this.r);
        

    }

}