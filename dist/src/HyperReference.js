"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HyperReference {
    constructor(from, to, loc, isParent = false) {
        this.parent = from;
        this.child = to;
        this.link = loc;
        this.parentReference = isParent;
    }
    isEqual(x) {
        return (this.parent === x.parent && this.child === x.child && this.link === x.link && this.parentReference === x.parentReference);
    }
}
exports.HyperReference = HyperReference;
