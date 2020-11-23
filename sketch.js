var hypnoticBall, database;
var position;
var game,player,form,gameState=0,playerCount=0
var car1,car2,car3,car4,cars;
var allplayers
function preload() {
  
}
function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
game=new Game()
game.getState()
game.start()
}

function draw(){
    if(playerCount===4){
      gameState=1
    }
    if(gameState===1){
  game.play()
    }
}

