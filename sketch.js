var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(400, 100, 50, 80);
  rect1.shapeColor = "green";
  rect1.debug = true;
  rect2 = createSprite(100, 400,80,30);
  rect2.shapeColor = "green";
  rect2.debug = true;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

 rect1.velocityX = -2;
 rect1.velocityY = 2;
rect2.velocityX = 2;
rect2.velocityY = -2;
}

function draw() {
  background(0,0,0);  
 bounceoff(rect1, rect2)
 bounceoff(movingRect, fixedRect) 
 drawSprites();
}









