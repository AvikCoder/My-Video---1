const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
  world = engine.world
  
  //create the bodies here
 
  
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  fill(7,97,255)
  strokeWeight(10);
  stroke("yellow")
}


//function mouseDragged() {
  //Matter.Body.setPosition(bo1.body, {x: mouseX , y: mouseY});
//}

//function mouseReleaesed(){
  //laun.fly();
//}