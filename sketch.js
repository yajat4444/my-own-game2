var database;
database=firebase.database();
var PLAY3 = 4;
var PLAY1 = 1;
var PLAY2 =3;
var END = 0;
var START =2;
var dragged=5;
var gameState = START;
var players=[];
var P1;
var P2;
var P3;
var P4;

players=[P1,P2,P3,P4];
P1="politician-s-fight/P1";
P2="politician-s-fight/P2";
P3="politician-s-fight/P3";
P4="politician-s-fight/P4";
var objects=[];
objects=[o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12,o13];
var p1=createSprite(100,200,40,20);
var p2=createSprite(100,200,40,20);
var p3=createSprite(100,200,40,20);
var p4=createSprite(100,200,40,20);
var m,a,r,s;
p1=P1;
p2=P2;
p3=P3;
p4=P4;
var o1=createSprite(65,300,20,10);
var o2=createSprite(145,307,20,10);
var o3=createSprite(175,318,20,10);
var o4=createSprite(200,300,20,10);
var o5=createSprite(244,300,20,10);
var o6=createSprite(295,300,20,10);
var o7=createSprite(330,305,20,10);
var o8=createSprite(370,305,20,10);
var o9=createSprite(20,375,20,10);
var o10=createSprite(70,375,20,10);
var o11=createSprite(130,375,20,10);
var o12=createSprite(185,375,20,10);
var o13=createSprite(244,375,20,10);

var bb,b,co,i,lsw,rw,sb,s,st,ww,t,tbhsbt,w;


function preload(){
  p1=loadImage("../images/modi.jpg",m);
  p2=loadImage("../images/amit.png",a);
  p3=loadImage("../images/rahul.png",r);
  p4=loadImage("../images/sonia.png",s);
 
  o1.loadImage("../images/big bomb.png",bb);
  o2.loadImage("../images/box.png",b);
  o3.loadImage("../images/cutting objects.png",co);
  o4.loadImage("../images/ice.png",i);
  o5.loadImage("../images/L-shaped wall.png",lsw);
  o6.loadImage("../images/replacing wall.png",rw);
  o7.loadImage("../images/small bomb.png",sb);
  o8.loadImage("../images/spike.png",s);
  o9.loadImage("../images/star.png",st);
  o10.loadImage("../images/weak wall.png",ww);
  o11.loadImage("../images/thorns.png",t);
  o12.loadImage("../images/two boxes having space between them.png",tbhsbt);
  o13.loadImage("../images/wall.png",w);
  playSound("audio.mp3", true);
}
function setup() {
  database=firebase.database();
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  
}

function draw() {
background("white");




p1.scale=0.5;
p2.scale=0.5;
p3.scale=0.3;
p4.scale=0.2;
p5.scale=0.43;
p6.scale=0.5;
p7.scale=0.37;
p8.scale=0.5;
o1.scale=0.1;
o2.scale=0.13;
o3.scale=0.16;
o4.scale=1;
o5.scale=1;
o6.scale=1;
o7.scale=1;
o8.scale=1;
o9.scale=1;
o10.scale=1;
o11.scale=1;
o12.scale=1;
o13.scale=1;


drawSprites();
}
function display(){
  Players=new players;
}
function lines(){
stroke("blue");
line(215,281,215,354);
line(0,280,400,280);
line(127,280,127,354);
line(0,354,400,354);
line(163,280,163,354);
line(183,280,183,353);
line(272,280,272,354);
line(36,355,36,400);
line(104,355,104,400);
line(152,355,152,400);
line(213,355,213,400);
}
function mouseDragged(){
    if(gameState!=="dragged"){
      objects.setPosition(objects.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased(){
    gameState="dragged";
}