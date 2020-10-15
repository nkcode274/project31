const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground

var particles = [];
var plinkos =[];
var divisions = [];
var divisionHeight=300;


function setup() {
  createCanvas(480,800);

  ground = new Ground(240,780,480,20);

  engine=Engine.create();
  world=engine.world
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  if(frameCount % 60 === 0) {
     particle = new Particles(random(120,400),0,7,random(0,360))
     particles.push(particle)
  }

 for(var j = 0; j < particles.length; j++){
  particles[j].display();
}

 for(var k = 0; k < divisions.length; k++){
 divisions[k].display();
}

for(var b = 0; b < plinkos.length; b++){
  plinkos[b].display();
 }

for(var k = 0; k<= width; k=k+80){
divisions.push(new Division(k,height.divisionHeight/2,10,divisionHeight));
}

for (var j = 40; j <= width; j = j+50){
  plinkos.push(new Plinko(j,75));
}

for (var j = 15; j <= width-10; j = j+50){
  plinkos.push(new Plinko(j,175));
}

ground.display()

}