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
    playerHasMovement(game, playerId, movementId) {
        const player = game.getPlayerById(playerId)
        if (!player) {
            throw('player not found');
        }
        // const movement = player.movements[movementId]
        let movement;
        if (movement) return true

        // TODO - continuar por aca. Hay que refactorizar antes. Los movimientos o shapes, tienen que ser abilities al igual que las armas. Todo es una ability y tienen id's.
        // A partir de esos ids podemos continuar sabiendo si el player tiene o no movement.
        movement = player.abilities[movementId]
        console.log('player', player.abilities)
        console.log('player', player.movements)
    }
}

module.exports = new PlayerService()