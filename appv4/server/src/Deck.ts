const { configuration } = require('./configuration')
const { deckSize } = configuration

export class Deck {
    unitName: any;
    cards: any;
    constructor(unit) {
        this.unitName = unit.name
        this.cards = unit.abilities;
    }
    addCard(card) {
        if(this.cards.length < deckSize) {
            this.cards.push(card)
        } else {
            console.log('deck is full')
        }
    }
    getRandomCard() {
        const randomCard = Object.values(this.cards)[Math.floor(Math.random() * Object.keys(this.cards).length)];
        return randomCard;
    }
}