const keywords = {
    // used for the unit casting the ability
    caster: {
        exhaust: 'exhaust',
        silence: 'silence',
        fast: 'fast',
        slow: 'slow',
        firstly: 'firstly',
        secondly: 'secondly',
        hybrid: 'hybrid',
        self: 'self',
    },
    // used for the ability target effect
    effect: {
        damage: 'damage',
        heal: 'heal',
        shield: 'shield',
        fast: 'fast',
        slow: 'slow',
        exhaust: 'exhaust',
        silence: 'silence',
        hybrid: 'hybrid',
        move: 'move',
        firstly: 'firstly',
        secondly: 'secondly',
        area: 'area',
        areaBlock: 'areaBlock',
        incoming_modifier: 'incoming_modifier',
        outgoing_modifier: 'outgoing_modifier',
    },
    // used for the ability target
    target: {
        caster: 'caster',
        enemy: 'enemy',
        ally: 'ally',
    },
    damage: {
        5: 5,
        4: 4,
        3: 3,
        2: 2,
        1: 1
    }
}

module.exports = keywords;