const configuration = require("./configuration");

class PlayerService {
    constructor() {}
    playersDrawCards(players) {
        players.forEach((player) => {
            player.drawCards()
        })
    }
    playerHasAbility( player, ability ) {
        // TODO check that ability is not in cooldown
        const abilityId = ability.id;
        const abilityType = ability.type;

        let playerAbility;
        switch (abilityType) {
            case configuration.abilityTypes.ABILITY:
                const basicAbilities = player.getHand();
                playerAbility = basicAbilities.filter( ability => ability.id === abilityId)
                break;
        
            case configuration.abilityTypes.MOVEMENT:
                const movements = player.getMovements();
                playerAbility = movements.filter( movement => movement.id === abilityId)
                break;
        
            case configuration.abilityTypes.EQUIPMENT:
                //TODO
                break;
        
            case configuration.abilityTypes.ITEM:
                //TODO
                break;
            default:
                break;
        }

        if (playerAbility) return true

        throw('player can not use that ability')
    }
    setPlayerWishedTurn(game, playerId, abilityId, chosenPosition, step) {
        const player = game.getPlayerById(playerId)
        player.setPlayerWishedTurn(abilityId, chosenPosition, step)    
    }
    getPositionAtStep(player, step) {
        return player.getPositionAtStep(step);
    }
    setPositionAtStep(player, step, position) {
        player.setPositionAtStep(step, position)
    }
}

module.exports = new PlayerService()