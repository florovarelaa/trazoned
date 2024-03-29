const {Player} = require('../../Player')
const {Deck} = require('../../Deck')
const {Unit} = require('../../Unit')
const { warrior_abilities, mage_abilities, ranger_abilities } = require('../abilities/abilities')

console.log('warriorAbilities: ', warrior_abilities)

const warrior = new Unit('warrior', warrior_abilities);
const mage = new Unit('mage', mage_abilities);
const ranger = new Unit('ranger', ranger_abilities);

const warriorDeck = new Deck(warrior)
const mageDeck = new Deck(mage)
const rangerDeck = new Deck(ranger)

export class SimulatedPlayers {
    private players: InstanceType<typeof Player>[];
    constructor() {
        this.players = [this.newPlayer1(), this.newPlayer2(), this.newPlayer3()]
    }
    newPlayer1(): void {
        return new Player(1, warriorDeck)
    }
    newPlayer2(): void {
        return new Player(2, mageDeck)
    }
    newPlayer3(): void {
        return new Player(3, rangerDeck)
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
}  