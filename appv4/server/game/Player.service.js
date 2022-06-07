const configuration = require("./configuration");

class PlayerService {
    constructor() {}
    unblockPlayersAbilitySlot(players) {
        players.forEach((player) => {
            player.unblockAbilitySlot()
        });
    }
    playersDrawCards(players) {
        players.forEach((player) => {
            player.drawCards()
        })
    }
    playerHasAbility(game, playerId, ability) {
        const player = game.getPlayerById(playerId)
        
        if (!player) throw('player not found');

        const abilityId = ability.id;
        const abilityType = ability.type;

        let playerAbility;
        switch (abilityType) {
            case configuration.abilityTypes.ABILITY:
                const basicAbilities = player.getBasicAbilities();
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
    setPlayerWishedTurn(game, playerId, abilityId, chosenKey, step) {
        const player = game.getPlayerById(playerId)
        player.setPlayerWishedTurn(abilityId, chosenKey, step)    
    }
}

module.exports = new PlayerService()