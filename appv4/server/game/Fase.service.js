const AbilityService = require('./Ability.service')
const PlayerService = require('./Player.service')

class FaseService {
    constructor() {}
    initFirstFase(game) {
        game.setFase(1)
        const turn = game.getTurnNumber()
        if (turn === 1 || turn % 3 === 0) {
            PlayerService.unblockPlayersAbilitySlot(game.players)
        }
        PlayerService.playersDrawCards(game.players) 
        console.log('game.players:', game.players)
    }
    startFirstFase(game) {
        this.initFirstFase(game)

        const turn = game.getTurnNumber()

        console.log('\n');
        console.log('------ TURN: ', turn);
        console.log('fase 1 start');
        console.log('...');
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log('fase 1 end');
                console.log('------');
                resolve();
            }, 3000)
        });

    }
    startSecondFase(game) {
        game.setFase(2)
        console.log('fase 2 start');
        console.log('...');
        return new Promise(function(resolve) {
            setTimeout(function() {
                console.log('fase 2 end');
                resolve();
            }, 3000)
        });
    }
}

module.exports = new FaseService()