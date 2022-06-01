const Inventory = require('./Inventory');
const Turn = require('./Turn');
const configuration = require('./configuration');
const { inventorySize, unitsInitialHealth } = configuration;

class Player {
    constructor(id, deck, movements, numberOfAvailableCardSlots = 0) {
        this.id = id
        this.unit = deck.unit
        this.deck = deck
        this.movements = movements
        this.inventory = new Inventory(inventorySize)
        this.health = unitsInitialHealth
        this.color
        this.startingPosition
        this.position
        this.cardsSlots = []
        this.currentMovements
        this.numberOfAvailableCardSlots = numberOfAvailableCardSlots
        this.turnHistory = []
        this.currentTurn = new Turn()
        this.abilities = {
            basicAbility1: deck.unit.basicAbility1,
            basicAbility2: deck.unit.basicAbility2
        }
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
    unblockAbilitySlot = () => {
        if (this.numberOfAvailableCardSlots < configuration.maxCardSlots) {
            this.numberOfAvailableCardSlots++
        }
    }
    drawCards = () => {
        while (this.cardsSlots.length <= this.numberOfAvailableCardSlots ) {
            const card = this.deck.getRandomCard()
            this.cardsSlots.push(card)
        }
    }
}

module.exports = Player;