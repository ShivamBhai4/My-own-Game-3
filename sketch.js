const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var zombie1,zombie1Img,zombie2,zombie2Img;
var bg;
var human1,human1Img,human2,human2Img,human3,human3Img
var agent1,agent1Img,agent2,agent2Img,agent2,agent3Img

function preload(){
zombie1Img = loadImage("images/zombie.png");
bg = loadImage("images/scarybackground.jpg");
zombie2Img = loadImage("images/zombie2.jpg");
agent1Img = loadImage("images/ncp1.png");
human1Img = loadImage("images/human1.png");
agent2Img = loadImage("images/ncp2.png");
agent3Img = loadImage("images/ncp3.png");
human2Img = loadImage("images/human2.png");
human3Img = loadImage("images/human3.jpeg");


}

function setup(){
createCanvas(windowWidth,windowHeight);
zombie1 = createSprite(50,height-100,10,-50);
zombie1.addImage(zombie1Img);
zombie1.scale = 0.1;
zombie1.velocityX = 5;

agentGroup = createGroup();
humanGroup = createGroup();
}    

function draw(){
background(bg);

if (bg.x < 0){
    bg.x = bg.width/2;
  }

spawnAgent();
spawnHuman();

drawSprites()
}

function spawnAgent(){
    if (frameCount % 200 === 0){
      var agent = createSprite(width-100,height-100,10,50);
      agent.velocityX = -6;
   
      
       // //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: agent.addImage(agent1Img);
                 break;
         case 2: agent.addImage(agent2Img);
                 break;
         case 3: agent.addImage(agent3Img);
                 break;                           
        
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       agent.scale = 0.3    ;
       agent.lifetime = 300;
      
      //adding obstacles to the group
      agentGroup.add(agent);
    }
   }

   function spawnHuman(){
    if (frameCount % 200 === 0){
      var human = createSprite(width-100,height-100,10,50);
      human.velocityX = -6;
   
      
       // //generate random obstacles
       var rand = Math.round(random(1,3));
       switch(rand) {
         case 1: human.addImage(human1Img);
                 break;
         case 2: human.addImage(human2Img);
                 break;
         case 3: human.addImage(human3Img);
                 break;                           
        
         default: break;
       }
      
       //assign scale and lifetime to the obstacle           
       human.scale = 0.3    ;
       human.lifetime = 300;
      
      //adding obstacles to the group
      humanGroup.add(human);
    }
   }
   