class Form{
constructor(){
    this.element=createElement('h2','car racing game')
    this.input=createInput('name')
 this.button=createButton('play')
 this.reset=createButton('reset')
}

display(){

    this.element.position(130,0)


    this.input.position(130,160)


    this.button.position(130,200)
this.reset.mousePressed(()=>{
    database.ref('/').update({
        gameState:0,
        playerCount:0,
        players:null
    })
})
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        this.element.hide()
        player.name=this.input.value()
        player.update()
    playerCount=playerCount+1
    player.index=playerCount
    player.updateCount(playerCount)
    var greating=createElement('h4','hello'+player.name)
greating.position(250,200)
})
}


}