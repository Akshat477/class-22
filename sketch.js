var rect1,rect2;
var rect3,rect4,rect5

function setup() {
  createCanvas(800,600);
  rect1 =  createSprite(400, 200, 50, 50);
  rect1.shapeColor = "blue"
  rect2 = createSprite(400,300,50,50);
  rect2.shapeColor = "green"
  rect3 = createSprite(400,100,50,50);
  rect3.shapeColor = "blue"
  rect4 = createSprite(400,400,50,50);
  rect4.shapeColor = "blue"
  rect5 = createSprite(400,500,50,50);
  rect5.shapeColor = "blue"
}

function draw() {
  background("black");
  
  rect2.y = World.mouseY;
  rect2.x = World.mouseX;

  if (contact(rect3,rect2)){
   rect3.shapeColor = "orange";
  }
  else{
    rect3.shapeColor = "blue"
  }



  drawSprites();
}

function contact (object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object1.height/2 + object2.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){
  return true
}
  else {
    return false
  }
}