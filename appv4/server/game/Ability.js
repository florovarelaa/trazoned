// keywords - all that affects the step of the casting unit

//      Abilitiy.keywords = ['Exhaust', 'Silence', 'Fast', 'Slow', 'Firstly', 'Secondly', 'Hybrid', 'Movement']


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
    //         keyword: 'sustain',
    //         target: 'enemy',
    //         type: 'damage',
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
    //         keyword: 'sustain',
    //         target: 'caster',
    //         type: 'heal',
    //         value: 2,
    //         turns: 3,
    //     },
    //     {
    //         keyword: 'sustain',
    //         target: 'ally',
    //         type: 'heal',
    //         value: 3,
    //         turns: 2,
    //     },
    //     { 
        //     keyword: 'move',
        //     target: 'caster | enemy | ally',
        //     direction: 'cellSelected | opposite',
        //     cells: 1 | 2 | 2
    //     }
    // ]


// id
// name
// selectPositions - las posiciones que se pueden elegir al usar esta carta. son genericas y despues dependera de la posicion de la unidad.
// affectPositions - las posiciones que afecta la carta cuando es ejecutada.
// text
// keywords - los effectos que se aplican al jugador que usa la carta
// targetEffects - los effectos que se aplican a los jugadores que se encuentran en el area.

class Ability {
    constructor(id, name, selectPositions, affectPositions, text, keywords, targetEffects) {
        this.id = id
        this.name = name
        this.selectPositions = selectPositions
        this.affectPositions = affectPositions
        this.text = text
        this.keywords = keywords
        this.targetEffects = targetEffects
    }
}

module.exports = Ability