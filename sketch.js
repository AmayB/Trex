var trex, trex_Running, edges;
var ground, groundImage;

function preload() {
  trex_Running = loadAnimation("trex1.png","trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600,600);

  trex = createSprite(200,180,50,50);
  trex.addAnimation("running", trex_Running);
  edges = createEdgeSprites();

  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite(200,180,600,600);
  ground.addImage("ground", groundImage);
  ground.x = ground.width/2;
}

function draw() {
  background("white");

  ground.velocityX = -2;
  console.log(ground);

  if(ground.x<0) {
    ground.x = ground.width/2;
  }

  if(keyDown("space")) {
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;

  trex.collide(ground);
  drawSprites();
}