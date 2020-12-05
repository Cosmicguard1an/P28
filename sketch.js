const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1
var tree1
var stoneObj
var mango1,mango2,mango3,mango4,mango5
var rope1

var gameState = "onSling"


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	boy1 = new Boy();
	stoneObj = new Stone(200,450,50);
	tree1 = new Tree();
	mango1 = new Mango(800,300,50);
	mango2 = new Mango(750,300,50);
	mango3 = new Mango(825,400,50);
	mango4 = new Mango(840,260,50);
	mango5 = new Mango(800,325,50);
	rope1 = new Rope(stoneObj.body,{x: 175,y: 400});
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");

  stoneObj.display();
  boy1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope1.display();
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)

}

function mouseDragged() {
	if(gameState==="onSling") {
		Matter.Body.setPosition(stoneObj.body,{x: mouseX, y: mouseY});
	}
	
}

function mouseReleased() {
	rope1.fly();
	gameState = "launched";
}


function keyPressed() {
	if(keyCode===32) {
		Matter.setPosition(stoneObj.body, {x: 175, y:400})

	}
}

function detectCollision(lstone,lmango) {
	mangoPos = lmango.body.position;
	stonePos = lstone.body.position;

	var distance = dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y);

	if(distance<= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body,false);
	}
	
}



