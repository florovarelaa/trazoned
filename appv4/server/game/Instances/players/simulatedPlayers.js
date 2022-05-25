const Player = require('../../Player')
const Deck = require('../../Deck')
const Unit = require('../../Unit')
const SHAPES = require('../shapes/shapes')
const abilities = require('../abilities/abilities')

const player1Movements =
{
    1: SHAPES._1_king,
    2: SHAPES._2_cross,
    3: SHAPES._2_knight,
    4: SHAPES._3_straight
}

const player2Movements =
{
    1: SHAPES._1_king,
    2: SHAPES._2_straight,
    3: SHAPES._2_invertedKnightght,
    4: SHAPES._3_cross
}
let mage = new Unit('mage', abilities.mage_abilities)
let warrior = new Unit('warrior', abilities.warrior_abilities)

const deckPlayer1 = new Deck(warrior)
const deckPlayer2 = new Deck(mage)

function simulatedPlayers() {
    this.newPlayer0 = () => {
        return new Player(1, deckPlayer1, player1Movements)
    },
    this.newPlayer1 = () => {
        return new Player(2, deckPlayer2, player2Movements)
    }
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
    // }
}
                    
module.exports = new simulatedPlayers;
  