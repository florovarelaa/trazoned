const Map = require('./Map.js')
const MapState = require('./MapState.js')
const constants = require('./constants');
const simulatedPlayers = require('./Instances/players/simulatedPlayers')

const { mapSize } = constants;

class Game {
    constructor() {
        this.map = new Map(mapSize);
        this.players = [];
        this.mapState = [];
        this.fase = 0;
    }
    init() {
        console.log('Game initializing')
        const player0 = simulatedPlayers.newPlayer0()
        const player1 = simulatedPlayers.newPlayer1()

        this.addPlayer(player0)
        this.addPlayer(player1)

        const playersCells = this.map.getPlayersStartingCells(this.players.length)
        this.players.forEach( (player, index) => {
            player.startingPosition = playersCells[index]
        })

        const initialMapState = new MapState(this.map)
        initialMapState.setPlayers(this.players)
        this.mapState.push(initialMapState)
        this.start()
    }
    addPlayer(player) {
        this.players.push(player)
    }
    start() {
        console.log('game starting')
        console.log('mapState: ', this.mapState[this.mapState.length-1])
        
        // console.log(this.mapState[this.mapState.length - 1].getMapState())
        // console.log('this.players:', this.players)
    }
}

module.exports = Game;