const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,340,80,80);
    box2 = new Box(920,340,80,80);
    box3 = new Box(780, 240, 80, 80);
    box4 = new Box(890, 240, 80, 80);
    box5 = new Box(835, 220, 80, 80);
    
    pig1 = new Pig(835, 355);
    pig2 = new Pig(835, 265);

    log1 = new Log(835, 290, 250, PI/2);
    log2 = new Log(835, 230, 250, PI/2);
    log3 = new Log(790, 170, 160, PI/6);
    log4 = new Log(880, 170, 160, -PI/6);

    ground = new Ground(600,390,1200,20);

    bird1 = new Bird(200, 200, 40, 40);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}