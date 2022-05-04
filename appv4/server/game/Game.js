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
        console.log(this.map.playersCells)

        const player0 = simulatedPlayers.newPlayer0()
        const player1 = simulatedPlayers.newPlayer1()

        this.addPlayer(player0)
        this.addPlayer(player1)
        this.start()
    }
    addPlayer(player) {
        this.players.push(player)
    }
    start() {
        console.log('game starting')
        const playersCells = this.map.getPlayersCells()
        this.players.forEach( (player, index) => {
            player.startingPosition = playersCells[index]
        })

        console.log('this.players: ', this.players)
        const startingMapState = new MapState(this.map, this.players)
        this.mapState.push(startingMapState)
        console.log(this.mapState[this.mapState.length - 1].getMapState())
    }
}

module.exports = Game;