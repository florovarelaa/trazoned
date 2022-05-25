class MapState {
    constructor(mapState) {
        this.state = mapState

        // this.state = {
        //     players: {
        //         // '3_7': 1 // unitId
        //     },
        //     areas: {
        //         // '2_8': new MapTile()
        //     }
        // }
    }
    getMapState() {
        return this.state
    }
}

module.exports = MapState
