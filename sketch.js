
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   mango1 = new Mango(400,400,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  mango1.display();
  drawSprites();
 
}



