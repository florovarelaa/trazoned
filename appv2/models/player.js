export function player(id, color, movements, units) {
    this.id = id,
    this.color = color,
    this.startingPosition = [-1, -1],
    this.movements = movements, 
    this.units = units,
    this.setStartingPosition = (position) => {
        this.startingPosition = position
    }
}