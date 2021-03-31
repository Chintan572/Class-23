
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(200,200,50,50);

    box2 = new Box(300,300,50,50);

    ground = new Ground(200,height,800,20);

    
}

function draw(){
    background(0);
    Engine.update(engine);

    box.display();

    box2.display();

    ground.display();
   
}

