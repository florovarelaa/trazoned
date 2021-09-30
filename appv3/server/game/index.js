const simulatedPlayers = require('./simulatedPlayers')
const Board = require('./Board')

const boardSize = 11
const numberOfSteps = 2
const initialUnitsHealth = 10

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
      let player
      if(Object.keys(this.players).length === 0) {
        player = simulatedPlayers[0]
        
      } else if (Object.keys(this.players).length === 1) {
        player = simulatedPlayers[1]
        
      } else { 
        console.log('Too many players')
        return false;
      }
      player.setId(id_player)
      this.players[id_player] = player
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
}

module.exports = Game;