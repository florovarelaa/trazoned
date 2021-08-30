import { player as playerModel } from '../models/player.js'
import playersColors from './playersColors.js'
import { movements } from './movements.js'
import { units } from './units.js'

let unitsPlayer0 = [units.warrior, units.mage2]
let unitsPlayer1 = [units.mage, units.warrior2]

let movementsPlayer0 = [movements.knight]
let movementsPlayer1 = [movements.invertedKnight]

let player0 = new playerModel(0, playersColors[0], movementsPlayer0, unitsPlayer0)
let player1 = new playerModel(1, playersColors[1], movementsPlayer1, unitsPlayer1)

export let players = [
    player0,
    player1
]