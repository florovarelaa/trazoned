const configuration = require('./configuration');
const PlayerService = require('./Player.service');
const MapService = require('./Map.service');

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
        return availablePositions
    }
    handlePlayerUseAbility(game, playerId, ability, selectedCellKeyAsPosition, step) {
        try {
            PlayerService.playerHasAbility(game, playerId, ability)
        } catch (error) {
            console.error(error);            
        }

        let positionInAvailablePositions
        try {
            const availablePositions = this.getAbilityAvailablePositionsForPlayer(game, playerId, ability)
           positionInAvailablePositions = this.keyAsPositionInAvailablePositions(selectedCellKeyAsPosition, availablePositions)
        } catch (error) {
            console.error(error);    
            if(!positionInAvailablePositions) return
        }

        //ACAAA
        const selectedAbilityKeyAsPosition = 0
        // = this.getSelectedAbilityKeyAsPosition(selectedCellKeyAsPosition)

        // TODO set player wished turn
        PlayerService.setPlayerWishedTurn(game, playerId, ability.id, selectedAbilityKeyAsPosition, step)
    }
    getAbilityAvailablePositionsForPlayer(game, playerId, ability) {
        const player = game.getPlayerById(playerId)

        if (!player) throw('player not found');

        const mapState = game.getState()

        const playerPosition = mapState.players[playerId]

        const positionAsXY = this.getPositionAsXY(playerPosition);

        const abilityShapePositions = ability.shape.positions

        const addedPositionsAsXY = this.addPositionAsXYAndShapePositions(positionAsXY, abilityShapePositions)

        console.log('addedPositionsAsXY: ', addedPositionsAsXY)
        return addedPositionsAsXY
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
            if ( MapService.isOutOfMap(addedKeyAsXY) ) continue 
            const addedKey = this.getXYAsPosition(addedKeyAsXY)

            const addedKeyPositions = positions[key].map( (position, index) => {
                const indexPositionAsXY = this.getPositionAsXY(position)
                const addedPositionAsXY = this.addKeyAsXYAndPositionAsXY(indexPositionAsXY, positionAsXY)
                if ( MapService.isOutOfMap(addedPositionAsXY) ) return false
                const addedPosition = this.getXYAsPosition(addedPositionAsXY)
                return addedPosition
            }).filter((position) => position !== false)

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
    keyAsPositionInAvailablePositions(keyAsPosition, availablePositions) {
        const isAvailable = availablePositions[keyAsPosition]

        if(!isAvailable) throw('invalid selected position')

        return true
    }
}

module.exports = new AbilityService(configuration.mapSize)