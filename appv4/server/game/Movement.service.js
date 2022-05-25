const configuration = require('./configuration');

class MovementService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
}

module.exports = new MovementService(configuration.mapSize)