const Ability = require('../../Ability')
const keywords = require('../../Keywords')
const configuration = require('../../configuration')
const SHAPES = require('../shapes/shapes')

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
    SHAPES._ability_warrior_0,
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