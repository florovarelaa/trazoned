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
        let potentialPositions = movementService.getMovementPotentialPositions(position, ability.selectPosition, boardSize)
        
        return potentialPositions
    },
    unitSetStepMovement(unit, movement, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepMovement(movement, step, selectedPositionIndex, selectedPositionInMap)
    },
    unitSetStepAbility(unit, ability, step, selectedPositionIndex, selectedPositionInMap) {
        unit.setStepAbility(ability, step, selectedPositionIndex, selectedPositionInMap)
    },
    executeStepsActions(players, numberOfSteps, boardSize) {
        for (let step = 0; step < numberOfSteps; step++) {
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

            players.forEach(player => player.units.forEach( unit => console.log(unit.name, unit.position)))
            // this.executeStepNonMovingAbilities(players, step)
            players.forEach( player => {
                player.units.forEach( unit => {
                    console.log(unit.name, unit.steps[step].ability.selectedPositionInMap)
                    if (unit.collided) return
                    if ((unit.steps[step].ability !== null) && !(unit.steps[step].ability.ability.isMovement)) {
                        let selectedPosition = unit.steps[step].ability.selectedPositionInMap
                    }
                })
            })            
        }
        // return players
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