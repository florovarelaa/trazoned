export function ability(id, name, selectPositions, affectPositions, isMovement, damage, text) {
    this.name = name
    this.id = id,
    this.selectPositions = selectPositions,
    this.affectPositions = affectPositions,
    this.isMovement = isMovement, 
    this.damage = damage,
    this.text = text,
    this.setSelectPositions = (selectPositions) => {
        this.selectPositions = selectPositions
    },
    this.setAffectPositions = (affectPositions) => {
        this.affectPositions = affectPositions
    }
}