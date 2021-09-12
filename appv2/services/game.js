import { movementService } from './movement.js'

export let gameService = {
    unitPotentialStepMovementPositions(unit, movement, step, boardSize) {
        // It has to check for previous steps movements selected by the player with either movement or ability
        // uiService.setUiDisabled()
        let position = unit.getPositionPreviousToMovement(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, movement, boardSize)
        return potentialPositions
    },
    unitPotentialStepAbilityPositions(unit, ability, step, boardSize) {
        let position = unit.getPositionPreviousToAbility(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, ability.selectPositions, boardSize)
        return potentialPositions
    },
    unitSetStepMovement(unit, movement, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepMovement(movement, step, selectedPositionIndex, selectedPositionInMap)
    },
    unitSetStepAbility(unit, ability, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepAbility(ability, step, selectedPositionIndex, selectedPositionInMap)
    },
    executeStepsActions(players, numberOfSteps, boardSize) {
        let boardStateOnStep = new Array(boardSize).fill(null).map(() => new Array(boardSize).fill(null))

        for (let step = 0; step < numberOfSteps; step++) {
            players.forEach( (player, playerIndex) => {
                let movement = player.movements[0]
                player.units.forEach( (unit, unitIndex) => {
                    let potentialStepMovementPositions = gameService.unitPotentialStepMovementPositions(unit, movement, step, boardSize)
                    let selectedPosition = potentialStepMovementPositions[1]
                    gameService.unitSetStepMovement(unit, movement, step, selectedPosition.positionIndex, selectedPosition.position)
            
                    let ability = unit.abilities[0]
                    let potentialStepAbilityPoistions = gameService.unitPotentialStepAbilityPositions(unit, ability, step, boardSize)
                    selectedPosition = potentialStepAbilityPoistions[1]
                    gameService.unitSetStepAbility(unit, ability, step, selectedPosition.positionIndex, selectedPosition.position)
                })
            })            
        }
    }
}