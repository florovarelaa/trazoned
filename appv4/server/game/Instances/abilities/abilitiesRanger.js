const Ability = require('../../Ability')
const configuration = require('../../configuration')
const keywords = require('../../Keywords')
const SHAPES = require('../shapes/shapes')

const ability_ranger_0_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: 10
    }
]
            
const ability_ranger_1_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected'
    }
]
                
const ability_ranger_0 = new Ability(
    102,
    'ranger_0',
    configuration.abilityTypes.ABILITY,
    SHAPES._ability_ranger_0,
    'deal damage to enemy units',
    [],
    ability_ranger_0_targetEffects
)

const ability_ranger_1 = new Ability(
    103,
    'ranger_1',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_king,
    'Move 1 cell',
    [],
    ability_ranger_1_targetEffects
)

const ranger_abilities = {
    ability_ranger_0,
    ability_ranger_1
}

module.exports = ranger_abilities;