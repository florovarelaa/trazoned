const Map = require('./Map.js')
const MapState = require('./MapState.js')
const FaseService = require('./Fase.service')
const MovementService = require('./Movement.service')
const configuration = require('./configuration');

const { mapSize } = configuration;

class Game {
    constructor(players) {
        this.map = new Map(mapSize);
        this.players = players;
        this.mapStates = [];
        this.fase = 1;
    }
    init() {
        console.log('Game initializing')

        const initialState = {
            players: {},
            areas: this.map.areas,
            npcs: {}
        }

        const playersCells = this.map.getPlayersStartingCells(this.players.length)
        this.players.forEach( (player, index) => {
            const position = playersCells[index]
            const positionKey = `${position.x}_${position.y}`
            initialState.players[player.id] = positionKey
        })
        
        const npcCells = this.map.getNpcCells(this.players.length)
        npcCells.forEach( (cell, index) => {
            const position = cell
            const positionKey = `${position.x}_${position.y}`
            initialState.npcs[this.players.length + 1 + index] = positionKey
        })
        
        const initialMapState = new MapState(initialState)
        this.mapStates.push(initialMapState)
        //broadcast to players their positions, once they are ready continue
        this.start()
    }
    start() {
        console.log('game starting')
        this.nextTurn(this)
    }
    getState() {
        return this.mapStates[this.mapStates.length - 1]
    }
    getWinner() {
        const remainingPlayers = this.players.filter( player => {
            return player.isAlive()
        })

        if (remainingPlayers.length === 1) {
            return remainingPlayers[0]
        }

        return false
    }
    setFase(fase) {
        this.fase = fase
    }
    nextTurn() {
        FaseService.startFirstFase(this)
        .then(() => FaseService.startSecondFase(this))
        .then( () => {
            const winner = this.getWinner()
            if (!winner) {
                this.mapStates.push('map state')
                this.nextTurn()
            }

            //emit winner
        })
    }
    getTurnNumber() {
        return this.mapStates.length
    }
    getPlayerById(playerId) {
        const player = this.players.filter((player) => player.id === playerId)

        if (player.length === 0) return null

        if (player.length > 1) throw ('players with same id')

        return player[0]
    }

    // Simulation
    gameSimulation() {
        MovementService.handlePlayerMovement(this, this.players[0].id, Object.keys(this.players[0].movements)[2])
    }
}

module.exports = Game;