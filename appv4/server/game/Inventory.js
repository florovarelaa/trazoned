class Inventory {
    constructor(inventorySize) {
        this.items = Array(inventorySize).fill(null)
    }
}

module.exports = Inventory;