const configuration = require('./configuration')
const { deckSize } = configuration

class Deck {
    constructor(unit) {
        this.unit = unit
        this.cards = ['card1Id', 'card2Id', 'card3Id', 'card4Id']
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