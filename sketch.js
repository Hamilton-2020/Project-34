//Create variables here


 var dog, happyDog, database, foodS, foodStock, dog1, dog2;
 var dog1img, dog2img;

function preload()
{
  //load images here
  
   dog1img = loadImage("images/dogImg.png")
   dog2img = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  DB = firebase.database()
  Dog1 = createSprite(100, 200)
  Dog1.addImage(dog1img);

  Dog2 = createprite(100,200)
  Dog2.addImage(dog2img);

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  
background(46, 139, 87);
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(Dog1);
}
  drawSprites();
  //add styles here
Text("Note: press up arrow to feed Max milk!");
Text("Milk bottles left:", readStock);
}

function readStock(data){
  foods=data.val();
}

function writeStock(x){
  if(x<=0){
     x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}
