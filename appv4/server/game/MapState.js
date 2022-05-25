class MapState {
    constructor(map) {
        this.units = {
            // '3_7': 1 // unitId
        }
        this.areas = {
            // '2_8': new MapTile()
        }
    }
    getMapState() {
        return this.state
    }
    setPlayers(players) {
        players.forEach(player => {
            this.units[`${player.startingPosition.x}_${player.startingPosition.y}`] = player.id
        });
    }
}

module.exports = MapState
