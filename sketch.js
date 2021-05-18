const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight=150;
var score = 0;
var count = 0;
var gameState ="start";

function setup() {
  createCanvas(810, 620);
  engine = Engine.create();
  world = engine.world;
   
   for(var k = 5; k <=width; k = k+80){
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, 400));}

   for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,120))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,150))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,265))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,305))
  }
  ground = new Ground(width/2,height,width,20);
  ground1=new Ground(240,630,5000,10);
  //ground = new Ground(240,630,5000,10);
  //ground1 = new Ground(40,320,5000,10);

}
 
function draw() {
  background("black");


  fill("white")
  textSize(25)
  text("Score : "+score,20,40);
  text("500",5+15,400)
  text("500",80+15,450)
  text("500",160+15,500)
  text("500",240+15,550)
  text("100",320+15,600)
  text("100",400+15,600)
  text("100",480+15,550)
  text("100",560+15,500)
  text("100",640+15,450)
  text("100",720+15,400)
  Engine.update(engine);
  ground.display();
  ground1.display();
  
  
  if ( count===5) {
    gameState ="end";
    textSize(50);
    fill("red")
    text("G a m e  O v e r", 200, 240);
  }

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }

  for (var i = 0; i < particles.length; i++) {
     particles[i].display();
      
     if (particles[i].body.position.x < 320 && particles[i].body.position.y>480) {
      score=score+500;
     particles.pop();
     }
     else if (particles[i].body.position.x > 320 && particles[i].body.position.y>480) {
      score = score + 100;
     particles.pop();

    }
  }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}
function mousePressed(){
  if(gameState!=="end"){
     count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   

}