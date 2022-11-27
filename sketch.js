var Player1, Temple, canvas, spike;

function preload(){
   Running = loadAnimation("assets/Running1.png", "assets/Running2.png", "assets/Running3.png");
   BackRunning = loadAnimation("assets/Running4.png", "assets/Running5.png", "assets/Running6.png");
   Standing = loadAnimation("assets/Standing.png");
   Templebg = loadImage("assets/Bg.png");
   Jump = loadAnimation("assets/Jump.png");
   Spike = loadImage("assets/Spike.png");
}
function setup(){
    canvas = createCanvas(windowWidth, windowHeight);


    Temple  = createSprite(0,0,1600,800);
Temple.addImage("bg",Templebg);
Temple.scale=1.5;
Temple.x = width/2;

spike  = createSprite(50,520,5,5);
spike.addImage("enemy",Spike);
spike.scale=0.5;
spike.x = width/2;

   Player1 = createSprite(800,480,20,50);
   Player1.addAnimation("running", Running);
  Player1.addAnimation("standing", Standing);
  Player1.addAnimation("backrunning", BackRunning);
  Player1.addAnimation("jumping", Jump);
  


  
  invisibleGround = createSprite(0,545,3500,10);
  invisibleGround.visible = false;
  
}




function draw(){
    background("Bg.png");

    


if(keyDown(UP_ARROW)&& Player1.y>420) {
   Player1.velocityY = -20;
   Player1.changeAnimation("jumping", Jump);
  }

  if(Player1.isTouching(invisibleGround) ){
    Player1.changeAnimation("standing", Standing);
  }


if(keyDown(LEFT_ARROW)){
    Temple.velocityX=7;
    spike.velocityX=7;
    Player1.changeAnimation("backrunning", BackRunning);
}

if (keyWentUp(LEFT_ARROW)){
    Temple.velocityX=0;
        spike.velocityX=0;
    Player1.changeAnimation("standing", Standing);
}

if(keyDown(RIGHT_ARROW)){
    Temple.velocityX=-8;
    spike.velocityX=-8;
    Player1.changeAnimation("running", Running);
}

if (keyWentUp(RIGHT_ARROW)){
    Temple.velocityX=0;
    spike.velocityX=0;
    Player1.changeAnimation("standing", Standing);
}

Player1.velocityY = Player1.velocityY + 0.8





Player1.velocityY = Player1.velocityY + 0.8



Player1.collide(invisibleGround);
   

    drawSprites();

    
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }