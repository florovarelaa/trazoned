import { movementService } from './movement.js'
import { uiService } from './ui.js'

export let gameService = {
    unitPotentialStepMovementPositions(unit, movement, step, boardSize, potentialMovementColor) {
        uiService.setUiDisabled()
        // It has to check for previous steps movements selected by the player with either movement or ability
        let position = unit.getPositionPreviousToMovement(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, movement, boardSize)
        uiService.addColorAvailablePositions(potentialPositions, potentialMovementColor)
        this.waitForPlayerMovementAction(unit, movement, step, potentialPositions, potentialMovementColor)
        return potentialPositions
    },
    unitPotentialStepAbilityPositions(unit, ability, step, boardSize, potentialAbilityColor) {
        uiService.setUiDisabled()
        let position = unit.getPositionPreviousToAbility(step)
        let potentialPositions = movementService.getMovementPotentialPositions(position, ability.selectPosition, boardSize)
        uiService.addColorAvailablePositions(potentialPositions, potentialAbilityColor)
        this.waitForPlayerAbilityAction(unit, ability, step, potentialPositions, potentialAbilityColor)
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
                        console.log('stepUnitsPositionAfterMovement: ', stepUnitsPositionAfterMovement)
                        console.log('positionAsKey: ', positionAsKey)
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
    },
    waitForPlayerMovementAction(unit, movement, step, potentialPositions, potentialMovementColor) {

        let clickButton = false;
        let isAvailablePosition
    
        window.onclick = e => {
            e.preventDefault()
            if ( clickButton ) {
                let targetElementId = e.target.id
                let positionAtTarget = this.getPositionAsXYFromId(targetElementId)

                isAvailablePosition = potentialPositions.some( position => (positionAtTarget.x === position.position.x && positionAtTarget.y === position.position.y))
                uiService.removeColorAvailablePositions(potentialPositions, potentialMovementColor)

                if(isAvailablePosition) {
                    let futurePosition = positionAtTarget
                    let selectedPosition = potentialPositions.filter( position => ((position.position.x === futurePosition.x) && (position.position.y === futurePosition.y)))[0]
                    gameService.unitSetStepMovement(unit, movement, step, selectedPosition.positionIndex, selectedPosition.position)
                }

                uiService.setUiEnabled()
                window.onclick = null
            }

            clickButton = true
        }
    },
    waitForPlayerAbilityAction(unit, ability, step, potentialPositions, potentialAbilityColor) {
        let clickButton = false;
        let isAvailablePosition

        window.onclick = e => {
            e.preventDefault()
            if ( clickButton ) {
                let targetElementId = e.target.id
                let positionAtTarget = this.getPositionAsXYFromId(targetElementId)

                isAvailablePosition = potentialPositions.some( position => (positionAtTarget.x === position.position.x && positionAtTarget.y === position.position.y))
                uiService.removeColorAvailablePositions(potentialPositions, potentialAbilityColor)

                if(isAvailablePosition) {
                    let futurePosition = positionAtTarget
                    let selectedPosition = potentialPositions.filter( position => ((position.position.x === futurePosition.x) && (position.position.y === futurePosition.y)))[0]
                    gameService.unitSetStepAbility(unit, ability, step, selectedPosition.positionIndex, selectedPosition.position)

                }

                uiService.setUiEnabled()
                window.onclick = null
            }
            
            clickButton = true
        }
    },
    getPositionAsXYFromId(positionAsId) {
        let x = positionAsId.substring(positionAsId.indexOf("x") + 1, positionAsId.indexOf('y'))
        let y = positionAsId.substring(positionAsId.indexOf("y") + 1, positionAsId.length)
        return {
            x: parseInt(x),
            y: parseInt(y)
        }
    }
}