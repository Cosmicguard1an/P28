const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy1,boyImg
var tree1, treeImg
var stoneObj
var mango1,mango2,mango3,mango4,mango5
var rope1

var gameState = "onSling"


function preload() {
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png")
}
function setup() {
	createCanvas(1200, 700);
	boy1 = createSprite(200,600,10,10);
	boy1.addImage(boyImg)
	boy1.scale = 0.1
	//tree1 = createSprite(800,400,10,10);
	//tree1.addImage(treeImg);
	//tree1.scale = 0.5
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	stoneObj = new Stone(200,450,50);
	

	//image(treeImg,800,400,400,500)
	mango1 = new Mango(800,300,50);
	mango2 = new Mango(750,300,50);
	mango3 = new Mango(825,400,50);
	mango4 = new Mango(840,260,50);
	mango5 = new Mango(800,325,50);
	rope1 = new Rope(stoneObj.body,{x: 150,y: 550});
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  drawSprites();

  stoneObj.display();
  boy1.display();
  image(treeImg,600,200,400,500)
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

  drawSprites();
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
		Matter.Body.setPosition(stoneObj.body, {x: 175, y:400})
		rope1.attach(stoneObj.body);

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



