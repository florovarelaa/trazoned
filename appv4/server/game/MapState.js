class MapState {
    constructor(state) {
        this.state = state

        // this.state = {
        //     players: {
        //         // 'unitId': x_y
        //     },
        //     areas: {
        //         // '2_8': new MapTile()
        //     }
        //    npcs: {
            // 'unitId': x_y
        // }
        //    items: {
            // 'x_y': itemId
        // }
        // }
    }
    getMapState() {
        return this.state
    }
}

module.exports = MapState
