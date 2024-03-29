export class Map {
    areas: { [x: string]: string; };
    mapSize: any;
    playersCoordinates: { x: number; y: number; }[];
    bossCells: { x: number; y: number; }[];
    npcCoordinates: { x: number; y: number; }[];
    constructor(mapSize) {
        const mapCenter = Math.floor(mapSize/2)
        const mapCenterPosition = `${mapCenter}_${mapCenter}`
        this.areas = {
            [mapCenterPosition]: 'b'
        }
            // TODO
            // this is the state of the map, blocked tiles, wind tiles, sustain tiles.
            // '2_8': new MapTile()
        this.mapSize = mapSize;
        this.playersCoordinates = [
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
        this.npcCoordinates = [
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
    getPlayersStartingCoordinates(numberOfPlayers) {
        return this.playersCoordinates.slice(0, numberOfPlayers);
    }
    getBossCoordinates() {
        return this.bossCells
    }
    getNpcCoordinates(numberOfPlayers) {
        return this.npcCoordinates.slice(0, numberOfPlayers);
    }
}