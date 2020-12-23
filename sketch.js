var bullet , wall ;
var speed,weight ,thickness;


function setup() {
  createCanvas(1600,400);
  
 
  thickness=Math.round(random(20,21));
  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor = color("white");
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80)
 
  speed =Math.round(random (55,90));
  weight=Math.round(random(30,52));
 
  
bullet.velocityX=speed 

  }

function draw() {
  background(0);
  text(thickness,100,200)
  if (wall.x-bullet.x<(bullet.width+wall.width)/2)  {
 
    bullet.velocityX=0 ; 
   var damage=(0.5*weight*speed*speed)/thickness*thickness*thickness ;
   
text(damage,1000,200);
 if (damage>=10){
   bullet.shapeColor =color ("red");

 }
 if (damage<10){
bullet.shapeColor=color("green")
 }
  }

  drawSprites();}
