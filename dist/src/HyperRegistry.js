"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HyperRegistry {
    constructor() {
        this._x = [];
    }
    get count() {
        return this._x.length;
    }
    loadMore() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
    childrenFor(ra) {
        return this._x.filter((x) => {
            ra.contains(x.parent);
        });
    }
}
exports.HyperRegistry = HyperRegistry;
