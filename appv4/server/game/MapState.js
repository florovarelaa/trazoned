class MapState {
    constructor(mapState) {
        this.state = mapState

        // this.state = {
        //     players: {
        //         // 'unitId': x_y
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
