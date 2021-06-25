const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
function preload(){
bg = loadImage("images/iss.png");
sleep = loadAnimation("images/sleep.png");
brush = loadAnimation("images/brush.png");
gym  =loadAnimation("images/gym21.png","images/gym22.png");
eat = loadAnimation("add image urls here");
drink = loadAnimation("add image urls here");
move = loadAnimation("add image urls here");

}

function setup() {
  createCanvas(400,400)
  engine=Engine.create();
  world=engine.world;
astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

Up Arrow = brushing
Down Arrow = gymming;
Left Arrow = eating;
Right Arrow = bathing;
m key = moving;
}

function draw() 
{
background("blue");
Engine.update(engine)  

if(keyDown("Up_ARROW")){
  astronaut.addAnimation("brushing",brush),
  astronaut.changeAnimation("brushing"),
  astronaut.y=350,
  astronaut.velocityX = 0,
astronaut.velocityY = 0,
}
if(keyDown("Down_ARROW")){
  astronaut.addAnimation("gymming",gym),
  astronaut.changeAnimation("gymming"),
  astronaut.y=-350,
  astronaut.velocityX = 0,
astronaut.velocityY = 0,
}

if(keyDown("Left_ARROW")){
  astronaut.addAnimation("eating",eat),
  astronaut.changeAnimation("eating"),
  astronaut.x=350,
  astronaut.velocityX = 0,
astronaut.velocityY = 0,
}

if(keyDown("Right_ARROW")){
  astronaut.addAnimation("bathing",bath),
  astronaut.changeAnimation("bathing"),
  astronaut.x=-350,
  astronaut.velocityX = 0,
astronaut.velocityY = 0,
}


}

