class MapState {
    constructor(map, players) {
        this.state = new Array(map.mapSize).fill(null).map(() => new Array(map.mapSize).fill(null));

        players.forEach( (player, index) => {
            this.state[player.startingPosition.x][player.startingPosition.y] = player.unit
        });
    }
    getMapState() {
        return this.state
    }
}

module.exports = MapState
