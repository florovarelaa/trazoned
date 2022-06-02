const Ability = require('../../Ability')
const keywords = require('../../Keywords')
const configuration = require('../../configuration')

// keys correspond to a position in a grid where the player is at the center [0,0].
// the array corresponds of affected tiles relative to the player casting position when the cell corresponding to the key is selected as target.
const ability_warrior_0_positions = {
 '-1_1': ['-2_2','-1_1','0_1','-1_0'],       
 '0_1': ['0_2','-1_1','0_1','1_1'],       
 '1_1': ['2_2','0_1','1_1','1_0'],       
 '-1_0': ['-1_1','-2_0','-1_0','-1_-1'],       
 '1_0': ['1_1','1_0','2_0','1_-1'],       
 '-1_-1': ['-1_0','-1_-1','0_-1','-2_-2'],       
 '0_-1': ['-1_-1','0_-1','1_-1','0_-2'],       
 '1_-1': ['1_0','0_-1','1_-1','2_-2'],       
}

const ability_warrior_0_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: 10
    }
]

const ability_warrior_1_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected',
        collision: true //true means it will hit with a blocked. False means it can jump it. It can never take it's tile
    }
]
            
const ability_warrior_0 = new Ability(
    100,
    'warrior_0',
    configuration.abilityTypes.ABILITY,
    ability_warrior_0_positions,
    'deal damage to enemy units',
    [],
    ability_warrior_0_targetEffects
)

const ability_warrior_1 = new Ability(
    101,
    'warrior_1',
    configuration.abilityTypes.ABILITY,
    null,
    'Works as selected movement C token',
    [keywords.caster.token_c],
    ability_warrior_1_targetEffects
)

const warrior_abilities = {
    ability_warrior_0,
    ability_warrior_1
}

module.exports = warrior_abilities;