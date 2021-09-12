import { game } from './game/game.js'
import { config } from './config/config.js'
import { uiService } from './services/ui.js'
import { gameService } from './services/game.js'

// addEventListener( 'DOMContentLoaded', _ => 
// {
    game.createGame(config)
    uiService.buildUi(
        game.getState(),
        () => game.nextFase(game.getState()),
        (unit, movement, step, boardSize) => gameService.unitPotentialStepMovementPositions(unit, movement, step, boardSize),
        (unit, ability, step, boardSize) => gameService.unitPotentialStepAbilityPositions(unit, ability, step, boardSize)
    )
    // game.simulateGame()
// })