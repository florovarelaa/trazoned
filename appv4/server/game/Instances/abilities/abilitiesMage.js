const Ability = require('../Ability')
const keywords = require('../../Keywords')
const SHAPES = require('../shapes/shapes')

// keys correspond to position in a grid where the player is at the center [0,0].
// the array corresponds of affected tiles when the cell corresponding to the key is selected as target.
const ability_mage_0_positions = {
 '-3_3': ['-4_4','-3_4','-4_3','-3_3'],       
 '0_3': ['0_4','-1_3','0_3','1_3'],       
 '3_3': ['3_4','4_4','3_3','4_3'],       
 '-3_0': ['-3_1','-4_0','-3_0','-3_-1'],       
 '3_0': ['3_1','3_0','4_0','3_-1'],       
 '-3_-3': ['-4_-3','-3_-3','-4_-4','-3_-4'],       
 '0_-3': ['-1_-3','0_-3','1_-3','0_-4'],       
 '3_-3': ['3_-3','4_-3','3_-4','4_-4'],       
}

const ability_mage_0_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: 10
    }
]
            
const ability_mage_1_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected'
    }
]
            
            
const ability_mage_0 = new Ability(
    2,
    'mage_0',
    ability_mage_0_positions,
    'deal damage to enemy units',
    [],
    ability_mage_0_targetEffects
)

const ability_mage_1 = new Ability(
    3,
    'mage_1',
    SHAPES.movement_1_king,
    'Move 1 cell',
    [],
    ability_mage_1_targetEffects
)

const mage_abilities = {
    ability_mage_0,
    ability_mage_1
}

module.exports = mage_abilities;