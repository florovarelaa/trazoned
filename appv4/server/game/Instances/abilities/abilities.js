const Ability = require('../../Ability')
const SHAPES = require('../shapes/shapes')


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
const ability_warrior_0_affected_positionss = {
    '4_4': ['3_3','4_4','4_5','5_4'],       
    '4_5': ['3_5','4_4','4_5','4_5'],       
    '4_6': ['3_6','4_5','4_6','5_6'],       
    '5_4': ['4_4','5_3','5_4','6_4'],       
    '5_6': ['4_6','5_6','5_7','6_6'],       
    '6_4': ['5_4','6_4','6_5','7_3'],       
    '6_5': ['6_4','6_5','6_6','7_5'],       
    '6_6': ['5_6','6_5','6_6','7_7'],       
    }
    
    let _4_4 = [
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0],
    ]

module.exports = abilities