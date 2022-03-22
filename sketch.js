var table
var player1
var computer
var comptScore=0
var playerScore=0
var leftend
function preload(){
table=loadImage("assets/table.png");
player1=loadImage("assets/right.png");
compt=loadImage("assets/left.png") ; 
ball1=loadImage("assets/ball.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);

//  table1=createSprite(width,height);
  //table1.addImage(table);
  //table1.scale=2.5
  player=createSprite(988,395);
  player.addImage(player1);
  player.scale=3
  player.debug=true;
  player.setCollider("circle",-20,-20,10)
  computer=createSprite(394,394);
  computer.addImage(compt);
  computer.scale=3
  computer.debug=false
  computer.setCollider("circle",-9,-19,10)
  ball=createSprite(419,336);
  ball.addImage(ball1);
  ball.scale=0.05
  ball.velocityX=9
  ball.y=random(260,500)
 // leftend=createSprite(48,300,50,400)
  //leftend.debug=true
  //reset=createButton(28,97,33,49)
}
function draw() {
  background(table);
  textSize(24)
  text("To move Player1 = w-up ,s-down",105,128)
  text("To move Player2 = Up arrow ,Down arrow",897,125)
  fill('rgb(100%,0%,10%)');
  text("Player1 Score: "+ comptScore, 108,87);
  text("Player2 Score:"+playerScore,893,87)
  ball.velocityX=9
  if(ball.y>260&&ball.y<500)
  {
 // computer.y=ball.y;
  }
  if(keyDown("W")&&computer.y>260){
    computer.y-=5
  }
  if(keyDown("S")&&computer.y<500){
    computer.y+=5
  }
  if(keyDown("UP_ARROW")&&player.y>260){
    player.y-=5
  }
  if(keyDown("DOWN_ARROW")&&player.y<500){
    player.y+=5
  }
  if(ball.x<114&&ball.velocityX!=0){
    playerScore+=1
    ball.velocityX=0
    ball.y=player.y
    ball.x=player.x-50
    ball.velocityX-=5
  }
  if(ball.x>1244&&ball.velocityX!=0){
    comptScore+=1
    ball.velocityX=0
    ball.y=computer.y
    ball.x=computer.x+50
    ball.velocityX+=5
  }
  if(playerScore==5||comptScore==5){
  playerScore=0
  comptScore=0
  ball.velocityX=8
  ball.y=random(260,500)
  ball.x=419

  }
  /*if(keyDown("LEFT_ARROW")){
    ball.y+=5
  }
  if(keyDown("RIGHT_ARROW")){
   ball.y-=5
  }*/
  if(ball.isTouching(player)){
    ball.velocityX=-1*ball.velocityX
  }
  if(ball.isTouching(computer)){
    ball.velocityX=-1*ball.velocityX
  }
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)  
  drawSprites();
}