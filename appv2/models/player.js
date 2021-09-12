export function player(id, color, movements, units) {
    this.id = id,
    this.color = color,
    this.startingPosition = [-1, -1],
    this.movements = movements, 
    this.units = units,
    this.setStartingPosition = (position) => {
        this.startingPosition = position
    }
    this.hasAliveUnits = () => {
        let aliveUnits = this.units.filter( unit => {
            return unit.isAlive()
        })
        
        return aliveUnits.length > 0
    },
    this.resetUnitsSteps = () => {
        this.units.forEach( unit => unit.resetSteps())
    }
}