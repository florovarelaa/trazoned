export class Unit {
    id: any
    name: any
    abilities: any
    playerId: any
    constructor(name, abilities) {
        this.id
        this.name = name
        this.abilities = abilities
    }
    setPlayerId = (playerId) => {
        this.playerId = playerId
    }
}