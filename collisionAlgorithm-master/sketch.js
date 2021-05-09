var Rect1, Rect2, Rect3, Rect4, movingRect;


function setup() {
  createCanvas(1200,800);
  Rect1 = createSprite(random(0,1150), random(0,720), 50, 80)
  Rect1.shapeColor = "blue"
  Rect2 = createSprite(random(0,1150), random(0,720), 50, 80)
  Rect2.shapeColor = "green"
  Rect3 = createSprite(random(0,1150), random(0,720), 50, 80)
  Rect3.shapeColor = "yellow"
  Rect4 = createSprite(random(0,1150), random(0,720), 50, 80)
  Rect4.shapeColor = "white"
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "red";

}

function draw() {
  background(0,0,0);  
  changeColor(movingRect,Rect1)
  changeColor(movingRect,Rect2)
  changeColor(movingRect,Rect3)
  changeColor(movingRect,Rect4)
  movingRect.x = mouseX
  movingRect.y = mouseY
  
  drawSprites();
}