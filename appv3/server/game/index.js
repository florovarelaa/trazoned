const simulatedPlayers = require('./simulatedPlayers')
const Board = require('./Board')

const playersColors = [
  '#214dfc',
  '#fc2145'
]

class Game {
    constructor(boardSize, numberOfSteps, initialUnitsHealth) {
      this.id = Math.random()
      this.boardSize = boardSize % 2 == 0 ? boardSize + 1 : boardSize // the boardSize has to be odd
      this.board = new Board(boardSize)
      this.currentFase = 0
      this.futureBoardState = this.createFutureBoardState(boardSize, numberOfSteps) 
      this.initialUnitsHealth = initialUnitsHealth 
      this.isGameOver = false
      this.numberOfSteps = numberOfSteps
      this.players = {}
      this.winner = null
      this.playersColors = playersColors
    }
    addPlayer(id_player) {
        if(Object.keys(this.players).length === 0) {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
          this.players[id_player].setId(id_player)
          let playerStartingPosition = this.getPlayerStartingPosition()
          this.players[id_player].setStartingPosition(playerStartingPosition)
          this.players[id_player].setColor(this.playersColors[0])
        } else if (Object.keys(this.players).length === 1) {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
          this.players[id_player].setId(id_player)
          let playerStartingPosition = this.getPlayerStartingPosition()
          this.players[id_player].setStartingPosition(playerStartingPosition)
          this.players[id_player].setColor(this.playersColors[1])
        } else { 
        console.log('Too many players')
        return false;
      }
    }
    removePlayer(socketId) {
      delete this.players[socketId]
      console.log('after removeee', this.players)
    }
    createBoard(boardSize) {
      let board = new Array(boardSize).fill(null).map(() => new Array(boardSize).fill(null));
      return board;
    }
    createFutureBoardState(boardSize, numberOfSteps) {
      let futureBoardState = new Array(numberOfSteps)
      futureBoardState = futureBoardState.map( element => {
        return new Board(boardSize)
      })
      return futureBoardState
    }
    nextFase() {
      console.log('nextFase')
    }
    initPlayersUnitsSteps() {
      let players = Object.values(this.players)
      players.forEach( player => {
        player.units.forEach( unit => {
          unit.initializeSteps(this.numberOfSteps)
        })
      })
    }
    initPlayersUnitsStartingPositions() {
      Object.keys(this.players).forEach(player => {
        this.players[player].units = this.players[player].units.map( (unit, index) => {
          let position = JSON.parse(JSON.stringify(this.players[player].getStartingPosition()))
          position.x = position.x + index
          unit.setPosition(position)
          console.log('unit: ', unit.name, unit.position)
          return unit;
        });
      })
    }
    getPlayerStartingPosition() {
      let playerIndex = Object.values(this.players).length - 1
      let startingPosition;
      switch(playerIndex) {
          case 0: {
              startingPosition = {x: Math.floor(this.boardSize/2), y: 0 }
              break;
          }
          case 1: {
              startingPosition = {x: Math.floor(this.boardSize/2), y: this.boardSize - 1}
              break;
          }
          case 2: {
              startingPosition = {x: 0, y: Math.floor(this.boardSize/2)}
              break;
          }
          case 3: {
              startingPosition = {x: this.boardSize - 1, y: Math.floor(this.boardSize/2)}
              break;
          }
          
      }
      return startingPosition;
    }
}

module.exports = Game;