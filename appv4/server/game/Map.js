class MapTile {
    //     {
//          keyword: 'area',
//          effect: {
//              keyword: 'damage'
//              target: 'all',
//              value: 5
//              sustain: true,
//              turns: 2,
//          }
//          turns: 3,
    //     },
    //     {
//          keyword: 'areaBlock',
//          target: all | ally | enemy,
//          turns: 3,
    //     },
    constructor() {

    }
}

class Map {
    constructor(mapSize) {
        const mapCenter = Math.floor(mapSize/2)
        const mapCenterKey = `${mapCenter}_${mapCenter}`
        this.areas = {
            [mapCenterKey]: 'b'
        }
            // TODO
            // this is the state of the map, blocked tiles, wind tiles, sustain tiles.
            // '2_8': new MapTile()
        this.mapSize = mapSize;
        this.playersCells = [
            {
                x: Math.floor(this.mapSize/2),
                y: 0 
            },
            {
                x: Math.floor(this.mapSize/2),
                y: this.mapSize - 1
            },
            {
                x: 0,
                y: Math.floor(this.mapSize/2)
            },
            {
                x: this.mapSize - 1,
                y: Math.floor(this.mapSize/2)
            },
        ];
        this.bossCells = [{
            x: Math.floor(this.mapSize/2),
            y: Math.floor(this.mapSize/2),
        }]
        this.npcCells = [
            {
                x: 3,
                y: Math.floor(this.mapSize/2)
            },
            {
                x: this.mapSize - 3,
                y: Math.floor(this.mapSize/2)
            },
            {
                x: 3,
                y: Math.floor(this.mapSize/2)
            },
            {
                x: this.mapSize - 3,
                y: Math.floor(this.mapSize/2)
            },
        ]
    }
    getPlayersStartingCells(numberOfPlayers) {
        return this.playersCells.slice(0, numberOfPlayers);
    }
    getBossCells() {
        return this.bossCells
    }
    getNpcCells(numberOfPlayers) {
        return this.npcCells.slice(0, numberOfPlayers);
    }
}

module.exports = Map