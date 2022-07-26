const Ability = require('../../Ability')
const keywords = require('../../Keywords')
const configuration = require('../../configuration')
const SHAPES = require('../shapes/shapes')

const ability_warrior_1_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[5]
    }
]

const ability_warrior_1 = new Ability(
    101,
    'warrior_1',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_8_1_,
    'daño muy fuerte 1 casilla',
    [],
    ability_warrior_1_targetEffects
)

const ability_warrior_2_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[3]
    }
]

const ability_warrior_2 = new Ability(
    102,
    'warrior_2',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_12_,
    'daño medio hasta 2 casillas',
    [],
    ability_warrior_2_targetEffects
)

const ability_warrior_3_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[1]
    }
]

const ability_warrior_3 = new Ability(
    103,
    'warrior_3',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_8_1_,
    'fast: daño debil 1 casilla',
    [keywords.caster.fast],
    ability_warrior_3_targetEffects
)

const ability_warrior_4_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[1]
    },
    {
        keyword: keywords.effect.exhaust,
        target: keywords.target.enemy,
    }
]

const ability_warrior_4 = new Ability(
    104,
    'warrior_4',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_12_,
    'daño muy debil hasta 2 casillas. aplica exhaust',
    [],
    ability_warrior_4_targetEffects
)

const ability_warrior_5_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected',
        collision: true //true means it will hit with a blocked. False means it can jump it. It can never take it's tile
    }
]

const ability_warrior_5 = new Ability(
    105,
    'warrior_5',
    configuration.abilityTypes.ABILITY,
    SHAPES._1_16_1_,
    'movimiento 2 casillas',
    [],
    ability_warrior_5_targetEffects
)

const ability_warrior_6_targetEffects = [
    {
        keyword: keywords.effect.incoming_modifier,
        target: keywords.target.caster,
        value: keywords.damage[1],
        type: keywords.effect.damage,
        sustain: 2,
    }
]

const ability_warrior_6 = new Ability(
    106,
    'warrior_6',
    configuration.abilityTypes.ABILITY,
    SHAPES.none,
    'hybrid: Sustain(2): -1 de daño de todas las fuentes',
    [keywords.caster.hybrid],
    ability_warrior_6_targetEffects
)

const warrior_abilities = {
    ability_warrior_1,
    ability_warrior_2,
    ability_warrior_3,
    ability_warrior_4,
    ability_warrior_5,
    ability_warrior_6,
}

module.exports = warrior_abilities;