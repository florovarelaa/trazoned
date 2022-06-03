const configuration = require('./configuration');
const PlayerService = require('./Player.service');

class AbilityService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    handlePlayerAbility(game, playerId, ability) {
        const mapState = game.getState()
        const playerHasAbility = PlayerService.playerHasAbility(game, playerId, ability)
        if (!playerHasAbility) throw('player can not use that ability')
        this.getAbilityAvailablePositionsForPlayer(mapState, playerId, ability)
    }
    getAbilityAvailablePositionsForPlayer(mapState, playerId, ability) {
        console.log('mapState: ', mapState)
        console.log('--------------------')
        console.log('playerId: ', playerId)
        console.log('--------------------')
        console.log('ability: ', ability)
    }
}

module.exports = new AbilityService(configuration.mapSize)