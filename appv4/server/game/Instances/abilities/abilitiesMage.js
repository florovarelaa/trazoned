const Ability = require('../../Ability')
const configuration = require('../../configuration')
const keywords = require('../../Keywords')
const SHAPES = require('../shapes/shapes')

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
    102,
    'mage_0',
    configuration.abilityTypes.ABILITY,
    SHAPES._ability_mage_0,
    'deal damage to enemy units',
    [],
    ability_mage_0_targetEffects
)

const ability_mage_1 = new Ability(
    103,
    'mage_1',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_king,
    'Move 1 cell',
    [],
    ability_mage_1_targetEffects
)

const mage_abilities = {
    ability_mage_0,
    ability_mage_1
}

module.exports = mage_abilities;