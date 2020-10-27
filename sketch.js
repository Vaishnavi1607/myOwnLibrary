var movingRect,fixRect;
var ob1,ob2,ob3,ob4;



function setup() {
  createCanvas(1200,400);
  ob1=createSprite(100,100,50,50)
  ob2=createSprite(300,100,50,50)
  ob3=createSprite(500,100,50,50)
  ob4=createSprite(1200,100,50,50)

  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  fixRect=createSprite(400,200,70,50);
  fixRect.shapeColor="green";

   ob3.velocityX=2;
   ob4.velocityX=-2;

}

function draw() {
  background(0,0,0); 

   movingRect.y=mouseY;
   movingRect.x=mouseX;

   if(isTouching(movingRect,ob1))
   {
    movingRect.shapeColor="red";
    ob1.shapeColor="red";
   }
      else
      {
        movingRect.shapeColor="green";
     // fixRect.shapeColor="green";
      }
 
      bounceOff(ob3,ob4);
      

      
   
  
  drawSprites();

}




