"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
var Map = /** @class */ (function () {
    function Map(mapSize) {
        var _a;
        var mapCenter = Math.floor(mapSize / 2);
        var mapCenterPosition = "".concat(mapCenter, "_").concat(mapCenter);
        this.areas = (_a = {},
            _a[mapCenterPosition] = 'b',
            _a);
        // TODO
        // this is the state of the map, blocked tiles, wind tiles, sustain tiles.
        // '2_8': new MapTile()
        this.mapSize = mapSize;
        this.playersCoordinates = [
            {
                x: Math.floor(this.mapSize / 2),
                y: 0
            },
            {
                x: Math.floor(this.mapSize / 2),
                y: this.mapSize - 1
            },
            {
                x: 0,
                y: Math.floor(this.mapSize / 2)
            },
            {
                x: this.mapSize - 1,
                y: Math.floor(this.mapSize / 2)
            },
        ];
        this.bossCells = [{
                x: Math.floor(this.mapSize / 2),
                y: Math.floor(this.mapSize / 2),
            }];
        this.npcCoordinates = [
            {
                x: 3,
                y: Math.floor(this.mapSize / 2)
            },
            {
                x: this.mapSize - 3,
                y: Math.floor(this.mapSize / 2)
            },
            {
                x: 3,
                y: Math.floor(this.mapSize / 2)
            },
            {
                x: this.mapSize - 3,
                y: Math.floor(this.mapSize / 2)
            },
        ];
    }
    Map.prototype.getPlayersStartingCoordinates = function (numberOfPlayers) {
        return this.playersCoordinates.slice(0, numberOfPlayers);
    };
    Map.prototype.getBossCoordinates = function () {
        return this.bossCells;
    };
    Map.prototype.getNpcCoordinates = function (numberOfPlayers) {
        return this.npcCoordinates.slice(0, numberOfPlayers);
    };
    return Map;
}());
exports.Map = Map;
