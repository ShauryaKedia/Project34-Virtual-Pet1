//Create variables here
var dog, dogImg, happyDogImg,  database, foodS, foodStock, milkBottle;

function preload(){
  dogImg = loadImage("Dog.png")
  happyDogImg = loadImage("happydog.png")

}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.15;
  


  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){ 
     dog.addImage(happyDogImg);
     }

     fill(0)
     text("Press UP_Arrow key to feed the drago Milk", 250,400)
     text("Food remaining :"+foodS, 170,200)




  drawSprites();

}

function readStock(data){
     foodS=data.val();
}

function writeStock(x){

  if(x<=0){
      x=0;
  }
  else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}

