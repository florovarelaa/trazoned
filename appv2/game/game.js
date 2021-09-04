import { initializePlayers } from '../services/players.js'
import { gameService } from '../services/game.js'
// import { uiService } from '../services/ui.js'

export let game = {
    state: {},
    createGame(config) {
        this.state = config
        this.state.step = 0
        this.state.boardState = this.createBoard(config.boardSize)
        const { players, boardSize, numberOfSteps } = config
        this.state.players = this.initializePlayers(players, boardSize, numberOfSteps)
    },
    createBoard(boardSize) {
        let board = new Array(boardSize).fill(null).map(() => new Array(boardSize).fill(null));
        return board;
    },
    initializePlayers: initializePlayers,
    // uiService: uiService,
    gameService: gameService,
    simulateGame() {
        let boardSize = this.state.boardSize
        let players = this.state.players
        let numberOfSteps = this.state.numberOfSteps

        // players make moves and use abilities on each of the turn first fase steps        
        for (let step = 0; step < this.state.numberOfSteps; step++) {
            players.forEach( (player, playerIndex) => {
                let movement = player.movements[0]
                player.units.forEach( (unit, unitIndex) => {
                    if (unit.isAlive() ) {
                        let potentialStepMovementPositions = gameService.unitPotentialStepMovementPositions(unit, movement, step, boardSize)
                        let selectedPosition = potentialStepMovementPositions[0]
                        
                        gameService.unitSetStepMovement(unit, movement, step, selectedPosition.positionIndex, selectedPosition.position)
                        
                        let ability = unit.abilities[0]
                        let potentialStepAbilityPoistions = gameService.unitPotentialStepAbilityPositions(unit, ability, step, boardSize)
                        selectedPosition = potentialStepAbilityPoistions[0]
                        
                        gameService.unitSetStepAbility(unit, ability, step, selectedPosition.positionIndex, selectedPosition.position)
                    }
                })
            })            
        }
        
        //The actions are executed
        for (let step = 0; step < numberOfSteps; step++) {            
            players = gameService.executeStepActions(players, step, boardSize)
        }
        
        this.nextFase(this.state)
        // players.forEach(player => console.log(util.inspect(player, {showHidden: false, depth: null})))
     },
    nextFase(state) {   
        let playersWithAliveUnits = state.players.filter( player => {
            return player.hasAliveUnits()
        })
        if ( playersWithAliveUnits.length > 1 ) {
            playersWithAliveUnits.forEach( player => {
               player.resetUnitsSteps()
            })
        } else {
            state.isGameOver = true
            if ( playersWithAliveUnits === 1 ) {
                state.winner = playersWithAliveUnits[0]
            }
            return
        }
    },
    getState() {
        return this.state
    },
}