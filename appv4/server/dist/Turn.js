"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turn = void 0;
var Step = require('./Step');
var Turn = /** @class */ (function () {
    function Turn() {
        this.firstStep = new Step();
        this.secondStep = new Step();
    }
    return Turn;
}());
exports.Turn = Turn;
module.exports = Turn;
