const constants = require('./configuration')
const { deckSize } = constants

class Deck {
    constructor(unit) {
        this.unit = unit
        this.cards = ['card1', 'card2', 'card3', 'card4']
    }
    addCard(card) {
        if(this.cards.length < deckSize) {
            this.cards.push(card)
        } else {
            console.log('deck is full')
        }
    }
    getRandomCard() {
        const randomCard = this.cards[Math.floor(Math.random() * this.cards.length)];
        return randomCard;
    }
}

module.exports = Deck