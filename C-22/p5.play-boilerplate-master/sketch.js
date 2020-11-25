//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var groundObj, ballObj;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic: true
  }

  groundObj = Bodies.rectangle(200, 375, 400, 50, options);
  World.add(myworld, groundObj);
  
  ballObj = Bodies.circle(200, 100, 20, {restitution: 0.8});
  World.add(myworld, ballObj);

}

function draw() {
  background("black");

  Engine.update(myengine);

  var pos = groundObj.position;
  var ballPos = ballObj.position;

  //console.log(rectObj.position);
  
  rectMode(CENTER);
  fill("brown");
  rect(pos.x, pos.y, 400, 50);

  ellipseMode(RADIUS);
  fill("darkblue");
  ellipse(ballPos.x, ballPos.y, 20);
}