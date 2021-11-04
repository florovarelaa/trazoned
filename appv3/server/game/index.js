const simulatedPlayers = require('./simulatedPlayers')
const Board = require('./Board')

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
    }
    addPlayer(id_player) {
      if(Object.keys(this.players).length === 0) {
        if (simulatedPlayers.lastPlayerSimulated === 0) {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
        } else {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
        }
          this.players[id_player].setId(id_player)
          simulatedPlayers.toggleLastCreatedPlayer()
      } else if (Object.keys(this.players).length === 1) {
        if (simulatedPlayers.lastPlayerSimulated === 0) {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
        } else {
          this.players[id_player] = simulatedPlayers.newRandomPlayer()
        }
        this.players[id_player].setId(id_player)
        let playerStartingPosition = this.getPlayerStartingPosition()
        this.players[id_player].setStartingPosition(playerStartingPosition)
        simulatedPlayers.toggleLastCreatedPlayer()
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
      console.log('players: ', players)
      players.forEach( player => {
        player.units.forEach( unit => {
          unit.initializeSteps(this.numberOfSteps)
        })
      })
    }
    getPlayerStartingPosition() {
      let playerIndex = Object.values(this.players).length
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