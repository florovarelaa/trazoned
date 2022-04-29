const constants = require('./constants')
const { inventorySize } = constants;

class Player {
    constructor(id, deck, movements) {
        this.id = id
        this.unit = deck.unit
        this.deck = deck
        this.movements = movements
        this.inventory = new Inventory(inventorySize)
        this.color
        this.startingPosition
    }
    setColor(color) {
        this.color = color
    }
    setUnitsPlayerId() {
        this.unit.setPlayerId(this.id)
    }
    setStartingPosition = (position) => {
        this.startingPosition = position
    }
    getStartingPosition = () => {
        return this.startingPosition
    }
    hasAliveUnits = () => {
        return this.unit.isAlive()
    }
    getUnit = () => {
        return this.unit
    }
    getInventory = () => {
        return this.inventory
    }
    getDeck = () => {
        return this.deck
    }
}

module.exports = Player;