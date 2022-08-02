const Step = require('./Step');

export class Turn {
    firstStep: any;
    secondStep: any;
    constructor() {
        this.firstStep = new Step()
        this.secondStep = new Step()
    }
}