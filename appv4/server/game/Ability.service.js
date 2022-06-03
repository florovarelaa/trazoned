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
        const availablePositions = this.getAbilityAvailablePositionsForPlayer(game, playerId, ability)
        // TODO filter availablePositions depending on mapState.
    }
    getAbilityAvailablePositionsForPlayer(game, playerId, ability) {
        const player = game.getPlayerById(playerId)

        if (!player) throw('player not found');

        const mapState = game.getState()

        const playerPosition = mapState.players[playerId]

        const positionAsXY = this.getPositionAsXY(playerPosition);

        const abilityShapePositions = ability.shape.positions

        const addedPositionAsXY = this.addPositionAsXYAndShapePositions(positionAsXY, abilityShapePositions)

        return addedPositionAsXY
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
    getXYAsPosition(XY) {
        const { x, y } = XY
        return `${x}_${y}`
    }
    addPositionAsXYAndShapePositions(positionAsXY, positions) {        
        let addedPositions = {};

        for (let key in positions) {
            const keyAsXY = this.getPositionAsXY(key)
            const addedKeyAsXY = this.addKeyAsXYAndPositionAsXY(keyAsXY, positionAsXY)
            const addedKey = this.getXYAsPosition(addedKeyAsXY)
            
            const addedKeyPositions = positions[key].map( (position, index) => {
                const indexPositionAsXY = this.getPositionAsXY(position)
                const addedPositionAsXY = this.addKeyAsXYAndPositionAsXY(indexPositionAsXY, positionAsXY)
                const addedPosition = this.getXYAsPosition(addedPositionAsXY)
                return addedPosition
            })

            addedPositions[addedKey] = addedKeyPositions;
        }

        return addedPositions;
    }
    addKeyAsXYAndPositionAsXY(keyAsXY, positionAsXY) {
        return {
            x: parseInt(keyAsXY.x, 10) + parseInt(positionAsXY.x, 10),
            y: parseInt(keyAsXY.y, 10) + parseInt(positionAsXY.y, 10),
        }
    }
}

module.exports = new AbilityService(configuration.mapSize)