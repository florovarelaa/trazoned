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
    handlePlayerUseAbility(game, playerId, ability, chosenKey, step) {
        try {
            PlayerService.playerHasAbility(game, playerId, ability)
        } catch (error) {
            console.error(error);            
        }

        let keyInAvailablePositions
        try {
            const availablePositions = this.getAbilityAvailablePositionsForPlayer(game, playerId, ability)
           keyInAvailablePositions = this.keyInAvailablePositions(chosenKey, availablePositions)
        } catch (error) {
            console.error(error);    
            if(!keyInAvailablePositions) return
        }

        // convert from chosenKey to the matching key on the ability. (chosen key - player position)

        // TODO set player wished turn
        PlayerService.setPlayerWishedTurn(game, playerId, ability.id, chosenKey, step)
    }
    getAbilityAvailablePositionsForPlayer(game, playerId, ability) {
        const player = game.getPlayerById(playerId)

        if (!player) throw('player not found');

        const mapState = game.getState()

        const playerKey = mapState.players[playerId]
        const playerCoordinates = this.getCoordinatesFromKey(playerKey);
        
        const abilityShapePositions = ability.shape.positions

        const addedPositions = this.addCoordiantesAndPositions(playerCoordinates, abilityShapePositions)
        return addedPositions
    }
    getCoordinatesFromKey(key) {
        const coordinates = key.split('_')
        const x = coordinates[0]
        const y = coordinates[1]

        const positionAsXY = {
            x,
            y
        }

        return positionAsXY
    }
    getKeyFromCoordinates(coordinates) {
        const { x, y } = coordinates
        return `${x}_${y}`
    }
    addCoordiantesAndPositions(coordinates, shapePositions) {
        let addedPositions = {};
        for (let key in shapePositions) {
            const keypos = this.getCoordinatesFromKey(key)
            const addedCoordinates = this.addCoordinates(keypos, coordinates)
            if ( MapService.isOutOfMap(addedCoordinates) ) continue 
            const addedKey = this.getKeyFromCoordinates(addedCoordinates)

            const addedKeyPositions = shapePositions[key].map( (key, index) => {
                const keyCoordinates = this.getCoordinatesFromKey(key)
                const addedCoords = this.addCoordinates(keyCoordinates, coordinates)
                if ( MapService.isOutOfMap(addedCoords) ) return false
                const addedPosition = this.getKeyFromCoordinates(addedCoords)
                return addedPosition
            }).filter((position) => position !== false)

            addedPositions[addedKey] = addedKeyPositions;
        }

        return addedPositions;
    }
    addCoordinates(coordinate1, coordinate2) {
        return {
            x: parseInt(coordinate1.x, 10) + parseInt(coordinate2.x, 10),
            y: parseInt(coordinate1.y, 10) + parseInt(coordinate2.y, 10),
        }
    }
    keyInAvailablePositions(key, availablePositions) {
        const isAvailable = availablePositions[key]

        if(!isAvailable) throw('invalid selected position')

        return true
    }
}

module.exports = new AbilityService(configuration.mapSize)