const Shape = require('../../Shape')

// MOVEMENTS

const none = {}

// --- 0 ---

const _1_12_ = new Shape(
    0, 
    {
        '-1_1': ['-1_1'],       
        '0_1': ['0_1'],       
        '1_1': ['1_1'],       
        '-1_0': ['-1_0'],       
        '1_0': ['1_0'],       
        '-1_-1': ['-1_-1'],       
        '0_-1': ['0_-1'],       
        '1_-1': ['1_-1'],
        '0_2': ['0_2'],
        '-2_0': ['-2_0'],
        '2_0': ['2_0'],
        '0_-2': ['0_-2'],
    }
)

// --- 1 ---

const _1_1_5_ = new Shape(
    12,
    {
        '0_0': ['0_0', '-1_0', '0_1', '1_0', '0_-1'],
    }
)

const _1_8_1_ = new Shape(
    1, 
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

const _1_16_1_ = new Shape(
    10, 
    {
        '-1_1': ['-1_1'],       
        '0_1': ['0_1'],       
        '1_1': ['1_1'],       
        '-1_0': ['-1_0'],       
        '1_0': ['1_0'],       
        '-1_-1': ['-1_-1'],       
        '0_-1': ['0_-1'],       
        '1_-1': ['1_-1'],
        '0_2': ['0_2'],
        '-2_0': ['-2_0'],
        '2_0': ['2_0'],
        '0_-2': ['0_-2'],
        '-2_2': ['-2_2'],
        '2_2': ['2_2'],
        '-2_-2': ['-2_-2'],
        '2_-2': ['2_-2'],
    }
)

// --- 2 ---

const _2_knight = new Shape(
    2, 
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

const _2_invertedKnight = new Shape(
    3, 
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
  
const _2_straight = new Shape(
    4, 
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
  
const _2_cross = new Shape(
    5, 
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


const _2_rhombus = new Shape(
    6, 
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


const _2_3_straight = new Shape(
    6, 
    {
        '-3_3': ['-3_3'],
        '-2_2': ['-2_2'],
        '0_3': ['0_3'], 
        '0_2': ['0_2'],       
        '2_2': ['2_3'],       
        '-3_0': ['-3_0'],       
        '-2_0': ['-2_0'],       
        '2_0': ['2_0'],       
        '2_3': ['2_3'],       
        '-3_-3': ['-3_-3'],       
        '-2_-2': ['-2_-2'],       
        '0_-2': ['0_-2'],       
        '0_-3': ['0_-3'],       
        '2_-2': ['2_-2'],       
        '3_-3': ['3_-3'],       
    }
)

const _3_5_ = new Shape(
    6, 
    {
        '-2_2': ['-2_2', '-2_1', '-1_2'], 
        '0_2': ['0_2', '-1_2', '1_2'],       
        '2_2': ['2_2', '1_2', '2_1'],       
        '-2_0': ['-2_0', '-2_1', '-2_-1'],       
        '2_0': ['2_0', '2_1', '2_-1'],       
        '-2_-2': ['-2_-2', '-2_-1', '-1_-2'],       
        '0_-2': ['0_-2', '-1_-2', '1_-2'],       
        '2_-2': ['2_-2', '1_-2', '2_-1'],       
    }
)

// --- 3 ---
  
const _3_straight = new Shape(
    7,
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

const _3_cross = new Shape(
    8, 
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
    none,
    _1_12_,
    _1_8_1_,
    _1_16_1_,
    _1_1_5_,
    _2_straight,
    _2_cross,
    _2_rhombus,
    _2_knight,
    _2_invertedKnight,
    _2_3_straight,
    _3_5_,
    _3_straight,
    _3_cross,
}

module.exports = SHAPES;