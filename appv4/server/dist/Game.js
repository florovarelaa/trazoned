"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var aMap = require('./Map');
var MapState = require('./MapState');
var FaseService = require('./Fase.service');
var AbilityService = require('./Ability.service');
var configuration = require('./configuration');
var mapSize = configuration.mapSize;
var Game = /** @class */ (function () {
    function Game(players) {
        this.map = new aMap(mapSize);
        this.players = players;
        this.mapStates = [];
        this.fase = 1;
    }
    Game.prototype.init = function () {
        var _this = this;
        console.log('Game initializing');
        var initialState = {
            players: {},
            areas: this.map.areas,
            npcs: {}
        };
        var playersCoordinates = this.map.getPlayersStartingCoordinates(this.players.length);
        this.players.forEach(function (player, index) {
            var coordinates = playersCoordinates[index];
            var position = "".concat(coordinates.x, "_").concat(coordinates.y);
            initialState.players[position] = player.id;
            player.setCoordinates(coordinates);
            player.setPosition(position);
        });
        var npcCoordinates = this.map.getNpcCoordinates(this.players.length);
        npcCoordinates.forEach(function (cell, index) {
            var coordinates = cell;
            var position = "".concat(coordinates.x, "_").concat(coordinates.y);
            initialState.npcs[position] = _this.players.length + 1 + index;
        });
        var initialMapState = new MapState(initialState);
        this.mapStates.push(initialMapState);
        //broadcast to players their positions, once they are ready continue
        this.start();
    };
    Game.prototype.start = function () {
        console.log('game starting');
        this.nextTurn();
    };
    Game.prototype.getState = function () {
        return this.mapStates[this.mapStates.length - 1];
    };
    Game.prototype.getWinner = function () {
        var remainingPlayers = this.players.filter(function (player) {
            return player.isAlive();
        });
        if (remainingPlayers.length === 1) {
            return remainingPlayers[0];
        }
        return false;
    };
    Game.prototype.setFase = function (fase) {
        this.fase = fase;
    };
    Game.prototype.getFase = function () {
        return this.fase;
    };
    Game.prototype.nextTurn = function () {
        var _this = this;
        FaseService.startFirstFase(this)
            .then(function () { return FaseService.startSecondFase(_this); })
            .then(function () {
            var winner = _this.getWinner();
            if (!winner) {
                _this.mapStates.push('map state');
                _this.nextTurn();
            }
            //TODO: emit winner
        });
    };
    Game.prototype.getTurnNumber = function () {
        return this.mapStates.length;
    };
    Game.prototype.getPlayerById = function (playerId) {
        var player = this.players.filter(function (player) { return player.id === playerId; });
        if (player.length === 0)
            return null;
        if (player.length > 1)
            throw ('players with same id');
        return player[0];
    };
    // Simulation
    Game.prototype.gameSimulation = function () {
        var player1 = this.players[0];
        var step = 0;
        var abilityToUse = Object.values(player1.hand)[0];
        var availablePositions = AbilityService.handlePlayerWantToUseAbility(this, player1.id, abilityToUse, step);
        // if the abilitiy to use will be cast on the player casting it as a buff or debuff it will have the self keyword.
        // Available positions are not needed.
        // So it will immediatly trigger the handlePlayerUseAbilityMethod.
        console.log('abilityToUse: ', abilityToUse);
        var chosenPosition = Object.keys(availablePositions)[0];
        AbilityService.handlePlayerUseAbility(this, player1.id, abilityToUse, chosenPosition, step);
        console.log('player1: ', player1);
    };
    return Game;
}());
exports.Game = Game;
module.exports = Game;
