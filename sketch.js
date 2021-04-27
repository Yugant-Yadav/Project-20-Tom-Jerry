var cat, catImg1, garden, gardenImg, mouse, mouseImg1;
var catImg2, mouseImg2;

function preload() {
//load the images here
gardenImg = loadImage("garden.png");
catImg1 = loadAnimation("images/cat1.png");
mouseImg1 = loadAnimation("images/mouse1.png");
catImg2 = loadAnimation("cat2.png", "cat3.png");
mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
createCanvas(1000,800);
//create tom and jerry sprites here
cat = createSprite(400, 200, 0, 0);
cat.addAnimation("catRunning",catImg2);
cat.changeAnimation("catRunning")
cat.scale = 3

mouse = createSprite(500, 200, 0, 0);
mouse.addAnimation("mouse",mouseImg2);
}

function draw() {

    background(Garden,"gardenImg");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
