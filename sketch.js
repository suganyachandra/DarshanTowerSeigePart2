const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground ;
var b1,b2,b3,b4,b5;
var a1,a2,a3,a4;
var c1,c2,c3;
var polygon,slingShot;

var polygon_img;
function preload(){
    polygon_img=loadImage("polygon.png");
  }
function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
       ground = new Ground(600,300,250,20);
       //polygon = new Polygon(200,50)
       b1 = new Box(500,265,50,50);
       b2 = new Box(550,265,50,50);  
       b3 = new Box(600,265,50,50);      
       b4 = new Box(650,265,50,50);      
       b5 = new Box(700,265,50,50);    
       a1 = new Box(520,215,50,50);      
       a2 = new Box(570,215,50,50);      
       a3 = new Box(620,215,50,50);      
       a4 = new Box(670,215,50,50);    
       c1 = new Box(540,165,50,50); 
       c2 = new Box(590,165,50,50);  
       c3 = new Box(640,165,50,50);   

         //polygon holder with slings
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);
        slingShot = new SlingShot(this.polygon,{x:200,y:50});
    }
function draw(){
    background(0);

    ground.display();
   // polygon.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    a1.display();
    a2.display();
    a3.display();
    a4.display();
    c1.display();
    c2.display();
    c3.display();
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();

    drawSprites();
   
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
  }