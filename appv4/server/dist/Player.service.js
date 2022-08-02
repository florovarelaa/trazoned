"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
var configuration = require("./configuration").configuration;
var PlayerService = /** @class */ (function () {
    function PlayerService() {
    }
    PlayerService.prototype.playersDrawCards = function (players) {
        players.forEach(function (player) {
            player.drawCards();
        });
    };
    PlayerService.prototype.playerHasAbility = function (player, ability) {
        // TODO check that ability is not in cooldown
        var abilityId = ability.id;
        var abilityType = ability.type;
        var playerAbility;
        switch (abilityType) {
            case configuration.abilityTypes.ABILITY:
                var basicAbilities = player.getHand();
                playerAbility = basicAbilities.filter(function (ability) { return ability.id === abilityId; });
                break;
            case configuration.abilityTypes.MOVEMENT:
                var movements = player.getMovements();
                playerAbility = movements.filter(function (movement) { return movement.id === abilityId; });
                break;
            case configuration.abilityTypes.EQUIPMENT:
                //TODO
                break;
            case configuration.abilityTypes.ITEM:
                //TODO
                break;
            default:
                break;
        }
        if (playerAbility)
            return true;
        throw ('player can not use that ability');
    };
    PlayerService.prototype.setPlayerWishedTurn = function (game, playerId, abilityId, chosenPosition, step) {
        var player = game.getPlayerById(playerId);
        player.setPlayerWishedTurn(abilityId, chosenPosition, step);
    };
    PlayerService.prototype.getPositionAtStep = function (player, step) {
        return player.getPositionAtStep(step);
    };
    PlayerService.prototype.setPositionAtStep = function (player, step, position) {
        player.setPositionAtStep(step, position);
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
module.exports = new PlayerService();
