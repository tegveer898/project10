var sea , ship;
var seaImg,shipImg;
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(1400,600);
  sea=createSprite(200,100,400,200);
sea.addImage("sea",seaImg);
sea.x = sea.width/2;

ship=createSprite(900,300);
ship.addAnimation("ship",shipImg);
ship.scale= 0.6;
}


function draw() {
  sea.velocityX=-9;
 if(sea.x<0){

   sea.x = sea.width/2;
 }
  drawSprites();
}