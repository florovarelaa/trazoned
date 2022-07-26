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

const _0_rhombus = new Ability(
    0,
    'rhombus',
    configuration.abilityTypes.MOVEMENT,
    SHAPES._0_rhombus,
    'Move to selected cell',
    [],
    movement_targetEffects
)

const MOVEMENTS = {
    _0_rhombus,
}

module.exports = MOVEMENTS