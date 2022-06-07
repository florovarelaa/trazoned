const Map = require('./Map.js')
const MapState = require('./MapState.js')
const FaseService = require('./Fase.service')
const AbilityService = require('./Ability.service')
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
    getFase() {
        return this.fase
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

            //TODO: emit winner
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
        const player1 = this.players[0]
        const availablePositions = AbilityService.handlePlayerWantToUseAbility(this, player1.id, player1.abilities[1])
        const chosenKey = Object.keys(availablePositions)[0]
        const step = 1;
        const playerUseAbility = AbilityService.handlePlayerUseAbility(this, player1.id, player1.abilities[1], chosenKey, step)
    }
}

module.exports = Game;