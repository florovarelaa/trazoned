const Ability = require('../../Ability')
const SHAPES = require('../shapes/shapes')

// ints correspond to position in a grid where the player is at the center. So it's top cell would be in (X = -abilitySize/2, Y = abilitysize/2)
// the array corresponds of affected tiles where the selected tile is at [0,0]
const ability_warrior_0_affected_positions = {
    '00': [[0, 0],[1,0],[0,-1],[-1,1]],
    '01': [[0, 0],[-1,0],[1,0],[0,1]],
    '02': [[0, 0],[-1,0],[0,-1],[1,1]],
    '10': [[0, 0],[0,-1],[0,1],[-1,0]],
    '12': [[0, 0],[0,-1],[0,1],[1,0]],
    '20': [[0, 0],[0,-1],[1,0],[-1,-1]],
    '21': [[0, 0],[-1,0],[1,0],[0,-1]],
    '22': [[0, 0],[-1,0],[0,1],[1,-1]],
}

const ability_mage_0_affected_positions = {
    '00': [[0,0],[-1,1],[-2,2],[-3,3]],
    '01': [[0,0],[0,1],[0,2],[0,3]],
    '02': [[0,0],[1,1],[2,2],[3,3]],
    '10': [[0,0],[-1,0],[-2,0],[-3,0]],
    '12': [[0,0],[1,0],[2,0],[3,0]],
    '20': [[0,0],[-1,-1],[-2,-2],[-3,-3]],
    '21': [[0,0],[0,-1],[0,-2],[0,-3]],
    '22': [[0,0],[1,-1],[2,-2],[3,-3]],
}

const ability_archer_0_affected_positions = {
    '00': [[-2,2],[-3,2],[-2,3],[-3,3]],
    '01': [[0,2],[-1,2],[1,2],[0,3]],
    '02': [[2,2],[2,3],[3,2],[3,3]],
    '10': [[-2,0],[-2,-1],[-2,1][-3,0]],
    '12': [[2,0],[2,-1],[2,1],[3,0]],
    '20': [[-2,-2],[-3,-2],[-2,-3],[-3,-3]],
    '21': [[0,-2],[-1,-2],[1,-2],[0,-3]],
    '22': [[2,-2],[2,-3],[3,-2],[3,-3]],
}

const ability_warrior_0 = new Ability(
    0, 'warrior_first', SHAPES.king, ability_warrior_0_affected_positions, false, 3, 'deal damage in a cone'
)

const ability_mage_0 = new Ability(
    1, 'mage_first', SHAPES.king, ability_mage_0_affected_positions, false, 3, 'deal damage in a line'
)

const ability_warrior_1 = new Ability(
    2, 'warrior_second', null, null, true, null, 'move as the player movement'
)

const ability_mage_1 = new Ability(
    2, 'mage_second', SHAPES.king, SHAPES.king, true, null, 'move 1 position'
)

const ability_archer_0 = new Ability(
    0, 'archer_first', SHAPES.king, ability_archer_0_affected_positions, false, 3, 'deal damage in a distant cone'
)

const ability_archer_1 = new Ability(
    0, 'archer_second', SHAPES.rhombus, ability_archer_0_affected_positions, true, null, 'move in a rhombus shape'
)

const abilities = {
    ability_warrior_0,
    ability_mage_0,
    ability_warrior_1,
    ability_mage_1,
    ability_archer_0,
    ability_archer_1
}

module.exports = abilities