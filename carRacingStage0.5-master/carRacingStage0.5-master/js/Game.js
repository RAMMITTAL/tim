class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    } 
    car1 = createSprite(100,200)
    car2 = createSprite(250,200)
    car3 = createSprite(450,200)
    car4 = createSprite(650,200)
    cars =[car1,car2,car3,car4]
  }
  play(){
  form.hide()
  Player.getplayer()
  if(allplayers!==undefined){
      var index = 0,x = 0,y = 0
      for(var i in allplayers){
       index = index+1
       x = x+250
       y = displayHeight-allplayers[i].distance
       cars[index-1].x = x
        cars[index-1].y = y
        if(index===player.index){
      cars[index-1].shapeColor = "blue"  
		}
	  }
  }
  if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance =player.distance+100
      player.update()
  }
  drawSprites()
  }

}
