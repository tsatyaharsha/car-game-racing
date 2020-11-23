class Game{
    constructor(){
        
    }
getState(){
database.ref('gameState').on("value",function(data){
     gameState=data.val()
})
}
updateState(state){
    database.ref('/').update({
        gameState:state
    })
}
start(){

if (gameState===0){
    player=new Player()
  player.getCount()
  form=new Form()
  form.display()
}
car1=createSprite(200,400)
car2=createSprite(400,400)
car3=createSprite(600,400)
car4=createSprite(800,400)
cars=[car1,car2,car3,car4]
}
play(){
   background("white") 
   if (allplayers !== undefined){
       var index=0
       var x=0
        var y=0
        for(var plr in allplayers){
            index=index+1
            x=x+200
            y=displayHeight-allplayers[plr].distance
            cars[index-1].x=x
            cars [index-1].y=y
            if(index==player.index){
                car[index-1].shapeColor="red"
            }
        } 
   }
   if (keyDown(UP_ARROW)){
       player.distance=player.distance+1
       player.update()
   }
   drawSprites()
}
}