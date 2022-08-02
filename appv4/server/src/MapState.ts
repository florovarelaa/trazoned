export class MapState {
    players: any
    areas: any
    npcs: any
    constructor(state) {
        const { players, areas, npcs } = state
        this.players = players
        this.areas = areas
        this.npcs = npcs

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
        return {
            players: this.players,
            areas: this.areas,
            npcs: this.npcs
        }
    }
}