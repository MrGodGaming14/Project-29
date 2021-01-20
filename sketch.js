const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var polygon;

function setup() {
    var canvas = createCanvas(1200, 500);
    engine = Engine.create();
    world = engine.world;

    stand = new Ground(635, 450, 600, 20);

    block1 = new Box(410,320,70,70);
    block2 = new Box(480,320,70,70);
    block3 = new Box(550,320,70,70);
    block4 = new Box(620,320,70,70);
    block5 = new Box(690,320,70,70);
    block6 = new Box(760,320,70,70);
    block7 = new Box(830,320,70,70);

    block8 = new Box(480,250,70,70);
    block9 = new Box(550,250,70,70);
    block10 = new Box(620,250,70,70);
    block11 = new Box(690,250,70,70);
    block12 = new Box(760,250,70,70);

    block13 = new Box(550,180,70,70);
    block14 = new Box(620,180,70,70);
    block15 = new Box(690,180,70,70);

    block16 = new Box(620,110,70,70);

    polygon = new Polygon(200,50);

    slingShot = new SlingShot(polygon.body,{x:200, y:50});

}

function draw() {
    background("#382C2C");
    Engine.update(engine);

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    polygon.display();
    slingShot.display();
}

