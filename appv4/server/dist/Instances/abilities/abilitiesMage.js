"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mage_abilities = void 0;
var Ability = require('../../Ability').Ability;
var keywords = require('../../Keywords').keywords;
var configuration = require('../../configuration').configuration;
var SHAPES = require('../shapes/shapes').SHAPES;
var ability_mage_1_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[5]
    }
];
var ability_mage_1 = new Ability(201, 'mage_1', configuration.abilityTypes.ABILITY, SHAPES._2_3_straight, "slow: da\u00F1o muy fuerte 2/3 casillas", [keywords.caster.slow], ability_mage_1_targetEffects);
var ability_mage_2_targetEffects = [
    {
        keyword: keywords.effect.damage,
        target: keywords.target.enemy,
        value: keywords.damage[2]
    }
];
var ability_mage_2 = new Ability(202, 'mage_2', configuration.abilityTypes.ABILITY, SHAPES._2_3_straight, 'daño debil +caro que el guerrero 2/3 casillas', [], ability_mage_2_targetEffects);
var ability_mage_3_targetEffects = [
    {
        keyword: 'areaBlock',
        target: 'all',
        sustains: 3,
    },
];
var ability_mage_3 = new Ability(203, 'mage_3', configuration.abilityTypes.ABILITY, SHAPES._3_5_, 'sustain(3) levanta muro inatravesable. ocupa 3 casillas y se castea si o si a 2 casillas', [], ability_mage_3_targetEffects);
var ability_mage_4_targetEffects = [
    {
        keyword: keywords.effect.outgoing_modifier,
        target: keywords.target.caster,
        value: keywords.damage[1],
        type: keywords.effect.damage,
        sustain: 2,
    }
];
var ability_mage_4 = new Ability(204, 'mage_4', configuration.abilityTypes.ABILITY, SHAPES.none, 'sustain(2) +1 de daño', [], ability_mage_4_targetEffects);
var ability_mage_5_targetEffects = [
    {
        keyword: keywords.effect.shield,
        target: keywords.target.caster,
        sustain: -1,
        on: keywords.effect.damage,
        effect: keywords.effect.exhaust
    }
];
var ability_mage_5 = new Ability(205, 'mage_5', configuration.abilityTypes.ABILITY, SHAPES.none, 'fast: obtiene un escudo que aplica stun al proximo que daña', [keywords.caster.fast], ability_mage_5_targetEffects);
var ability_mage_6_targetEffects = [
    {
        keyword: keywords.effect.damage,
        value: keywords.damage[1],
        sustain: 3,
    }
];
var ability_mage_6 = new Ability(206, 'mage_6', configuration.abilityTypes.ABILITY, SHAPES._1_12_, 'sustain(3) muy debil hasta 2 casillas', [], ability_mage_6_targetEffects);
exports.mage_abilities = {
    ability_mage_1: ability_mage_1,
    ability_mage_2: ability_mage_2,
    ability_mage_3: ability_mage_3,
    ability_mage_4: ability_mage_4,
    ability_mage_5: ability_mage_5,
    ability_mage_6: ability_mage_6,
};
