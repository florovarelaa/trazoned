const constants = require('./constants')
const { deckSize } = constants

class Deck {
    constructor(unit) {
        this.unit = unit
        this.cards = []
    }
    addCard(card) {
        if(this.cards.length < deckSize) {
            this.cards.push(card)
        } else {
            console.log('deck is full')
        }
    }
}

module.exports = Deck