const configuration = require('./configuration');
const PlayerService = require('./Player.service');

class MovementService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    handlePlayerMovement(game, playerId, movementId) {
        console.log('playerId: ', playerId)
        console.log('movementId: ', movementId)
        const mapState = game.getState()
        console.log('mapState: ', game.getState())
        const playerHasMovement = PlayerService.playerHasMovement(game, playerId, movementId)
        this.getMovementAvailablePositionsForPlayer(mapState, playerId, movementId)
    }
    getMovementAvailablePositionsForPlayer(mapState, playerId, movementId) {
    }
}

module.exports = new MovementService(configuration.mapSize)