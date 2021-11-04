const Movement = require('../Movement')

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

const movementCross = new Movement(
    [
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,0,0,0],
        [0,1,0,1,0],
        [1,0,0,0,1]
    ]
) 

const movementRhombus = new Movement(
    [
        [0,0,1,0,0],
        [0,1,0,1,0],
        [1,0,0,0,1],
        [0,1,0,1,0],
        [0,0,1,0,0]
    ]
)

const movements = {
    king: king,
    knight: knight,
    invertedKnight: invertedKnight,
    cross: movementCross,
    rhombus: movementRhombus,
    playersAvailableMovements: [
        knight,
        invertedKnight
    ]
}

module.exports = movements;