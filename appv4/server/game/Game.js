const Map = require('./Map.js')
const MapState = require('./MapState.js')
const FaseService = require('./Fase.service')
const MovementService = require('./Movement.service')
const constants = require('./configuration');
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
            player.setPosition(playersCells[index])
            const position = playersCells[index]
            const positionKey = `${position.x}_${position.y}`
            mapState.players[player.id] = positionKey
        })
        
        const npcCells = this.map.getNpcCells(this.players.length)
        npcCells.forEach( (cell, index) => {
            const position = cell
            const positionKey = `${position.x}_${position.y}`
            mapState.npcs[this.players.length + 1 + index] = positionKey
        })
        
        const initialMapState = new MapState(mapState)
        this.mapStates.push(initialMapState)
        //broadcast to players their positions, once they are ready continue
        this.start()
    }
    addPlayer(player) {
        this.players.push(player)
    }
    start() {
        console.log('game starting')
        const initialMapState = this.mapStates[0]
        console.log('initialMapState: ', initialMapState)
        FaseService.startFirstFase(this.mapStates.length);
        // console.log(this.mapState[this.mapState.length - 1].getMapState())
        // console.log('this.players:', this.players)
    }
}

module.exports = Game;