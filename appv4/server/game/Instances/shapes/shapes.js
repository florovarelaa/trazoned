const Shape = require('../../Shape')

// MOVEMENTS

const none = {}

// --- 0 ---

const _0_rhombus = new Shape(
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

const _1_king = new Shape(
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

const _1_rhombus = new Shape(
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

// keys correspond to a position in a grid where the player is at the center [0,0].
// the array corresponds of affected tiles relative to the player casting position when the cell corresponding to the key is selected as target.
const _ability_warrior_0 = new Shape(
    9,
    {
        '-1_1': ['-2_2','-1_1','0_1','-1_0'],       
        '0_1': ['0_2','-1_1','0_1','1_1'],       
        '1_1': ['2_2','0_1','1_1','1_0'],       
        '-1_0': ['-1_1','-2_0','-1_0','-1_-1'],       
        '1_0': ['1_1','1_0','2_0','1_-1'],       
        '-1_-1': ['-1_0','-1_-1','0_-1','-2_-2'],       
        '0_-1': ['-1_-1','0_-1','1_-1','0_-2'],       
        '1_-1': ['1_0','0_-1','1_-1','2_-2'],       
    }
)

const _ability_mage_0 = new Shape(
    10,
    {
        '-3_3': ['-4_4','-3_4','-4_3','-3_3'],       
        '0_3': ['0_4','-1_3','0_3','1_3'],       
        '3_3': ['3_4','4_4','3_3','4_3'],       
        '-3_0': ['-3_1','-4_0','-3_0','-3_-1'],       
        '3_0': ['3_1','3_0','4_0','3_-1'],       
        '-3_-3': ['-4_-3','-3_-3','-4_-4','-3_-4'],       
        '0_-3': ['-1_-3','0_-3','1_-3','0_-4'],       
        '3_-3': ['3_-3','4_-3','3_-4','4_-4'],       
    }
)

const SHAPES = {
    none,
    _0_rhombus,
    _1_king,
    _2_straight,
    _1_rhombus,
    _2_cross,
    _2_rhombus,
    _2_knight,
    _2_invertedKnight,
    _3_straight,
    _3_cross,
    _ability_warrior_0,
    _ability_mage_0,
}

module.exports = SHAPES;