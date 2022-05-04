class Unit {
    constructor(name, basicAbilities) {
        this.id
        this.name = name
        this.basicAbility1 = basicAbilities[0]
        this.basicAbility2 = basicAbilities[1]
    }
    setPlayerId = (playerId) => {
        this.playerId = playerId
    }
    isAlive = () => {
        return this.health > 0
    }
}

module.exports = Unit