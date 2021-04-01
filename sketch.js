var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var object1,object2;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
    surface1 = createSprite(100,580,180,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(300,580,180,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(500,580,180,20);
    surface3.shapeColor = "red";

    surface4 = createSprite(700,580,180,20);
    surface4.shapeColor = "green";
    



    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 6;
    box.velocityY = 6;

}

function draw() {
    background(rgb(169,169,169));
 if(isTouching(box,surface3)){
    box.shapeColor = "red";
}else{
    box.shapeColor = "white";
}
     
 
   
    //create edgeSprite
    bounceOff();
drawSprites();


    //add condition to check if box touching surface and make it box

}

function isTouching(object1,object2){
    if(object1.x - object2.x < object2.x/2 - object1.x/2
    && object2.x - object1.x < object2.x/2 - object1.x/2
    && object1.y - object2.y < object2.y/2 - object1.y/2
    && object2.y - object1.y < object2.y/2 - object1.y/2){

            return true;
            
        }else{
            return false;
           
        }
}

function bounceoff(object1,object2){
    if(object1.x - object2.x < object2.x/2 - object1.x/2
    && object2.x - object1.x < object2.x/2 - object1.x/2){
        object1.velocityX = object1.velocityX * (-1);
        object2.velocityX = object2.velocityX * (-1);
    }
}










