"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOVEMENTS = void 0;
var Ability = require('../../../Ability').Ability;
var keywords = require('../../../Keywords').keywords;
var SHAPES = require('../../shapes/shapes').SHAPES;
var configuration = require('../../../configuration').configuration;
var movement_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected'
    }
];
var _1_12_ = new Ability(0, 'rhombus', configuration.abilityTypes.MOVEMENT, SHAPES._1_12_, 'Move to selected cell', [], movement_targetEffects);
exports.MOVEMENTS = {
    _1_12_: _1_12_,
};
