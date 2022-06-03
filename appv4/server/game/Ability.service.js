const configuration = require('./configuration');
const PlayerService = require('./Player.service');

class AbilityService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    // fasePosition = { 0, 1, 2, 3}
    handlePlayerWantToUseAbility(game, playerId, ability) {
        const playerHasAbility = PlayerService.playerHasAbility(game, playerId, ability)
        if (!playerHasAbility) throw('player can not use that ability')
        this.getAbilityAvailablePositionsForPlayer(game, playerId, ability)
    }
    getAbilityAvailablePositionsForPlayer(game, playerId, ability) {
        const player = game.getPlayerById(playerId)

        if (!player) throw('player not found');

        const mapState = game.getState()

        const playerPosition = mapState.players[playerId]

        const positionAsXY = this.getPositionAsXY(playerPosition);

        return positionAsXY
    }
    getPositionAsXY(position) {
        const coordinates = position.split('_')
        const x = coordinates[0]
        const y = coordinates[1]

        const positionAsXY = {
            x,
            y
        }

        return positionAsXY
    }
}

module.exports = new AbilityService(configuration.mapSize)