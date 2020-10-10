
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	image1 = loadImage("dustbingreen.png"); 
}

function setup() {
	createCanvas(800, 700);	
	engine = Engine.create();
	world = engine.world;


	ground1 = new Ground(400,650,800,15)
	paper = new Paper(200,200,80)
	dustbin = new Dustbin(500,600,20,100)
	dustbin = new Dustbin(650,600,20,100)
	dustbin2 = new Dustbin2(500,600,20,100)
	

	Engine.run(engine);
  
}


function draw() {
	background ("yellow")

  rectMode(CENTER);
  
 ground1.display()
 paper.display()
 dustbin.display()
 dustbin2.display()
 image(image1,482,500,185,150)


  drawSprites();
 
}

function keyPressed () {

Matter.Body.applyForce(paper.body,paper.body.position,{x:200,y:-200})


}

