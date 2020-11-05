var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car= createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  car .shapeColor=color(225);
  wall= createSprite(1300, 200, 60, height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);
  touch();
  drawSprites();
}


function touch(){
  if(wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    
    if(deformation>180){
      car.shapecolor=color("red");
    }                                                                                                  
    
    if(deformation<180 && deformation>100){
      car.shapecolor=color("yellow");
    }
    
    if( deformation<100){
      car.shapecolor=color("green");
    }
    
      } 
}