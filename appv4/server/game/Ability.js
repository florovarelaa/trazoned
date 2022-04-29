class Ability {
    constructor(id, name, selectPositions, affectPositions, isMovement, damage, text, keywords, casterEffect, targetEffect) {
        this.id = id
        this.name = name
        this.selectPositions = selectPositions
        this.affectPositions = affectPositions
        this.isMovement = isMovement 
        this.damage = damage
        this.text = text
        this.keywords = keywords
    }
    setSelectPosition = (selectPosition) => {
        this.selectPosition = selectPosition
    }
    setAffectPositions = (affectPositions) => {
        this.affectPositions = affectPositions
    }
}

module.exports = Ability

const effectExample = {
    damage: 10,
    heal: 10,
    exhaust: {
        target: 'enemy'
    },
    cast: {
        target: 'unit'
    },
    stun: {
        target: 'enemy'
    },
    sustains: {
        0: {
            affected: 'area',
            turns: 2,
            type: 'heal',
            value: 10
        },
        1: {
            affected: 'unit',
            target: 'enemy',
            turns: 2,
            type: 'damage',
            value: 3
        }
    },
    fast: false,
    slow: true,
    fistly: true,
    secondly: false,
    hybrid: true
}