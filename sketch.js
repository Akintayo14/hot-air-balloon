var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obstacleTop, obsTop1, obsTop2;
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3;

function preload() {
    bgImg = loadImage("assets/bg.png");
    balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

    obsTop1 = loadImage("assets/obsTop1.png");
    obsTop2 = loadImage("assets/obsTop2.png");

    obsBottom1 = loadImage("assets/obsBottom1.png")
    obsBottom2 = loadImage("assets/obsBottom2.png")
    obsBottom3 = loadImage("assets/obsBottom3.png")


}

function setup(){
    bg= createSprite(165,485,1,1);
    bg.addImage(bgImg);
    bg.scale = 1.3;

    bottomGround= createSprite(200,390,800,20);
    bottomGround.visible = false;

    topGround= createSprite(200,10,800,20);
    topGround.visible = false;

    balloon = createSprite(100,200,20,50);
    balloon.addAnimation("balloon",balloonImg);
    balloon.scale = 0.2;

}

function draw(){
    background("black");
    if(keyDown("space")) {
        balloon.velocityY = -6 ;
        
      }

      //adding gravity
       balloon.velocityY = balloon.velocityY + 2;
       Bar();
       spawnObstacleTop();
       
    drawSprites();
}

function spawnObstacleTop(){
    if(World.frameCount % 60 == 0){
       obstacleTop = createSprite(400, 50, 40, 50);
       obstacleTop.scale = 0.1;
       obstacleTop.velocityX = -4;
       obstacleTop.y = Math.round(random(10,100));
       var rand = Math.round(random(1,2));
 
       switch(rand){
        case 1 : obstacleTop.addImage(obsTop1);
                    break;
        case 2 : obstacleTop.addImage(obsTop2);
                    break;
        default : break;
       }

       obstacleTop.lifetime = 100;
       balloon.depth = balloon.depth+1;
    }

}

function Bar (){
    if(World.frameCount % 60 == 0){
        var bar = createSprite(400,200,10,100);
        bar.velocityX = -6;
        bar.depth = balloon.depth;
        bar.lifetime = 70;
        bar.visible = false;
    }
}