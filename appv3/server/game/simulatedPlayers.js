const Movement = require('./Movement')
const Ability = require('./Ability')
const Unit = require('./Unit')
const Player = require('./Player')

const king = new Movement(
    [
        [1,1,1],
        [1,0,1],
        [1,1,1],
    ]
)
  
const knight = new Movement(
    [
        [0,1,0,1,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,1,0,1,0]
     ]
)
  
const invertedKnight = new Movement(
    [
        [1,0,1,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,1,0,1]
    ]
)

let movements = {
    king: king,
    knight: knight,
    invertedKnight: invertedKnight
}

const affectedPositionsWarriorAbility0 = {
    '00': [[0, 0],[1,0],[0,1],[-1,-1]],
    '01': [[0, 0],[-1,0],[1,0],[0,-1]],
    '02': [[0, 0],[-1,0],[0,1],[1,-1]],
    '10': [[0, 0],[0,-1],[0,1],[-1,0]],
    '12': [[0, 0],[0,-1],[0,1],[1,0]],
    '20': [[0, 0],[0,-1],[1,0],[-1,1]],
    '21': [[0, 0],[-1,0],[1,0],[0,1]],
    '22': [[0, 0],[-1,0],[0,-1],[1,1]],
}

const affectedPositionsMageAbility0 = {
    '00': [[0,0],[-1,-1],[-2,-2],[-3,-3],],
    '01': [[0,0],[0,-1],[0,-2],[0,-3]],
    '02': [[0,0],[1,-1],[2,-2],[3,-3]],
    '10': [[0,0],[-1,0],[-2,0],[-3,0]],
    '12': [[0,0],[1,0],[2,0],[3,0]],
    '20': [[0,0],[-1,1],[-2,2],[-3,3]],
    '21': [[0,0],[0,1],[0,2],[0,3]],
    '22': [[0,0],[1,1],[2,2],[3,3]],
}

const warrior0 = new Ability(
    0, 'warrior_first', movements.king, affectedPositionsWarriorAbility0, false, 3, 'deal damage in a cone'
)

const mage0 = new Ability(
    1, 'mage_first', movements.king, affectedPositionsMageAbility0, false, 3, 'deal damage in a line'
)

const warrior1 = new Ability(
    2, 'warrior_second', null, null, true, null, 'move as the player movement'
)

const mage1 = new Ability(
    2, 'mage_second', movements.king, movements.king, true, null, 'move 1 position'
)

let warriorAbilities = [warrior0, warrior1]
let mageAbilities = [mage0, mage1]

let firstPlayer_warrior = new Unit(0, null, 'Warrior0', 10, null, warriorAbilities, null)
let firstPlayer_mage = new Unit(1, null, 'Mage', 10, null, mageAbilities, null)
let secondPlayer_warrior = new Unit(2, null, 'Warrior2', 10, null, warriorAbilities, null)
let secondPlayer_mage = new Unit(3, null, 'Mage2', 10, null, mageAbilities, null)

let unitsPlayer0 = [firstPlayer_warrior, firstPlayer_mage]
let unitsPlayer1 = [secondPlayer_warrior, secondPlayer_mage]

let movementPlayer0 = king
let movementPlayer1 = invertedKnight

let player0 = new Player(0, movementPlayer0, unitsPlayer0)
let player1 = new Player(1, movementPlayer1, unitsPlayer1)

let players = [player0, player1]

let simulatedPlayers = players

module.exports = simulatedPlayers;
  