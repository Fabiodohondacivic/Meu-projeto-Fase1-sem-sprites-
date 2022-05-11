var iniciar;
var fase1,fase2;
var JOGAR;
var FIM;
var LOBBY;
var FASE1;
var FASES;
var estadoJogo = "LOBBY";
var grupoIniciar;
var ground,av;
var obstaculo;
var puloInv;

function setup() {
  createCanvas(1920,900);
  iniciar = createSprite(900,500,300,200);
  iniciar.shapeColor = "black";
  iniciar.visible = false;
  fase1 = createSprite(600,500,200,500);
  fase1.shapeColor = "blue";
  fase2 = createSprite(1200,500,200,500);
  fase2.shapeColor = "yellow";
  fase1.visible = false;
  fase2.visible = false;
  ground = createSprite(960,900,1920,30);
  ground.shapeColor = "brown";
  ground.visible = false;
  av = createSprite(100,870,20,40);
  av.shapeColor = "green";
  av.visible = false;
  //puloInv = createSprite(960,870,1920,10);
}

function draw() {
  background(255,255,255); 
  if(estadoJogo === "LOBBY"){
    iniciar.visible = true;
  }
  if(estadoJogo === "FASES"){
    fase1.visible = true;
    fase2.visible = true;
    iniciar.visible = false;
  }
  if(mousePressedOver(iniciar) && estadoJogo === "LOBBY"){
    estadoJogo = "FASES";
  }
  if(mousePressedOver(fase1) && estadoJogo === "FASES"){
   estadoJogo = "FASE1";
   
  }
  
  if(estadoJogo === "FASE1"){
  ground.visible = true;
  av.visible = true;
  fase1.visible = false;
   fase2.visible = false;
 }
 if(keyDown(LEFT_ARROW)&& estadoJogo === "FASE1"){
  av.x = av.x -10
 }
 if(keyDown(RIGHT_ARROW)&& estadoJogo === "FASE1"){
  av.x = av.x +10
 }
 if(keyDown(UP_ARROW)&& estadoJogo === "FASE1" && av.isTouching(ground)){
  av.y = av.y -160;
  av.velocityY = +6.5;
 }
 
 /*if(keyDown(DOWN_ARROW)&& estadoJogo === "FASE1"){
  av.y = av.y +10
 }*/
 if(av.isTouching(ground)){
  av.y = 870;
 }
 if(frameCount%60===0 && estadoJogo === "FASE1"){
  gerarObstaculos();

 }
 
  drawSprites();
}
function gerarObstaculos(){
  obstaculo = createSprite(1920,870,50,50);
  obstaculo.shapeColor = "lightblue";
  obstaculo.velocityX = -20;
  obstaculo.lifetime = 95;

}