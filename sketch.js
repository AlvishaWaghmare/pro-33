const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snow,bg,girl,canvas;


function preload(){
  bg=loadImage("snow2.jpg");
  snow=loadImage("snow4.webp");
  girl=loadImage("girl.png");

}
function setup() {
  canvas=createCanvas(1200,500);
  engine=Engine.create();
  world= engine.world

  var optionG={
    isStatic:true
  }
  
  girl1=Bodies.rectangle(200,450,100,100,optionG);
  World.add(world,girl1);


 var optionS={
    isStatic:false
  }
  
  snow1=Bodies.rectangle(200,0,100,100,optionS);
  World.add(world,snow1);
  

}

function draw() {
  background(bg);  
  Engine.update(engine);
  imageMode (CENTER);
  image(girl,girl1.position.x,girl1.position.y,100,100);
  drawSprites();
}