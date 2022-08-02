"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
var Unit = /** @class */ (function () {
    function Unit(name, abilities) {
        var _this = this;
        this.setPlayerId = function (playerId) {
            _this.playerId = playerId;
        };
        this.id;
        this.name = name;
        this.abilities = abilities;
    }
    return Unit;
}());
exports.Unit = Unit;
