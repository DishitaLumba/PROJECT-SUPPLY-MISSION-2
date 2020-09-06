var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftSide,leftSide_Sprite,rightSide,rightSide_Sprite,base,base_sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	base_Sprite=createSprite(width/2, height-35, 200,10);
	base_Sprite.shapeColor=color(255,0,43);

	leftSide_Sprite= createSprite(300,height-80,20,100);
	leftSide_Sprite.shapeColor=color(255,0,43);

	rightSide_Sprite= createSprite(500,height-80,20,100);
	rightSide_Sprite.shapeColor= color(255,0,43);


	engine = Engine.create();
	world = engine.world;
	
	var options = {
		'isStatic':true
	}
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	keyPressed();
	

	//Create a Base
	base = Bodies.rectangle(400, height-50, 200, 10, {isStatic:true} );
	World.add(world, base);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false); 
    
    }
}



