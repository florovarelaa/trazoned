const AbilityService = require('./Ability.service')

class FaseService {
    constructor() {

    }
    startFirstFase(game) {
        game.setFase(1)
        const turn = game.getTurnNumber()
        if (turn % 2 === 0) {
            AbilityService
        }

        console.log('1 - start');
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log('1 - end ');
                resolve();
            }, 3000)
        });

    }
    startSecondFase(game) {
        game.setFase(2)
        console.log('2 - START');
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log('2 - END');
                resolve();
            }, 3000)
        });
    }
}

module.exports = new FaseService()