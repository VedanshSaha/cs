class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  draw(){
    if(gameState === 2){
      fil(0)
      text("You Placed"+player.rank,100,100)
    }
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }


  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getRank(){
    var playerRank = database.ref('Rank');
    playerRank.on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static setRank(rank){
    database.ref('/').update({
      'Rank': rank
    })
  }
}
