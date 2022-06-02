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
    playerHasAbility(game, playerId, abilityId, abilityType) {
        const player = game.getPlayerById(playerId)
        if (!player) {
            throw('player not found');
        }

        console.log('abilityType. ?', abilityType)
        let ability;
        switch (abilityType) {
            case configuration.abilityTypes.ABILITY:
                const basicAbilities = player.getBasicAbilities();
                const basicAbility = basicAbilities.filter( ability => ability.id === abilityId)
                console.log('basicAbility', basicAbility)
                break;
        
            case configuration.abilityTypes.MOVEMENT:
                const movements = player.getMovements();
                const movement = movements.filter( ability => ability.id === abilityId)
                console.log('abilityId: ', abilityId)
                console.log('movement', movement)
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

        // TODO - continuar por aca. Hay que refactorizar antes. Los movimientos o shapes, tienen que ser abilities al igual que las armas. Todo es una ability y tienen id's.
        // A partir de esos ids podemos continuar sabiendo si el player tiene o no movement.
        // console.log('player abilities', player.abilities)
        // console.log('player movements', player.movements)
    }
}

module.exports = new PlayerService()