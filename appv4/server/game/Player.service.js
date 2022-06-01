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
}

module.exports = new PlayerService()