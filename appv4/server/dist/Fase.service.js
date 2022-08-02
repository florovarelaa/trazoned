"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaseService = void 0;
var AbilityService = require('./Ability.service');
var configuration = require('./configuration');
var PlayerService = require('./Player.service');
var FaseService = /** @class */ (function () {
    function FaseService() {
    }
    FaseService.prototype.initFirstFase = function (game) {
        game.setFase(1);
        PlayerService.playersDrawCards(game.players);
    };
    FaseService.prototype.startFirstFase = function (game) {
        this.initFirstFase(game);
        var turn = game.getTurnNumber();
        console.log('\n');
        console.log(' --- TURN: ', turn, ' --- ');
        console.log("fase ".concat(game.getFase(), " start"));
        console.log('.');
        console.log('.');
        console.log('.');
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log("fase ".concat(game.getFase(), " end"));
                console.log('------');
                resolve();
            }, configuration.firstFaseDuration);
        });
    };
    FaseService.prototype.startSecondFase = function (game) {
        game.setFase(2);
        console.log("fase ".concat(game.getFase(), " start"));
        console.log('.');
        console.log('.');
        console.log('.');
        return new Promise(function (resolve) {
            setTimeout(function () {
                console.log("fase ".concat(game.getFase(), " end"));
                resolve();
            }, 1500);
        });
    };
    return FaseService;
}());
exports.FaseService = FaseService;
