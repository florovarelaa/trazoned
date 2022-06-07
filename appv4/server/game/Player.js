const Inventory = require('./Inventory');
const Turn = require('./Turn');
const configuration = require('./configuration');
const { inventorySize, unitsInitialHealth } = configuration;

class Player {
    constructor(id, deck, movements, numberOfAvailableAbilitiesSlots = 0) {
        this.id = id
        this.unit = deck.unit
        this.deck = deck
        this.movements = movements
        this.inventory = new Inventory(inventorySize)
        this.health = unitsInitialHealth
        this.color
        this.startingCoordinates
        this.coordinates
        this.abilitiesSlots = []
        this.numberOfAvailableAbilitiesSlots = numberOfAvailableAbilitiesSlots
        this.turnHistory = []
        this.currentTurn = new Turn()
        this.wishedTurn = []
        this.turnCoordinates = Array.apply(null, Array(configuration.stepsPerTurn * 2)).map(function () {})
        this.abilities = {
            1: deck.unit.basicAbility1,
            2: deck.unit.basicAbility2
        }
        this.equipment = {
            armor: null,
            weapon: null,
            amulet: null,
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
    setCoordinates = (coordinates) => {
        this.coordinates = coordinates
    }
    unblockAbilitySlot = () => {
        if (this.numberOfAvailableAbilitiesSlots < configuration.maxAbilitiesSlots) {
            this.numberOfAvailableAbilitiesSlots++
        }
    }
    drawCards = () => {
        while (this.abilitiesSlots.length <= this.numberOfAvailableAbilitiesSlots ) {
            const card = this.deck.getRandomCard()
            this.abilitiesSlots.push(card)
        }
    }
    getBasicAbilities = () => {
        return Object.values(this.abilities)
    } 
    getMovements = () => {
        return Object.values(this.movements)
    } 
    setPlayerWishedTurn(abilityId, chosenKey, step) {
        this.wishedTurn[step] = {
            abilityId,
            chosenKey
        }
    }
}

module.exports = Player;