var Inventory = require('./Inventory');
var Turn = require('./Turn');
var MOVEMENTS = require('./Instances/abilities/movements/movements');
var configuration = require('./configuration').configuration;
var inventorySize = configuration.inventorySize, unitsInitialHealth = configuration.unitsInitialHealth;
var Player = /** @class */ (function () {
    function Player(id, deck) {
        var _this = this;
        this.setColor = function (color) {
            _this.color = color;
        };
        this.isAlive = function () {
            return _this.health > 0;
        };
        this.getUnit = function () {
            return _this.unit;
        };
        this.getInventory = function () {
            return _this.inventory;
        };
        this.getDeck = function () {
            return _this.deck;
        };
        this.setCoordinates = function (coordinates) {
            _this.coordinates = coordinates;
        };
        this.setPosition = function (position) {
            _this.position = position;
        };
        this.getPosition = function () {
            return _this.position;
        };
        this.drawCard = function () {
            var card;
            if (_this.hand.length <= configuration.handSize) {
                card = _this.deck.getRandomCard();
                while (_this.hand.includes(card)) {
                    card = _this.deck.getRandomCard();
                }
                _this.hand.push(card);
            }
        };
        this.drawCards = function () {
            var card;
            while (_this.hand.length <= configuration.handSize) {
                card = _this.deck.getRandomCard();
                while (_this.hand.includes(card)) {
                    card = _this.deck.getRandomCard();
                }
                _this.hand.push(card);
            }
        };
        this.getHand = function () {
            return _this.hand;
        };
        this.getMovements = function () {
            return Object.values(_this.movements);
        };
        this.id = id;
        this.unit = deck.unit;
        this.deck = deck;
        this.hand = [];
        this.movements = MOVEMENTS._1_12_;
        this.inventory = new Inventory(inventorySize);
        this.health = unitsInitialHealth;
        this.color;
        this.startingCoordinates;
        this.coordinates;
        this.position;
        this.turnHistory = [];
        this.wishedTurn = [];
        this.positionsAtSteps = Array(4).fill(null);
        this.equipment = {
            armor: null,
            weapon: null,
            amulet: null,
        };
        this.drawCards();
    }
    Player.prototype.setPlayerWishedTurn = function (abilityId, chosenPosition, step) {
        this.wishedTurn[step] = {
            abilityId: abilityId,
            chosenPosition: chosenPosition
        };
    };
    Player.prototype.setPositionAtStep = function (step, position) {
        this.positionsAtSteps[step] = position;
    };
    Player.prototype.getPositionAtStep = function (step) {
        var position;
        (step === 0) ?
            position = this.position
            :
                position = this.positionsAtSteps[step];
        return position;
    };
    return Player;
}());
module.exports = Player;
