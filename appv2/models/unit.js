export function unit(id, playerId, name, health, position, abilities, steps) {
    this.id = id,
    this.playerId = playerId,
    this.name = name,
    this.health = health, 
    this.position = position,
    this.startingPosition = position,
    this.abilities = abilities,
    this.steps = steps,
    this.collided = false,
    this.setPlayerId = (playerId) => {
        this.playerId = playerId
    },
    this.setPosition = (position) => {
        this.position = position
    },
    this.setStartingPosition = (position) => {
        this.startingPosition = position
    },
    this.setPositionAsStartingPosition = () => {
        this.position = this.startingPosition
    },
    this.setUnitsMovementsAbilities = (movement) => {
        this.abilities.forEach(ability => {
            if (ability.isMovement && ability.selectPosition == null && ability.affectPositions == null) {
                ability.setSelectPosition(movement)
                ability.setAffectPositions(movement)
            }
        })
    },
    this.initializeSteps = (numberOfSteps) => {
        this.steps = new Array(numberOfSteps).fill({ability: null, movement: null})
    },
    this.resetSteps = () => {
        this.steps.forEach( step => {
            step.ability = null
            step.movement = null
        })
    },
    this.getPositionPreviousToMovement = (step) => {
        for (let i = step - 1; 0 <= i; i--) {
            let element = this.steps[i];
            if( element.ability !== null && element.ability.isMovement === true ) {
                return element.ability.selectedPositionInMap
            }
            if( element.movement !== null ) {
                return element.movement.selectedPositionInMap
            }
        }
        return this.position
    }
    this.getPositionPreviousToAbility = (step) => {
        let element = this.steps[step];
        if( element.movement !== null ) {
            return element.movement.selectedPositionInMap
        }
        step--
        for (let i = step - 1; 0 <= i; i--) {
            let element = this.steps[i];
            if( element.ability !== null && element.ability.isMovement === true ) {
                return element.ability.selectedPositionInMap
            }
            if( element.movement !== null ) {
                return element.movement.selectedPositionInMap
            }
        }
        return this.position
    }
    this.setStepMovement = (movement, step, selectedPositionIndex, selectedPositionInMap) => {
        this.steps[step].movement = { 
            movement: movement,
            selectedPositionIndex: selectedPositionIndex,
            selectedPositionInMap: selectedPositionInMap
        }
    },
    this.setStepAbility = (ability, step, selectedPositionIndex, selectedPositionInMap) => {
        this.steps[step].ability = {
            ability: ability,
            selectedPositionIndex: selectedPositionIndex,
            selectedPositionInMap: selectedPositionInMap
        }
    },
    this.damage = (damage) => {
        this.health = this.health - damage
    },
    this.isAlive = () => {
        return this.health > 0
    }
}