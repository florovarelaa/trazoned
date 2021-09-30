class Ability {
    constructor(id, name, selectPosition, affectPositions, isMovement, damage, text) {
        this.name = name
        this.id = id
        this.selectPosition = selectPosition
        this.affectPositions = affectPositions
        this.isMovement = isMovement 
        this.damage = damage
        this.text = text
    }
    setSelectPosition = (selectPosition) => {
        this.selectPosition = selectPosition
    }
    setAffectPositions = (affectPositions) => {
        this.affectPositions = affectPositions
    }
}

module.exports = Ability