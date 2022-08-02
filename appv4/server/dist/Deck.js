"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var configuration = require('./configuration').configuration;
var deckSize = configuration.deckSize;
var Deck = /** @class */ (function () {
    function Deck(unit) {
        this.unitName = unit.name;
        this.cards = unit.abilities;
    }
    Deck.prototype.addCard = function (card) {
        if (this.cards.length < deckSize) {
            this.cards.push(card);
        }
        else {
            console.log('deck is full');
        }
    };
    Deck.prototype.getRandomCard = function () {
        var randomCard = Object.values(this.cards)[Math.floor(Math.random() * Object.keys(this.cards).length)];
        return randomCard;
    };
    return Deck;
}());
exports.Deck = Deck;
