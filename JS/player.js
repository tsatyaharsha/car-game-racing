class Player{
    constructor(){
     this.index=null
     this.name=null
     this.index=0   
    }
getCount(){
database.ref('playerCount').on("value",function(data){
 playerCount=data.val()
})
}
updateCount(Count){
    database.ref('/').update({
        playerCount:Count
    })
}
getplayerinfo(){
var playerinfo=database.ref('players').on("value",(data)=>{
    allplayers=data.val()
}) 
}
update(){
    var playerindex="players/player"+this.index;
    database.ref(playerindex).update({
        name:this.name,
        distance:this.distance
    })
}
}
