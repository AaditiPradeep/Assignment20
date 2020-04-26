var car, wall;
var weight, speed;
var deformation;

function setup() {
  createCanvas(1600,400);
   car = createSprite(400, 200, 50, 50);
   car.shapeColor = "white";
   car.velocityX = 5;
   
   weight = random(400,1600);
   speed = random(30,95);
   
  wall = createSprite(1500,200,400,60);
  wall.shapeColor = "purple";
}


function draw() {
  background(0,0,0); 

 deformation = 0.5*weight*speed*speed/22500;
  
  if(wall.x - car.x < car.width/2 + wall.width/2 && deformation<=100){
    car.shapeColor = "green";
    car.velocityX = 0;
  }

  if(wall.x - car.x < car.width/2 + wall.width/2 && deformation>100 && deformation<180 ){
    car.shapeColor = "yellow";
    car.velocityX = 0;
  }

  if(wall.x - car.x < car.width/2 + wall.width/2 && deformation>=180 ){
    car.shapeColor = "red";
    car.velocityX = 0;
  }
  drawSprites();
}