import { initializeUnit } from '../services/units.js'

export function initializePlayers(players, boardSize, numberOfSteps) {
    players.forEach( (player, playerIndex) => {
        setPlayersStartingPosition(player, playerIndex, boardSize)
        player.units.forEach( (unit, unitIndex) => {
            initializeUnit(unit, unitIndex, player, boardSize, numberOfSteps)
        })
    })
    return players
}

function setPlayersStartingPosition(player, playerIndex, boardSize) {
    let startingPosition;
        switch(playerIndex) {
            case 0: {
                startingPosition = {x: Math.floor(boardSize/2), y: 0 }
                break;
            }
            case 1: {
                startingPosition = {x: Math.floor(boardSize/2), y: boardSize - 1}
                break;
            }
            case 2: {
                startingPosition = {x: 0, y: Math.floor(boardSize/2)}
                break;
            }
            case 3: {
                startingPosition = {x: boardSize - 1, y: Math.floor(boardSize/2)}
                break;
            }
            
        }
    player.setStartingPosition(startingPosition);
}
    