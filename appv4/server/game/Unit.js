class Unit {
    constructor(name, abilities) {
        this.id = Math.random() * 100
        this.playerId = playerId
        this.name = name
        this.basicAbility1 = abilities[0]
        this.basicAbility2 = abilities[1]
    }
    setPlayerId = (playerId) => {
        this.playerId = playerId
    }
    isAlive = () => {
        return this.health > 0
    }
}

module.exports = Unit