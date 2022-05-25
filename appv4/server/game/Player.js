const Inventory = require('./Inventory');
const Turn = require('./Turn');
const constants = require('./constants');
const { inventorySize, unitsInitialHealth } = constants;

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
        this.turnHistory
        this.wishedTurn = new Turn()
    }
    setColor(color) {
        this.color = color
    }
    isAlive = () => {
        return this.health > 0 
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
    setPosition = (position) => {
        this.position = position
    }
     
}

module.exports = Player;