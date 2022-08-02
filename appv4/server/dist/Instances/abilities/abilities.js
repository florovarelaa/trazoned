"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.abilities = void 0;
var warrior_abilities = require('./abilitiesWarrior').warrior_abilities;
var mage_abilities = require('./abilitiesMage').mage_abilities;
var ranger_abilities = require('./abilitiesRanger').ranger_abilities;
exports.abilities = {
    warrior_abilities: warrior_abilities,
    mage_abilities: mage_abilities,
    ranger_abilities: ranger_abilities,
};
