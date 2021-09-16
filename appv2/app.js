import { game } from './game/game.js'
import { config } from './config/config.js'
import { uiService } from './services/ui.js'
import { gameService } from './services/game.js'

// addEventListener( 'DOMContentLoaded', _ => 
// {
    game.createGame(config)
    uiService.buildUi(
        game.getState(),
        () => game.nextFase(),
        (unit, movement, step, boardSize, potentialMovementColor) => gameService.unitPotentialStepMovementPositions(unit, movement, step, boardSize, potentialMovementColor),
        (unit, ability, step, boardSize, potentialAbilityColor) => gameService.unitPotentialStepAbilityPositions(unit, ability, step, boardSize, potentialAbilityColor)
    )
    // game.simulateGame()
// })