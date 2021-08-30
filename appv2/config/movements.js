import { movement } from '../models/movement.js'

const king = new movement(
    [
        [1,1,1],
        [1,0,1],
        [1,1,1],
    ]
)

const knight = new movement(
    [
        [0,1,0,1,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,1,0,1,0]
     ]
)

const invertedKnight = new movement(
    [
        [1,0,1,0,1],
        [0,0,0,0,0],
        [1,0,0,0,1],
        [0,0,0,0,0],
        [1,0,1,0,1]
    ]
)

export const movements = {
    king: king,
    knight: knight,
    invertedKnight: invertedKnight 
}