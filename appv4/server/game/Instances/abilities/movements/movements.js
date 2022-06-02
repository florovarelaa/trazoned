const Ability = require('../../../Ability')
const keywords = require('../../../Keywords')
const SHAPES = require('../../shapes/shapes')
const configuration = require('../../../configuration')

const movement_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected'
    }
]

const _1_king = new Ability(
    1,
    '1 straight',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._1_king,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _2_knight = new Ability(
    2,
    '2 knight',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._2_knight,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _2_invertedKnight = new Ability(
    3,
    '2 inverted knight',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._2_invertedKnight,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _2_straight = new Ability(
    4,
    '2 Straight',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._2_straight,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _2_cross = new Ability(
    5,
    '2 cross',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._2_cross,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _2_rhombus = new Ability(
    6,
    '2 rhombus',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._2_rhombus,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _3_straight = new Ability(
    7,
    '3 straight',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._3_straight,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const _3_cross = new Ability(
    7,
    '3 cross',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._3_cross,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const MOVEMENTS = {
    _1_king,
    _2_knight,
    _2_invertedKnight,
    _2_straight,
    _2_cross,
    _2_rhombus,
    _3_straight,
    _3_cross
}

module.exports = MOVEMENTS