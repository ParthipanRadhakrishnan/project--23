const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase,playerBase
var computerPlayer,player


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  computerBase = new ComputerBase(width-100,random(400,height-100),150,150);
  playerBase = new PlayerBase(200,random(400,height-100),150,150);
  computerPlayer = new ComputerPlayer(width-110,computerBase.body.position.y-150,60,170);
  player = new Player(200,playerBase.body.position.y-150,60,170);
}


function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   playerBase.display();
   //display Player and computerplayer
   computerPlayer.display();
   player.display();
}
