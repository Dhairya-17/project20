var garden,gardenImg;
var tom,catImg,catImg2,catImg3;
var jerry,mouseImg,mouseImg2,mouseImg3;



function preload() {
    //load the images here
gardenImg=loadImage("images/garden.png");
catImg=loadImage("images/cat1.png")
catImg2=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadImage("images/cat4.png")

mouseImg=loadImage("images/mouse1.png")
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseImg3=loadImage("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(400,250)
    garden.addImage(gardenImg)
    garden.scale=1.5;
   

    //create tom and jerry sprites here

    tom=createSprite(700,650,10,10)
    tom.addImage(catImg)
    tom.scale=0.08;
    tom.debug=true;

   jerry=createSprite(200,650,10,10)
    jerry.addImage(mouseImg)
    jerry.scale=0.08;

}

function draw() {

    background(225);
    drawSprites();
    //Write condition here to evalute if tom and jerry collide
 //For moving and changing animation write code here


if(isTouching(tom,jerry)){

    tom.velocityX=0;
}


}

function keyPressed(){

if(keyDown("LEFT_ARROW")){

    tom.addAnimation("mouseteasing",catImg2)
    tom.changeAnimation("mouseteasing");
    tom.scale=0.09;
    tom.velocityX=-3;
    
}
}
