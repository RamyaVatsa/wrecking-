const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine , world
var ground , ball, rope 
var box1=[]
var box3=[]
var box2=[]
function setup(){
createCanvas(1000,800)
engine=Engine.create();
world=engine.world;
ground=new Ground(500,590,1000,5);
for (var index = 560; index > 60; index=index-50) {
    box1.push(new Box (600,index,50,50))
}
for (var index = 560; index > 60; index=index-50) {
  box2.push(new Box (550,index,50,50))
}
for (var index = 560; index > 60; index=index-50) {
  box3.push(new Box (500,index,50,50))
}
ball=new Ball(350,350,80,80);
rope=new Rope(ball.body,{x:350,y:100});

console.log(box1.length)
}

function draw(){
background("lightblue")
Engine.update(engine)
ground.display();


for (var index = 0; index < box1.length; index++) {
  fill("pink") 
  box1[index].display();
   
}
for (var index = 0; index < box2.length; index++) {
  fill("yellow")
  box2[index].display();
}
for (var index = 0; index < box3.length; index++) {
  fill("crimson")
  box3[index].display();
}

ball.display();
rope.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}