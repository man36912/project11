var pathImg,boyImg;
var path,boy,barrier1,barrier2;

function preload(){
  //pre-load images
 pathImg = loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  boy = createSprite(250,300);
  boy.addAnimation("boyAnm",boyImg);
  boy.scale = 0.1;

  barrier1 = createSprite(0,0,100,800);
  barrier1.visible = false;
  barrier2 = createSprite(410,0,100,800);
  barrier2.visible = false;
}

function draw() {
  background(0);

  boy.x=World.mouseX;

boy.collide(barrier1);
boy.collide(barrier2);

if(path.y > 400) {
  path.y = height/2;
}
/*if(keyDown(LEFT)) {
  boy.x = boy.x - 10;
}
if(keyDown(RIGHT)) {
  boy.x = boy.x + 10;
}*/

drawSprites();
}
