const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dropsObject = [];
var umbrellaObject;
var maxDrops = 100;
var i;
var thunderFrame = 0;
var thunder1, thunder2, thunder3, thunder4, thunder;

function preload(){
    
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");

}

function setup(){

    engine = Engine.create();
    world = engine.world;

    createCanvas(800, 800);

    
    umbrellaObject = new Umbrella(400, 550);

    if(frameCount % 150 === 0){

        for( i = 0; i < maxDrops; i++){

            dropsObject.push(new Drops(random(0, 800), random(0, 800)));
    
        }

    }
    

    
}

function draw(){
    
    background("black");
    Engine.update(engine);

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderFrame=frameCount;
        thunder = createSprite(random(10,770), random(20,50), 10, 10);
        switch(rand){
            case 1: thunder.addImage("thunder",thunder1);
            break;
            case 2: thunder.addImage("thunder",thunder2);
            break; 
            case 3: thunder.addImage("thunder",thunder3);
            break;
            case 4: thunder.addImage("thunder",thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.5,0.9)
    }

if(thunderFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}



    for(i=0; i<maxDrops; i++){

        dropsObject[i].display();
        dropsObject[i].update();

    }

    
    umbrellaObject.display();

    drawSprites();

}   

