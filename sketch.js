function preload(){
  bg= loadImage("iss.png");
 sleep=loadAnimation("sleep.png");
 brush=loadAnimation("brush.png");
 gym=loadAnimation("gym11.png","gym12.png");
 eat=loadAnimation("eat1.png","eat2.png");
 drink=loadAnimation("drink1.png","drink2.png");
 move=loadAnimation("move.png","move.png","move1.png","move1.png");
 bath=loadAnimation("bath1.png","bath2.png");
}



function setup() {
  createCanvas(800,600);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;
}


function draw() {
  background(bg);  
 
edges=createEdgeSprites();
 astronaut.bounceOff(edges);
  drawSprites();

  textSize(25);
  fill("white");
  text("INSTRUCTION:",400,200);
  text("Up Arrow = Brushing",400,250);
  text("Down Arrow = Gymming",400,300);
  text("Left Arrow = Eating",400,350);
  text("Right Arrow = Bathing",400,400);
  text("m_key = Moving",400,450);
      


       if(keyDown("UP_ARROW")){
         astronaut.addAnimation("brushing",brush);
         astronaut.changeAnimation("brushing");
         astronaut.y=350;
         astronaut.velocityX=0;
         astronaut.velocityY=0;
       }

       if(keyDown("Down_Arrow")){
         astronaut.addAnimation("gymming",gym);
         astronaut.changeAnimation("gymming");
         astronaut.y=350
         astronaut.velocityX=0;
         astronaut.velocityY=0;
       }


       if (keyDown("Left_Arrow")){
        astronaut.addAnimation("eating",eat);
        astronaut.changeAnimation("eating");
        astronaut.y=350;
        astronaut.velocityX=0;
        astronaut.velocityY=0;
       }

       if(keyDown("Right_Arrow")){
        astronaut.addAnimation("bathing",bath);
        astronaut.changeAnimation("bathing");
        astronaut.y=350;
        astronaut.velocityX=0;
        astronaut.velocityY=0;
       }

       if(keyDown("m")){
        astronaut.addAnimation("moving",move);
        astronaut.changeAnimation("moving");
        astronaut.y=200;
       astronaut.x=200;
        astronaut.velocityX=1;
        astronaut.velocityY=1;
       }
}