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

    }
}