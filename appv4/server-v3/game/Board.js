class Board {
    constructor(boardSize) {
        this.state = new Array(boardSize).fill(null).map(() => new Array(boardSize).fill(null));
    }
}

module.exports = Board