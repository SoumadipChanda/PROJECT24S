const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;
var box1,box2,box3;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
	//Create the Bodies Here.
  paper = new Paper(200,550,20);
  ground = new Ground(400,650,800,20);
  box1 = new Box(500,640,100,20);
  box2 = new Box(550,600,20,100);
  box3 = new Box(450,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();


  
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-18});
  }
}


