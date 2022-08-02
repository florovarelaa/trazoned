"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ranger_abilities = void 0;
var Ability = require('../../Ability').Ability;
var keywords = require('../../Keywords').keywords;
var configuration = require('../../configuration').configuration;
var SHAPES = require('../shapes/shapes').SHAPES;
var ability_ranger_1_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[2]
    }
];
var ability_ranger_1 = new Ability(301, 'ranger_1', configuration.abilityTypes.ABILITY, SHAPES._1_16_1_, 'fast: daño debil 2 casillas', [keywords.caster.fast], ability_ranger_1_targetEffects);
var ability_ranger_2_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[3]
    }
];
var ability_ranger_2 = new Ability(302, 'ranger_2', configuration.abilityTypes.ABILITY, SHAPES._1_8_1_, 'daño medio 1 casilla', [], ability_ranger_2_targetEffects);
var ability_ranger_3_targetEffects = [
    {
        keyword: keywords.effect.area,
        value: keywords.damage[1],
        sustain: 3,
        shape: SHAPES._1_1_5_
    }
];
var ability_ranger_3 = new Ability(303, 'ranger_3', configuration.abilityTypes.ABILITY, SHAPES._1_12_, 'hybrid: area venenosa. hasta 2 casillas que Sustain(3) ocupa 5 casillas. En forma de cruz', [keywords.caster.hybrid], ability_ranger_3_targetEffects);
var ability_ranger_4_targetEffects = [
    {
        keyword: keywords.effect.move,
        target: keywords.target.caster,
        position: 'selected',
        collision: true //true means it will hit with a blocked. False means it can jump it. It can never take it's tile
    }
];
var ability_ranger_4 = new Ability(304, 'ranger_4', configuration.abilityTypes.ABILITY, SHAPES._1_8_1_, 'movimiento 1 casilla', [], ability_ranger_4_targetEffects);
var ability_ranger_5_targetEffects = [
    {
        keyword: keywords.effect.silence,
        target: keywords.target.enemy
    }
];
var ability_ranger_5 = new Ability(305, 'ranger_5', configuration.abilityTypes.ABILITY, SHAPES._1_12_, '1 casilla aplica silence', [], ability_ranger_5_targetEffects);
var ability_ranger_6_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[2],
    }
];
var ability_ranger_6 = new Ability(306, 'ranger_6', configuration.abilityTypes.ABILITY, SHAPES._1_16_1_, 'daño debil 1 casilla', [], ability_ranger_6_targetEffects);
exports.ranger_abilities = {
    ability_ranger_1: ability_ranger_1,
    ability_ranger_2: ability_ranger_2,
    ability_ranger_3: ability_ranger_3,
    ability_ranger_4: ability_ranger_4,
    ability_ranger_5: ability_ranger_5,
    ability_ranger_6: ability_ranger_6,
};
