import { players } from './players.js'

const boardSize = 11
const numberOfSteps = 1
const initialUnitsHealth = 10

const config_ui = {
    cellSize: 45,
}

export let config = {
    players: players,
    boardSize: boardSize,
    ui: config_ui,
    numberOfSteps: numberOfSteps,
    initialUnitsHealth: initialUnitsHealth,
    isGameOver: false,
    winner: null,
    potentialMovementColor: "9370DB",
    potentialAbilityColor: "800080"
}