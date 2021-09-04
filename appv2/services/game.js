import { movementService } from './movement.js'

export let gameService = {
    unitPotentialStepMovementPositions(unit, movement, step, boardSize) {
        console.log(unit.name, ' movement:  ', movement)
        // It has to check for previous steps movements selected by the player with either movement or ability
        // uiService.setUiDisabled()
        let position = unit.getPositionPreviousToMovement(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, movement, boardSize)
        return potentialPositions
    },
    unitPotentialStepAbilityPositions(unit, ability, step, boardSize) {
        console.log(unit.name, ' ability: ', ability)
        let position = unit.getPositionPreviousToAbility(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, ability.selectPosition, boardSize)
        
        return potentialPositions
    },
    unitSetStepMovement(unit, movement, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepMovement(movement, step, selectedPositionIndex, selectedPositionInMap)
    },
    unitSetStepAbility(unit, ability, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepAbility(ability, step, selectedPositionIndex, selectedPositionInMap)
    },
    executeStepActions(players, step, boardSize) {
        let stepUnitsPositionAfterMovement = {}
        players.forEach(player => {
            player.units.forEach( unit => {
                if (unit.collided) return
                let futurePosition
                if (unit.steps[step].movement !== null) {
                    futurePosition = unit.steps[step].movement.selectedPositionInMap
                } else {
                    futurePosition = unit.position
                }

                let key = `x:${futurePosition.x}y:${futurePosition.y}`

                if ( key in stepUnitsPositionAfterMovement) {
                    stepUnitsPositionAfterMovement[key].collided = true
                    unit.collided = true
                } else {
                    stepUnitsPositionAfterMovement[key] = unit
                }
            })
        });
        this.updatePlayersUnitsPositionsAtStepFromMovement(players, step)
        stepUnitsPositionAfterMovement = {}
        players.forEach( player => {
            player.units.forEach( unit => {
                if (unit.collided) return
                let futurePosition
                if ((unit.steps[step].ability !== null) && (unit.steps[step].ability.ability.isMovement)) {
                    futurePosition = unit.steps[step].ability.selectedPositionInMap
                } else {
                    futurePosition = unit.position
                }

                let key = `x:${futurePosition.x}y:${futurePosition.y}`

                if ( key in stepUnitsPositionAfterMovement) {
                    stepUnitsPositionAfterMovement[key].collided = true
                    unit.collided = true
                } else {
                    stepUnitsPositionAfterMovement[key] = unit
                }
            })
        })

        this.updatePlayersUnitsPositionsAtStepFromAbility(players, step)

        players.forEach( player => {
            player.units.forEach( unit => {
                if (unit.collided) return
                if ((unit.steps[step].ability !== null) && !(unit.steps[step].ability.ability.isMovement)) {
                    let ability = unit.steps[step].ability
                    let selectedPosition = ability.selectedPositionInMap
                    let selectedPositionIndex = ability.selectedPositionIndex
                    let selectedPositionIndexAsKey = `${selectedPositionIndex[0]}${selectedPositionIndex[1]}`
                    let affectPositions = ability.ability.affectPositions[selectedPositionIndexAsKey]
                    
                    affectPositions = affectPositions.map( position => {
                        return [position[0] + selectedPosition.x, position[1] + selectedPosition.y]
                    }).filter( position => {
                        return movementService.positionIsWithinBoardBounds(position, boardSize)
                    }).forEach( position => {
                        let positionAsKey = `x:${position[0]}y:${position[1]}`
                        if (positionAsKey in stepUnitsPositionAfterMovement) {
                            stepUnitsPositionAfterMovement[positionAsKey].damage(ability.ability.damage)
                        }
                    })
                }
            })
        })
        return players
    },
    updatePlayersUnitsPositionsAtStepFromMovement(players, step){
        players.forEach( player => {
            player.units.forEach(unit => {
                if (unit.collided) {
                    unit.setPositionAsStartingPosition()
                } else {
                    if (unit.steps[step].movement !== null) {
                        unit.setPosition(unit.steps[step].movement.selectedPositionInMap)
                    }
                }
            })
        })
    },
    updatePlayersUnitsPositionsAtStepFromAbility(players, step){
        players.forEach( player => {
            player.units.forEach(unit => {
                if (unit.collided) {
                    unit.setPositionAsStartingPosition()
                } else {
                    if(unit.steps[step].ability !== null && unit.steps[step].ability.ability.isMovement) {
                        unit.setPosition(unit.steps[step].ability.selectedPositionInMap)
                    }
                }
            })
        })
    }
}