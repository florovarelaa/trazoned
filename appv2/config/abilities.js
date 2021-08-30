import { ability } from '../models/ability.js'
import { movements } from './movements.js'

const affectedWarrior = {
    '00': [[0, 0],[1,0],[0,1],[-1,-1]],
    '01': [[0, 0],[-1,0],[1,0],[0,-1]],
    '02': [[0, 0],[-1,0],[0,1],[1,-1]],
    '10': [[0, 0],[0,-1],[0,1],[-1,0]],
    '12': [[0, 0],[0,-1],[0,1],[1,0]],
    '20': [[0, 0],[0,-1],[1,0],[-1,1]],
    '21': [[0, 0],[-1,0],[1,0],[0,1]],
    '22': [[0, 0],[-1,0],[0,-1],[1,1]],
}

const affectedMage = {
    '00': [[0,0],[-1,-1],[-2,-2],[-3,-3],],
    '01': [[0,0],[0,-1],[0,-2],[0,-3]],
    '02': [[0,0],[1,-1],[2,-2],[3,-3]],
    '10': [[0,0],[-1,0],[-2,0],[-3,0]],
    '12': [[0,0],[1,0],[2,0],[3,0]],
    '20': [[0,0],[-1,1],[-2,2],[-3,3]],
    '21': [[0,0],[0,1],[0,2],[0,3]],
    '22': [[0,0],[1,1],[2,2],[3,3]],
}

const warrior0 = new ability(
    0, 'warrior_first', movements.king, affectedWarrior, false, 3, 'deal damage in a cone'
)

const mage0 = new ability(
    1, 'mage_first', movements.king, affectedMage, false, 3, 'deal damage in a line'
)

const warrior1 = new ability(
    2, 'warrior_second', null, null, true, null, 'move as the player movement'
)

const mage1 = new ability(
    2, 'mage_second',movements.king, movements.king, true, null, 'move 1 position'
)

export let abilities = {
    warrior0: warrior0,
    warrior1: warrior1,
    mage0: mage0,
    mage1: mage1
}