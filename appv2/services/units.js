export function initializeUnit(unit, unitIndex, player, boardSize, numberOfSteps) {
    setUnitPlayerId(unit, player.id)
    setUnitStartingPosition(unit, unitIndex, player.startingPosition, boardSize)
    setUnitMovementsAbilitiesAsPlayerMovement(unit, player)
    setUnitInitialNumberOfSteps(unit, numberOfSteps)
}

export function setUnitPlayerId(unit, playerId) {
    unit.playerId = playerId
}

export function setUnitStartingPosition(unit, unitIndex, startingPosition, boardSize) {
    let unitStartingPosition
    if ( (startingPosition.x === 0) || (startingPosition.x === boardSize)) {
        unitStartingPosition = {x: startingPosition.x, y: startingPosition.y + unitIndex}
        unit.setPosition( unitStartingPosition )
    } else {
        unitStartingPosition = {x: startingPosition.x + unitIndex, y: startingPosition.y}
        unit.setPosition( unitStartingPosition )
    }
}

export function setUnitMovementsAbilitiesAsPlayerMovement(unit, player) {
    unit.setUnitsMovementsAbilities(player.movements[0])
}

export function setUnitInitialNumberOfSteps(unit, numberOfSteps) {
    unit.initializeSteps(numberOfSteps)
}