"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abilityService = exports.AbilityService = void 0;
var configuration = require('./configuration').configuration;
var PlayerService = require('./Player.service').PlayerService;
var MapService = require('./Map.service').MapService;
var keywords = require('./Keywords').keywords;
var AbilityService = /** @class */ (function () {
    function AbilityService(mapSize) {
        this.mapSize = mapSize;
    }
    // fasePosition = { 0, 1, 2, 3}
    AbilityService.prototype.handlePlayerWantToUseAbility = function (game, playerId, ability, step) {
        var player;
        try {
            player = game.getPlayerById(playerId);
            if (!player)
                throw ('player not found');
        }
        catch (error) {
            console.error(error);
        }
        var playerHasAbility;
        try {
            playerHasAbility = PlayerService.playerHasAbility(player, ability);
        }
        catch (error) {
            console.error(error);
        }
        if (!playerHasAbility)
            throw ('player can not use that ability');
        // if(ability.isAMovement() && (step === 1 || step === 3) ) {
        //     throw('cannot use a movement as an ability')
        // }
        // get player position at step
        var playerPositionAtStep = PlayerService.getPositionAtStep(player, step);
        var availablePositions = this.getAbilityAvailablePositionsForPosition(playerPositionAtStep, ability);
        // TODO filter availablePositions depending on mapState.
        return availablePositions;
    };
    AbilityService.prototype.handlePlayerUseAbility = function (game, playerId, ability, chosenPosition, step) {
        var player;
        try {
            player = game.getPlayerById(playerId);
            if (!player)
                throw ('player not found');
            PlayerService.playerHasAbility(player, ability);
        }
        catch (error) {
            console.error(error);
            return;
        }
        if (ability.keywords.includes(keywords.caster.self)) {
            console.log('entro aca. Esta mal. no deberia');
            PlayerService.setPlayerWishedTurn(game, playerId, ability.id, 'A_A', step);
            return;
        }
        // get player position at step
        var playerPositionAtStep = PlayerService.getPositionAtStep(player, step);
        var positionInAvailablePositions;
        try {
            var availablePositions = this.getAbilityAvailablePositionsForPosition(playerPositionAtStep, ability);
            positionInAvailablePositions = this.positionInAvailablePositions(chosenPosition, availablePositions);
        }
        catch (error) {
            console.error(error);
            if (!positionInAvailablePositions)
                return;
        }
        // convert from chosenPosition to the matching key on the ability. (chosen key - player position)
        var playerPosition = player.getPosition();
        var abilityChosenPosition = this.fromPlayerChosenPositionToAbilityPosition(playerPosition, chosenPosition, ability);
        // TODO set player wished turn
        PlayerService.setPlayerWishedTurn(game, playerId, ability.id, abilityChosenPosition, step);
    };
    AbilityService.prototype.getAbilityAvailablePositionsForPosition = function (position, ability) {
        var coordinates = this.getCoordinatesFromPosition(position);
        var abilityShapePositions = ability.shape.positions;
        var addedPositions = this.addCoordiantesAndPositions(coordinates, abilityShapePositions);
        return addedPositions;
    };
    AbilityService.prototype.getCoordinatesFromPosition = function (position) {
        var coordinatesArr = position.split('_');
        var x = coordinatesArr[0];
        var y = coordinatesArr[1];
        var coordinates = {
            x: x,
            y: y
        };
        return coordinates;
    };
    AbilityService.prototype.getKeyFromCoordinates = function (coordinates) {
        var x = coordinates.x, y = coordinates.y;
        return "".concat(x, "_").concat(y);
    };
    AbilityService.prototype.addCoordiantesAndPositions = function (coordinates, shapePositions) {
        var _this = this;
        var addedPositions = {};
        for (var key in shapePositions) {
            var keypos = this.getCoordinatesFromPosition(key);
            var addedCoordinates = this.addCoordinates(keypos, coordinates);
            if (MapService.isOutOfMap(addedCoordinates))
                continue;
            var addedKey = this.getKeyFromCoordinates(addedCoordinates);
            var addedKeyPositions = shapePositions[key].map(function (key, index) {
                var keyCoordinates = _this.getCoordinatesFromPosition(key);
                var addedCoords = _this.addCoordinates(keyCoordinates, coordinates);
                if (MapService.isOutOfMap(addedCoords))
                    return false;
                var addedPosition = _this.getKeyFromCoordinates(addedCoords);
                return addedPosition;
            }).filter(function (position) { return position !== false; });
            addedPositions[addedKey] = addedKeyPositions;
        }
        return addedPositions;
    };
    AbilityService.prototype.addCoordinates = function (coordinate1, coordinate2) {
        return {
            x: parseInt(coordinate1.x, 10) + parseInt(coordinate2.x, 10),
            y: parseInt(coordinate1.y, 10) + parseInt(coordinate2.y, 10),
        };
    };
    AbilityService.prototype.positionInAvailablePositions = function (key, availablePositions) {
        var isAvailable = availablePositions[key];
        if (!isAvailable)
            throw ('invalid selected position');
        return true;
    };
    AbilityService.prototype.fromPlayerChosenPositionToAbilityPosition = function (playerPosition, chosenPosition, ability) {
    };
    return AbilityService;
}());
exports.AbilityService = AbilityService;
exports.abilityService = new AbilityService(configuration.mapSize);
