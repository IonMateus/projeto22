const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var objeto1;
var objeto2;
var objeto3;
var teto;
var parede2;
var parede1;
var objeto5,o5;

function preload(){




}

function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var object_options = {restitution: 1.5};
  var object_options1 = {isStatic: true};
  var object_options3 = {restitution: 2.0};
  var tetoo = {isStatic: true};
  var paredee2 = {isStatic: true};
  var paredee1 = {isStatic: true};

  objeto5=createSprite(200,100,10,10);
 

  //dd
  objeto1 = Bodies.rectangle(200, 100, 20, 20, object_options);
  objeto2 = Bodies.rectangle(200, 380, 400, 10, object_options1);
  objeto3 = Bodies.rectangle(220, 200, 10, 10, object_options3);
  teto = Bodies.rectangle(200,10,400,10,tetoo)
  parede1 = Bodies.rectangle(10,200,10,400,paredee1)
  parede2 = Bodies.rectangle(390,200,10,400,paredee2)

  World.add(world, objeto1);
  World.add(world, objeto2);
  World.add(world, objeto3);
  World.add(world, teto);
  World.add(world, parede2);
  World.add(world, parede1);


}

function draw() {
  background(0);
  
  Engine.update(engine);
  rectMode(CENTER);
 
  
 objeto5.shapeColor="red"
 objeto5.velocityY=+3;



  rect(objeto1.position.x, objeto1.position.y, 20, 20);
  rect(objeto2.position.x, objeto2.position.y, 400, 10);
  rect(objeto3.position.x, objeto3.position.y, 10, 10);
  rect(teto.position.x, teto.position.y, 400, 10);
  rect(parede1.position.x, parede1.position.y, 10, 400);
  rect(parede2.position.x, parede2.position.y, 10, 400);





drawSprites();

}
