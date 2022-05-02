const constants = require('./constants')
const { inventorySize } = constants;

class Player {
    constructor(id, deck, movements) {
        this.id = id
        this.unit = deck.unit
        this.deck = deck
        this.movements = movements
        this.inventory = new Inventory(inventorySize)
        this.health = unitsInitialHealth
        this.color
        this.startingPosition
        this.position
        this.currentCards
        this.currentMovements
        this.availableCardSlots
        this.wishedTurn = new Turn()
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
    isAlive = () => {
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