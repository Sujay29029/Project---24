
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box1,box2,box3;



function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,680,10,0);
	box1 = new Box(1100,590,10);
	box2 = new Boxx(1160,650,20);
	box3 = new Boxxx(1220,590,10);
	ball = new Paper(30,650,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(0, 0, 0));
  
	ball.display();
	box1.display();
	box2.display();
	box3.display();
	ground.display();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

