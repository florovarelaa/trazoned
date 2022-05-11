const Shape = require('../../Shape')

// --- 1 ---

const movement_1_king = new Shape(
    {
        '-1_1': ['-1_1'],       
        '0_1': ['0_1'],       
        '1_1': ['1_1'],       
        '-1_0': ['-1_0'],       
        '1_0': ['1_0'],       
        '-1_-1': ['-1_-1'],       
        '0_-1': ['0_-1'],       
        '1_-1': ['1_-1'],       
    }
)

// --- 2 ---

const movement_2_knight = new Shape(
    {
        '-1_2': ['-1_2'],       
        '1_2': ['1_2'],       
        '-2_1': ['-2_1'],       
        '2_1': ['2_1'],       
        '-2_-1': ['-2_-1'],       
        '2_-1': ['2_-1'],       
        '-1_-2': ['-1_-2'],       
        '1_-2': ['1_-2'],       
    }
)

const movement_2_invertedKnight = new Shape(
    {
        '-2_2': ['-2_2'],       
        '0_2': ['0_2'],       
        '2_2': ['2_2'],       
        '-2_0': ['-2_0'],       
        '2_0': ['2_0'],       
        '-2_-2': ['-2_-2'],       
        '0_-2': ['0_-2'],       
        '-2_2': ['-2_2'],       
    }
)
  
const movement_2_straight = new Shape(
    {
        '0_2': ['0_2'],       
        '0_1': ['0_1'],       
        '-2_0': ['-2_0'],       
        '-1_0': ['-1_0'],       
        '1_0': ['1_0'],       
        '2_0': ['2_0'],       
        '0_-1': ['0_-1'],       
        '0_-2': ['0_-2'],       
    }
)
  
const movement_2_cross = new Shape(
    {
        '-2_2': ['-2_2'],       
        '-1_1': ['-1_1'],       
        '1_1': ['1_1'],       
        '2_2': ['2_2'],       
        '-1_-1': ['-1_-1'],       
        '-1_1': ['-1_1'],       
        '-2_-2': ['-2_-2'],       
        '2_-2': ['2_-2'],       
    }
)


const movement_2_rhombus = new Shape(
    {
        '0_2': ['0_2'], 
        '-1_1': ['-1_1'], 
        '1_1': ['1_1'],       
        '-2_0': ['-2_0'],       
        '2_0': ['2_0'],       
        '-1_-1': ['-1_-1'],       
        '1_-1': ['1_-1'],       
        '0_-2': ['0_-2'],       
    }
)

// --- 3 ---
  
const movement_3_straight = new Shape(
    {
        '0_3': ['0_3'],       
        '0_2': ['0_2'],       
        '0_1': ['0_1'],       
        '-3_0': ['-3_0'],       
        '-2_0': ['-2_0'],       
        '-1_0': ['-1_0'],       
        '1_0': ['1_0'],       
        '2_0': ['2_0'],       
        '3_0': ['3_0'],       
        '0_-1': ['0_-1'],       
        '0_-2': ['0_-2'],       
        '0_-3': ['0_-3'],       
    }
)

const movement_3_cross = new Shape(
    {
        '-3_3': ['-3_3'], 
        '-2_2': ['-2_2'], 
        '-1_1': ['-1_1'],       
        '1_1': ['1_1'],       
        '2_2': ['2_2'],       
        '3_3': ['3_3'],       
        '-1_-1': ['-1_-1'],       
        '-1_1': ['-1_1'],       
        '-2_-2': ['-2_-2'],       
        '2_-2': ['2_-2'],       
        '-3_-3': ['2_-2'],       
        '3_-3': ['2_-2'],       
    }
)

const SHAPES = {
    movement_1_king,
    movement_2_knight,
    movement_2_invertedKnight,
    movement_2_straight,
    movement_2_cross,
    movement_2_rhombus,
    movement_3_straight,
    movement_3cross,
}

module.exports = SHAPES;