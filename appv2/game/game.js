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
                    let potentialStepMovementPositions = gameService.unitPotentialStepMovementPositions(unit, movement, step, boardSize)
                    let selectedPosition = potentialStepMovementPositions[0]
                    
                    gameService.unitSetStepMovement(unit, movement, step, selectedPosition.positionIndex, selectedPosition.position)
                    
                    let ability = unit.abilities[0]
                    let potentialStepAbilityPoistions = gameService.unitPotentialStepAbilityPositions(unit, ability, step, boardSize)
                    selectedPosition = potentialStepAbilityPoistions[0]

                    gameService.unitSetStepAbility(unit, ability, step, selectedPosition.positionIndex, selectedPosition.position)
                })
            })            
        }
        
        // console.log(JSON.stringify(this.state, null, 2));

        //The actions are executed
        players = gameService.executeStepsActions(players, numberOfSteps, boardSize)
        players.forEach(player => console.log(player))
     },
    nextFase(state) {
    },
    getState() {
        return this.state
    },
}