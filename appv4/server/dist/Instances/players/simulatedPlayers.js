"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulatedPlayers = void 0;
var Player = require('../../Player').Player;
var Deck = require('../../Deck').Deck;
var Unit = require('../../Unit').Unit;
var _a = require('../abilities/abilities'), warrior_abilities = _a.warrior_abilities, mage_abilities = _a.mage_abilities, ranger_abilities = _a.ranger_abilities;
var warrior = new Unit('warrior', warrior_abilities);
var mage = new Unit('mage', mage_abilities);
var ranger = new Unit('ranger', ranger_abilities);
var warriorDeck = new Deck(warrior);
var mageDeck = new Deck(mage);
var rangerDeck = new Deck(ranger);
var simulatedPlayers = /** @class */ (function () {
    function simulatedPlayers() {
        this.newPlayer1 = function () {
            return new Player(1, warriorDeck);
        },
            this.newPlayer2 = function () {
                return new Player(2, mageDeck);
            },
            this.newPlayer3 = function () {
                return new Player(3, rangerDeck);
            },
            this.players = [this.newPlayer1(), this.newPlayer2()];
        // this.newRandomPlayer = () => {
        //     function getRandomInt(max) {
        //         return Math.floor(Math.random() * max);
        //       }
        //     let numberOfAvailableMovementsForPlayers = 2
        //     let numberOfAvailableUnitsForPlayers = 3
        //     let unitInitialHealth = 10
        //     let selectedMovementIndex = getRandomInt(numberOfAvailableMovementsForPlayers)
        //     let playerMovement = movements.playersAvailableMovements[selectedMovementIndex]
        //     let playerFirstUnit;
        //     let playerSecondUnit;
        //     while ((!playerFirstUnit && !playerSecondUnit)) {
        //         if (!playerFirstUnit) {
        //             let selectedUnitIndex = getRandomInt(numberOfAvailableUnitsForPlayers)
        //             switch (selectedUnitIndex) {
        //                 case 0:
        //                     playerFirstUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
        //                     break;
        //                 case 1:
        //                     playerFirstUnit = new Unit(0, null, 'Mage', unitInitialHealth, null, mageAbilities, null)
        //                     break;
        //                 case 2:
        //                     playerFirstUnit = new Unit(0, null, 'Archer', unitInitialHealth, null, archerAbilities, null)
        //                     break;
        //                 default:
        //                     playerFirstUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
        //             }
        //         }
        //         if(!playerSecondUnit) {
        //             let selectedUnitIndex = getRandomInt(numberOfAvailableUnitsForPlayers)
        //             switch (selectedUnitIndex) {
        //                 case 0:
        //                     playerSecondUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
        //                     break;
        //                 case 1:
        //                     playerSecondUnit = new Unit(0, null, 'Mage', unitInitialHealth, null, mageAbilities, null)
        //                     break;
        //                 case 2:
        //                     playerSecondUnit = new Unit(0, null, 'Archer', unitInitialHealth, null, archerAbilities, null)
        //                     break;
        //                 default:
        //                     playerSecondUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
        //             }
        //         }
        //     }
        //     let playerUnits = [playerFirstUnit, playerSecondUnit]
        //     return new Player(null, playerMovement, playerUnits)
    }
    return simulatedPlayers;
}());
exports.simulatedPlayers = simulatedPlayers;
