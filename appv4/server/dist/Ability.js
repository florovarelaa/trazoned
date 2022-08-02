"use strict";
// keywords - all that affects the step of the casting unit
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ability = void 0;
//      Ability.keywords = ['fast', 'slow', 'firstly', 'secondly', 'hybrid']
// targetEffects
// This ability when cast will
//     deal 10 damage to all enemies in the selected area
//     heal 10 damage to the player unsing the card
//     give the keyword sustain to for 2 damage and 4 turns on all enemies in the selected area
//     give the keyword fast to all enemies in the selected area
//     give the keyword fast to the player using the card
//     give the keyword sustain for 1 heal and 3 turns to the player using the card
//     give the keyword sustain for 3 heal and 2 turns to all allies in the selected area
//     move the target a distance from the player casting unit cell
//     move the caster  
// Ability.targetEffects = [
//     {   
//         keyword: 'damage',
//         target: 'enemy',
//         value: 10
//     },
//     {   
//         keyword: 'heal',
//         target: 'caster',
//         value: 10
//     },
//     {
//         keyword: 'damage',
//         target: 'enemy',
//         sustain: '4',
//         value: 2,
//     },
//     {
//         keyword: 'fast',
//         target: 'enemy',
//     },
//     {
//         keyword: 'fast',
//         target: 'caster'
//     },
//     {
//         keyword: 'heal',
//         target: 'caster',
//         sustain: 3,
//         value: 2,
//     },
//     {
//         keyword: 'heal',
//         target: 'ally',
//         sustain: 2,
//         value: 3,
//     },
//     { 
//          keyword: 'move',
//          target: 'caster | enemy | ally',
//          direction: 'cellSelected | opposite',
//          cells: 1 | 2 | 2
//     },
//     {
//          keyword: 'move',
//          target: 'caster',
//          position: 'selected' // would be an object {x: number, y: number} selected grid relative to unit position,
//          collision: boolean // if false, it can go through occupied/blocked cells
//     },
//     {
//          keyword: 'area',
//          effect: {
//              keyword: 'damage'
//              target: 'all',
//              value: 5
//              sustain: 2,
//          }
//          sustains: 3,
//     },
//     {
//          keyword: 'areaBlock',
//          target: all | ally | enemy,
//          sustains: 3,
//     },
//      {
//          keyword: targeted, abilities with this keyword must have a shape with all cells available to a distance, a rhombus shape
//          target: all | ally | enemy
//      }
// ]
// id
// name
// positions - // keys correspond to a position in a grid where the player is at the center [0,0].
// the array corresponds of affected tiles relative to the player casting position when the cell corresponding to the key is selected as target.
// const ability_warrior_0_positions = {
//     '-1_1': ['-2_2','-1_1','0_1','-1_0'],       
//     '0_1': ['0_2','-1_1','0_1','1_1'],       
//     '1_1': ['2_2','0_1','1_1','1_0'],       
//     '-1_0': ['-1_1','-2_0','-1_0','-1_-1'],       
//     '1_0': ['1_1','1_0','2_0','1_-1'],       
//     '-1_-1': ['-1_0','-1_-1','0_-1','-2_-2'],       
//     '0_-1': ['-1_-1','0_-1','1_-1','0_-2'],       
//     '1_-1': ['1_0','0_-1','1_-1','2_-2'],       
//    }
// text
// keywords - los effectos que se aplican al jugador que usa la carta
// targetEffects - los effectos que se aplican a los jugadores que se encuentran en el area.
// type: 1:Ability, 2:Movement, 3:Equipment, 4:Item
var Ability = /** @class */ (function () {
    function Ability(id, name, type, shape, text, keywords, targetEffects) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.shape = shape;
        this.text = text;
        this.keywords = keywords;
        this.targetEffects = targetEffects;
    }
    Ability.prototype.setPlayer = function (player) {
        this.player = player;
    };
    Ability.prototype.getPlayer = function () {
        return this.player;
    };
    Ability.prototype.getShape = function () {
        return this.shape;
    };
    Ability.prototype.setSelectedCell = function (x, y) {
        this.selectedCell = {
            x: x,
            y: y
        };
    };
    return Ability;
}());
exports.Ability = Ability;
