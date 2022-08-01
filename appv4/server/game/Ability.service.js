const configuration = require('./configuration');
const PlayerService = require('./Player.service');
const MapService = require('./Map.service');
const keywords = require('./Keywords');

class AbilityService {
    constructor(mapSize) {
        this.mapSize = mapSize
    }
    // fasePosition = { 0, 1, 2, 3}
    handlePlayerWantToUseAbility(game, playerId, ability, step) {
        let player;
        try {
            player = game.getPlayerById(playerId)
        
            if (!player) throw('player not found');
        } catch (error) {
            console.error(error);            
        }

        let playerHasAbility
        try {
            playerHasAbility = PlayerService.playerHasAbility(player, ability)
        } catch (error) {
            console.error(error);            
        }
        if (!playerHasAbility) throw('player can not use that ability')

        // if(ability.isAMovement() && (step === 1 || step === 3) ) {
        //     throw('cannot use a movement as an ability')
        // }

        // get player position at step
        const playerPositionAtStep = PlayerService.getPositionAtStep(player, step)

        const availablePositions = this.getAbilityAvailablePositionsForPosition(playerPositionAtStep, ability)
        // TODO filter availablePositions depending on mapState.
        return availablePositions
    }
    handlePlayerUseAbility(game, playerId, ability, chosenPosition, step) {
        let player
        try {
            player = game.getPlayerById(playerId)
        
            if (!player) throw('player not found');
            PlayerService.playerHasAbility(player, ability)
        } catch (error) {
            console.error(error);
            return          
        }

        if (ability.keywords.includes(keywords.caster.self)) {
            console.log('entro aca. Esta mal. no deberia')
            PlayerService.setPlayerWishedTurn(game, playerId, ability.id, 'A_A', step)
            return
        }

        // get player position at step
        const playerPositionAtStep = PlayerService.getPositionAtStep(player, step)

        let positionInAvailablePositions
        try {
            const availablePositions = this.getAbilityAvailablePositionsForPosition(playerPositionAtStep, ability)
           positionInAvailablePositions = this.positionInAvailablePositions(chosenPosition, availablePositions)
        } catch (error) {
            console.error(error);    
            if(!positionInAvailablePositions) return
        }

        // convert from chosenPosition to the matching key on the ability. (chosen key - player position)
        const playerPosition = player.getPosition()

        const abilityChosenPosition = this.fromPlayerChosenPositionToAbilityPosition(playerPosition, chosenPosition, ability)
        // TODO set player wished turn
        PlayerService.setPlayerWishedTurn(game, playerId, ability.id, abilityChosenPosition, step)
    }
    getAbilityAvailablePositionsForPosition(position, ability) {

        const coordinates = this.getCoordinatesFromPosition(position);
        
        const abilityShapePositions = ability.shape.positions
        const addedPositions = this.addCoordiantesAndPositions(coordinates, abilityShapePositions)
        return addedPositions
    }
    getCoordinatesFromPosition(position) {
        const coordinatesArr = position.split('_')
        const x = coordinatesArr[0]
        const y = coordinatesArr[1]

        const coordinates = {
            x,
            y
        }

        return coordinates
    }
    getKeyFromCoordinates(coordinates) {
        const { x, y } = coordinates
        return `${x}_${y}`
    }
    addCoordiantesAndPositions(coordinates, shapePositions) {
        let addedPositions = {};
        for (let key in shapePositions) {
            const keypos = this.getCoordinatesFromPosition(key)
            const addedCoordinates = this.addCoordinates(keypos, coordinates)
            if ( MapService.isOutOfMap(addedCoordinates) ) continue 
            const addedKey = this.getKeyFromCoordinates(addedCoordinates)

            const addedKeyPositions = shapePositions[key].map( (key, index) => {
                const keyCoordinates = this.getCoordinatesFromPosition(key)
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
    positionInAvailablePositions(key, availablePositions) {
        const isAvailable = availablePositions[key]

        if(!isAvailable) throw('invalid selected position')

        return true
    }
    fromPlayerChosenPositionToAbilityPosition(playerPosition, chosenPosition, ability) {
    }
}

module.exports = new AbilityService(configuration.mapSize)