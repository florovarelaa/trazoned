const Shape = require('../../Shape')

// --- 1 ---

const cells1King = new Shape(
    [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0],
        [0,0,1,0,1,0,0],
        [0,0,1,1,1,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
    ]
)

// --- 2 ---
  
const cells2Knight = new Shape(
    [
        [0,0,1,0,1,0,0],
        [0,0,1,0,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0]
        [0,0,0,0,0,0,0]
     ]
)
  
const cells2InvertedKnight = new Shape(
    [
        [0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0],
        [0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0],
        [0,1,0,1,0,1,0]
        [0,0,0,0,0,0,0]
    ]
)

const cells2Straight = new Shape(
    [
        [0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,1,1,0,1,1,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0]
    ]
)

const cells2Cross = new Shape(
    [
        [0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,0,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,0,0,0,0,0]
    ]
)

// --- 3 ---

const cells3Straight = new Shape(
    [
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [1,1,1,0,1,1,1],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0]
    ]
)

const cells3Cross = new Shape(
    [
        [1,0,0,0,0,0,1],
        [0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0],
        [0,0,0,0,0,0,0],
        [0,0,1,0,1,0,0],
        [0,1,0,0,0,1,0],
        [1,0,0,0,0,0,1]
    ]
)

// --- 2-1 ---

const shapeRhombus = new Shape(
    [
        [0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0],
        [0,0,1,0,1,0,0],
        [0,1,0,0,0,1,0],
        [0,0,1,0,1,0,0],
        [0,0,0,1,0,0,0]
        [0,0,0,0,0,0,0],
    ]
)

const shapes = {
    cells1King: cells1King,
    cells2Knight: cells2Knight,
    cells2InvertedKnight: cells2InvertedKnight,
    cells2Straight: cells2Straight,
    cells2Cross: cells2Cross,
    cells3Straight: cells3Straight,
    cells3Cross: cells3Cross,
    rhombus: shapeRhombus,
}

module.exports = shapes;