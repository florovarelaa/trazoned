const configuration = require('./configuration');
const PlayerService = require('./Player.service');

class AbilityService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    handlePlayerAbility(game, playerId, ability) {
        // console.log('playerId: ', playerId)
        // console.log('abilityId: ', ability)
        const mapState = game.getState()
        // console.log('mapState: ', game.getState())
        const playerHasAbility = PlayerService.playerHasAbility(game, playerId, ability.id, ability.type)
        this.getAbilityAvailablePositionsForPlayer(mapState, playerId, ability)
    }
    getAbilityAvailablePositionsForPlayer(mapState, playerId, ability) {
    }
}

module.exports = new AbilityService(configuration.mapSize)