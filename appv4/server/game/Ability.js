// keywords - all that affects the step of the casting unit

//      Ability.keywords = ['exhaust', 'silence', 'fast', 'slow', 'firstly', 'secondly', 'hybrid']

// targetEffects

    // This ability when fast will
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
    //         sustain: 'true',
    //         value: 2,
    //         turns: 4,
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
    //         sustain: true,
    //         value: 2,
    //         turns: 3,
    //     },
    //     {
    //         keyword: 'heal',
    //         target: 'ally',
    //         sustain: true,
    //         value: 3,
    //         turns: 2,
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
    //              sustain: true,
    //              turns: 2,
    //          }
    //          turns: 3,
    //     },
    //     {
    //          keyword: 'areaBlock',
    //          target: all | ally | enemy,
    //          turns: 3,
    //     },
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
class Ability {
    constructor(id, name, type, positions, text, keywords, targetEffects) {
        this.id = id
        this.name = name
        this.type = type
        this.positions = positions
        this.text = text
        this.keywords = keywords
        this.targetEffects = targetEffects
    }
    setPlayer(player) {
        this.player = player
    }
    getPlayer() {
        return this.player
    }
    getPositions() {
        return this.positions
    }
    setSelectedCell(x, y) {
        this.selectedCell = {
            x,
            y
        }
    }
}

module.exports = Ability