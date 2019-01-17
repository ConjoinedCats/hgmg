"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HyperRegistry {
    constructor() {
        this._x = [];
    }
    childrenFor(ra) {
        return this._x.filter((x) => {
            ra.contains(x.parent);
        });
    }
}
exports.HyperRegistry = HyperRegistry;
