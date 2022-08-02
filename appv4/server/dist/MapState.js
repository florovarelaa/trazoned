"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapState = void 0;
var MapState = /** @class */ (function () {
    function MapState(state) {
        var players = state.players, areas = state.areas, npcs = state.npcs;
        this.players = players;
        this.areas = areas;
        this.npcs = npcs;
        // this.state = {
        //     players: {
        //         // 'unitId': x_y
        //     },
        //     areas: {
        //         // '2_8': new MapTile()
        //     }
        //    npcs: {
        // 'unitId': x_y
        // }
        //    items: {
        // 'x_y': itemId
        // }
        // }
    }
    MapState.prototype.getMapState = function () {
        return {
            players: this.players,
            areas: this.areas,
            npcs: this.npcs
        };
    };
    return MapState;
}());
exports.MapState = MapState;
