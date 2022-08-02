"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory(inventorySize) {
        this.items = Array(inventorySize).fill(null);
    }
    return Inventory;
}());
exports.Inventory = Inventory;
