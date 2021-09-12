export function ability(id, name, selectPosition, affectPositions, isMovement, damage, text) {
    this.name = name
    this.id = id,
    this.selectPosition = selectPosition,
    this.affectPositions = affectPositions,
    this.isMovement = isMovement, 
    this.damage = damage,
    this.text = text,
    this.setSelectPosition = (selectPosition) => {
        this.selectPosition = selectPosition
    },
    this.setAffectPositions = (affectPositions) => {
        this.affectPositions = affectPositions
    }
}