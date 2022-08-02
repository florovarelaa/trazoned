var mapSize = require("./configuration").mapSize;
var MapService = /** @class */ (function () {
    function MapService(mapSize) {
        this.mapSize = mapSize;
    }
    MapService.prototype.isOutOfMap = function (positionAsXY) {
        var x = positionAsXY.x, y = positionAsXY.y;
        var mapBoundaries = Math.floor(this.mapSize / 2);
        if (x > mapBoundaries || y > mapBoundaries) {
            return true;
        }
        return false;
    };
    return MapService;
}());
module.exports = new MapService(mapSize);
