const Step = require('./Step');

class Turn {
    constructor() {
        this.firstStep = new Step()
        this.secondStep = new Step()
    }
}

module.exports = Turn;