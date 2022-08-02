const {Ability} = require('../../../Ability')
const { keywords } = require('../../../Keywords')
const {SHAPES} = require('../../shapes/shapes')
const {configuration} = require('../../../configuration')

const movement_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected'
    }
]

const _1_12_ = new Ability(
    0,
    'rhombus',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._1_12_,
    'Move to selected cell',
    [],
    movement_targetEffects
)

export const MOVEMENTS = {
    _1_12_,
}