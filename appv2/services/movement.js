export const movementService = {
    getMovementPotentialPositions: getMovementPotentialPositions
}

function getMovementPotentialPositions(position, movement, boardSize) {

    movement = movement.movement
    let movementCenterCell = Math.floor(movement.length/2)
    let allPossiblePositions = []

    for (let i = 0; i <= movement.length - 1; i++) {
        const row = movement[i];
        for (let j = 0; j <= row.length - 1; j++) {
            if (movement[i][j] === 1) {

                let cell = new Object()

                cell = {
                    position: {
                        x: null,
                        y: null
                    },
                    positionIndex: null
                };
                
                cell.position.x = i - movementCenterCell
                cell.position.y = j - movementCenterCell
                cell.positionIndex = [i,j]

                allPossiblePositions.push(cell)
            }
        }
    }

    let availablePositions = allPossiblePositions.map( e => {
        return {
            position: {
                x: position.x + e.position.x,
                y: position.y + e.position.y
            },
            positionIndex: e.positionIndex
        } 
    })

    availablePositions = availablePositions.filter( e => {
        return positionIsWithinBoardBounds(e.position, boardSize)
    })

    return availablePositions
}

function positionIsWithinBoardBounds(position, boardSize) {
    if (Array.isArray(position)) {
        if (position[0] >= boardSize || position[0] < 0 || position[1] >= boardSize || position[1] < 0) {
            return false
        } else {
            return true
        }
    } else {   
        if (position.x >= boardSize || position.x < 0 || position.y >= boardSize || position.y < 0) {
            return false
        } else {
            return true
        }
    }
}