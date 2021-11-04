const Movement = require('./Movement')
const Ability = require('./Ability')
const Unit = require('./Unit')
const Player = require('./Player')
const movements = require('./Instances/movements')
const abilities = require('./Instances/abilities')

let warriorAbilities = [abilities.ability_warrior_0, abilities.ability_warrior_1]
let mageAbilities = [abilities.ability_mage_0, abilities.ability_mage_1]
let archerAbilities = [abilities.ability_archer_0, abilities.ability_archer_1]

let firstPlayer_warrior = new Unit(0, null, 'Warrior0', 10, null, warriorAbilities, null)
let firstPlayer_mage = new Unit(1, null, 'Mage0', 10, null, mageAbilities, null)
let secondPlayer_warrior = new Unit(2, null, 'Warrior1', 10, null, warriorAbilities, null)
let secondPlayer_mage = new Unit(3, null, 'Mage1', 10, null, mageAbilities, null)

let unitsPlayer0 = [firstPlayer_warrior, firstPlayer_mage]
let unitsPlayer1 = [secondPlayer_warrior, secondPlayer_mage]

let movementPlayer0 = movements.king
let movementPlayer1 = movements.invertedKnight

function simulatedPlayers() {
    this.newPlayer0 = () => {
        return new Player(null, movementPlayer0, unitsPlayer0)
    },
    this.newPlayer1 = () => {
        return new Player(null, movementPlayer1, unitsPlayer1)
    },
    this.lastPlayerSimulated = 0,
    this.toggleLastCreatedPlayer = () => {
        this.lastPlayerSimulated === 0 ? this.lastPlayerSimulated = 1 : this.lastPlayerSimulated = 0
    },
    this.newRandomPlayer = () => {

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }

        let numberOfAvailableMovementsForPlayers = 2
        let numberOfAvailableUnitsForPlayers = 3
        let unitInitialHealth = 10

        let selectedMovementIndex = getRandomInt(numberOfAvailableMovementsForPlayers)
        let playerMovement = movements.playersAvailableMovements[selectedMovementIndex]
        
        let playerFirstUnit;
        let playerSecondUnit;
        
        while ((!playerFirstUnit && !playerSecondUnit)) {
            if (!playerFirstUnit) {

                let selectedUnitIndex = getRandomInt(numberOfAvailableUnitsForPlayers)
                console.log('selectedUnitIndex: ', selectedUnitIndex)

                switch (selectedUnitIndex) {
                    case 0:
                        playerFirstUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
                        break;
                    case 1:
                        playerFirstUnit = new Unit(0, null, 'Mage', unitInitialHealth, null, mageAbilities, null)
                        break;
                    case 2:
                        playerFirstUnit = new Unit(0, null, 'Archer', unitInitialHealth, null, archerAbilities, null)
                        break;
                    default:
                        playerFirstUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
                }
            }
            if(!playerSecondUnit) {

                let selectedUnitIndex = getRandomInt(numberOfAvailableUnitsForPlayers)

                switch (selectedUnitIndex) {
                    case 0:
                        playerSecondUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
                        break;
                    case 1:
                        playerSecondUnit = new Unit(0, null, 'Mage', unitInitialHealth, null, mageAbilities, null)
                        break;
                    case 2:
                        playerSecondUnit = new Unit(0, null, 'Archer', unitInitialHealth, null, archerAbilities, null)
                        break;
                    default:
                        playerSecondUnit = new Unit(0, null, 'Warrior', unitInitialHealth, null, warriorAbilities, null)
                }
            }
        }
        
        let playerUnits = [playerFirstUnit, playerSecondUnit]
        return new Player(null, playerMovement, playerUnits)
    }
}
                    
module.exports = new simulatedPlayers;
  