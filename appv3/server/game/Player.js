class Player {
    constructor(id, movement, units) {
        this.id = id
        this.startingPosition = [-1, -1]
        this.movement = movement
        this.units = units
        this.setUnitsPlayerId()
    }
    setId(id) {
        this.id = id
    }
    setUnitsPlayerId() {
        this.units.forEach( unit => {
            unit.setPlayerId(this.id)
        })
    }
    setStartingPosition = (position) => {
        this.startingPosition = position
    }
    hasAliveUnits = () => {
        let aliveUnits = this.units.filter( unit => {
            return unit.isAlive()
        })
        
        return aliveUnits.length > 0
    }
    resetUnitsSteps = () => {
        this.units.forEach( unit => unit.resetSteps())
    }
}

module.exports = Player