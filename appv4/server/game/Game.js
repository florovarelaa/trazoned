const Map = require('./Map.js')
const MapState = require('./MapState.js')
const constants = require('./constants');
const simulatedPlayers = require('./Instances/players/simulatedPlayers')

const { mapSize } = constants;

class Game {
    constructor() {
        this.map = new Map(mapSize);
        this.players = [];
        this.mapStates = [];
        this.fase = 0;
    }
    init() {
        console.log('Game initializing')
        const player0 = simulatedPlayers.newPlayer0()
        const player1 = simulatedPlayers.newPlayer1()

        this.addPlayer(player0)
        this.addPlayer(player1)

        const mapState = {
            players: {},
            areas: this.map.areas,
            npcs: {}
        }

        const playersCells = this.map.getPlayersStartingCells(this.players.length)
        this.players.forEach( (player, index) => {
            player.setStartingPosition(playersCells[index])
            const position = playersCells[index]
            const positionKey = `${position.x}_${position.y}`
            mapState.players[positionKey] = player.id
        })
        
        const npcCells = this.map.getNpcCells(this.players.length)
        npcCells.forEach( (cell, index) => {
            const position = cell
            const positionKey = `${position.x}_${position.y}`
            mapState.npcs[positionKey] = this.players.length + 1 + index
        })
        
        const initialMapState = new MapState(mapState)
        this.mapStates.push(initialMapState)
        this.start()
    }
    addPlayer(player) {
        this.players.push(player)
    }
    start() {
        console.log('game starting')
        console.log('mapState: ', this.mapStates[this.mapStates.length-1])
        
        // console.log(this.mapState[this.mapState.length - 1].getMapState())
        // console.log('this.players:', this.players)
    }
}

module.exports = Game;