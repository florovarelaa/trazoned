const { mapSize } = require("./configuration");

class MapService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    isOutOfMap(positionAsXY) {
        const { x, y } = positionAsXY
        const mapBoundaries = Math.floor(this.mapSize/2)
        if ( x > mapBoundaries || y > mapBoundaries ) {
            return true
        }
        return false
    }
}

module.exports = new MapService(mapSize)