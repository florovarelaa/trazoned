import { abilityService as AbilityService} from './Ability.service'
import { playerService as PlayerService } from './Player.service'
const configuration = require('./configuration')

class FaseService {
    constructor() {}
    initFirstFase(game) {
        game.setFase(1)
        PlayerService.playersDrawCards(game.players) 
    }
    startFirstFase(game) {
        this.initFirstFase(game)

        const turn = game.getTurnNumber()

        console.log('\n');
        console.log(' --- TURN: ', turn, ' --- ');
        console.log(`fase ${game.getFase()} start`);
        console.log('.');
        console.log('.');
        console.log('.');
        return new Promise<void> (function(resolve) {
            setTimeout(function() {
                console.log(`fase ${game.getFase()} end`);
                console.log('------');
                resolve();
            }, configuration.firstFaseDuration)
        });

    }
    startSecondFase(game) {
        game.setFase(2)
        console.log(`fase ${game.getFase()} start`);
        console.log('.');
        console.log('.');
        console.log('.');
        return new Promise<void>(function(resolve) {
            setTimeout(function() {
                console.log(`fase ${game.getFase()} end`);
                resolve();
            }, 1500)
        });
    }
}

export const faseService = new FaseService();