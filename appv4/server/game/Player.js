const Inventory = require('./Inventory');
const Turn = require('./Turn');
const MOVEMENTS = require('./Instances/abilities/movements/movements')
const configuration = require('./configuration');
const { inventorySize, unitsInitialHealth } = configuration;

class Player {
    constructor(id, deck) {
        this.id = id
        this.unit = deck.unit
        this.deck = deck
        this.hand = []
        this.movements = MOVEMENTS._1_12_
        this.inventory = new Inventory(inventorySize)
        this.health = unitsInitialHealth
        this.color
        this.startingCoordinates
        this.coordinates
        this.position
        this.turnHistory = []
        this.wishedTurn = []
        this.positionsAtSteps = Array(4).fill(null)
        this.equipment = {
            armor: null,
            weapon: null,
            amulet: null,
        }
        this.drawCards()
    }
    setColor = (color) => {
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
    setPosition = (position) => {
        this.position = position
    }
    getPosition = () => {
        return this.position
    }
    drawCard = () => {
        let card;
        if (this.hand.length <= configuration.handSize ) {
            card = this.deck.getRandomCard()
            while (this.hand.includes(card)) {
                card = this.deck.getRandomCard()
            }
            this.hand.push(card)
        }
    }
    drawCards = () => {
        let card;
        while (this.hand.length <= configuration.handSize ) {
            card = this.deck.getRandomCard()
            while (this.hand.includes(card)) {
                card = this.deck.getRandomCard()
            }
            this.hand.push(card)
        }
    }
    getHand = () => {
        return this.hand
    } 
    getMovements = () => {
        return Object.values(this.movements)
    } 
    setPlayerWishedTurn(abilityId, chosenPosition, step) {
        this.wishedTurn[step] = {
            abilityId,
            chosenPosition
        }
    }
    setPositionAtStep(step, position) {
        this.positionsAtSteps[step] = position
    }
    getPositionAtStep(step) {
        let position
        (step === 0) ? 
            position = this.position
        : 
            position = this.positionsAtSteps[step]

        return position
    }
}

module.exports = Player;