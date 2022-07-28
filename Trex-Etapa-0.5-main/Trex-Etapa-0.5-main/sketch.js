var trex, trex_running, edges;
var groundImage;
var chaocolate;
var chaodraxemmovimentosinsanamentelentosqueotornaminvisivel;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
 
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
 
  chaocolate=createSprite(200,180,400,20);
  chaocolate.addImage("fogo/molhado",groundImage);
  
  chaodraxemmovimentosinsanamentelentosqueotornaminvisivel=createSprite(200,190,400,10);
  chaodraxemmovimentosinsanamentelentosqueotornaminvisivel.visible=false;
}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
 
  chaocolate.velocityX=-2
 
 if (chaocolate.x<0){
 
  chaocolate.x=chaocolate.width/2;
 }
 
  //registrando a posição y do trex
  console.log(trex.y)
  
  //pular quando tecla de espaço for pressionada
  if((keyDown("space")|| keyDown("UP_ARROW"))&& trex.y>=160){
  
    trex.velocityY = -11.5;
  }
  
  trex.velocityY = trex.velocityY +0.7;
  
 //impedir que o trex caia
  trex.collide(chaodraxemmovimentosinsanamentelentosqueotornaminvisivel)
  
  drawSprites();
}




