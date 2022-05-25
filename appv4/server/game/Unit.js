class Unit {
    constructor(name, basicAbilities) {
        this.id
        this.name = name
        this.basicAbility1 = Object.values(basicAbilities)[0];
        this.basicAbility2 = Object.values(basicAbilities)[1]
    }
    setPlayerId = (playerId) => {
        this.playerId = playerId
    }
}

module.exports = Unit