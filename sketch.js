var path,runner,runnerImage,pathImage,edges,invisibleGround,invisibleGround1;

function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200)
path.addImage(pathImage)
path.velocityY=4
path.scale=1.2


runner=createSprite(200,300,10,20);
runner.addAnimation("moving",runnerImage);
runner.scale=.1;



invisibleGround = createSprite(20,200,50,400);
invisibleGround.visible = false;
velocityY=4

invisibleGround1=createSprite(380,200,50,400)
invisibleGround1.visible=false;
velocityY=4

edges=createEdgeSprites

}

function draw() {
  background(0);
  runner.x=World.mouseX

  if(invisibleGround.y>400){
 invisibleGround.y=height/2
  }
 if(invisibleGround1.y>400){
 invisibleGround1.y=height/2
 }
 
 
 if(path.y>400){
   path.y=height/2
 }
 
 runner.collide(invisibleGround)
 runner.collide(invisibleGround1)
 
 drawSprites();


}
