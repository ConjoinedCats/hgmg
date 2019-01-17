"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(addr) {
        this._x = addr || "";
    }
    isEqual(other) {
        return other.toString() === this.toString();
    }
    startsWith(other) {
        return other.isRoot() || this.toString().startsWith(other.toString());
    }
    toString() {
        return this._x;
    }
    isRoot() {
        return this._x.length === 0;
    }
}
exports.Address = Address;
