const configuration = require('./configuration');

class MovementService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    getMovementAvailablePositionsForPlayer(mapState, playerId, movementId) {
        console.log('mapState ', mapState)
    }
}

module.exports = new MovementService(configuration.mapSize)