class Player {
    constructor(id, movement, units) {
        this.id = id
        this.startingPosition = [-1, -1]
        this.movement = movement
        this.units = units
        this.setUnitsPlayerId()
        this.color = '#b5a5a7'
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
    getStartingPosition = () => {
        return this.startingPosition
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
    setColor = (color) => {
        this.color = color
    }
}

module.exports = Player