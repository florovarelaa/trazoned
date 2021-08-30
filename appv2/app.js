import { game } from './game/game.js'
import { config } from './config/config.js'

// addEventListener( 'DOMContentLoaded', _ => 
// {
    game.createGame(config)
    // game.uiController.buildUi(
    //     game.getState(),
    //     () => game.nextFase(game.getState()),
    //     (unit, movement) => game.movement(unit, movement),
    //     (unit, ability) => game.ability(unit, ability)
    // )
    game.simulateGame()
// })