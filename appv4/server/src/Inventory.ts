export class Inventory {
    items: any[];
    constructor(inventorySize) {
        this.items = Array(inventorySize).fill(null)
    }
}