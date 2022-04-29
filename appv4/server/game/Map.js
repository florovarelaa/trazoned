class Map {
    constructor(mapSize) {
        // TODO
        // the actual board should be set here.
        // data is in the configuration file.
        this.state = new Array(mapSize).fill(null).map(() => new Array(mapSize).fill(null));
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
            // {
            //     x: 0,
            //     y: Math.floor(this.mapSize/2)
            // },
            // {
            //     x: this.mapSize - 1,
            //     y: Math.floor(this.mapSize/2)
            // },
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
    getPlayersCells() {
        return this.playersCells
    }
    getBossCells() {
        return this.bossCells
    }
    getNpcCells() {
        return this.npcCells
    }
}

module.exports = Map