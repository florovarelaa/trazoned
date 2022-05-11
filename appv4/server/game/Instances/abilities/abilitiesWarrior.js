const Ability = require('../Ability')
const keywords = require('../../Keywords')

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
        position: 'selected'
    }
]
            
const ability_warrior_0 = new Ability(
    0,
    'warrior_0',
    ability_warrior_0_positions,
    'deal damage to enemy units',
    [],
    ability_warrior_0_targetEffects
)

const ability_warrior_1 = new Ability(
    1,
    'warrior_1',
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