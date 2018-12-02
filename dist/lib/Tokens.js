"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseToken {
    constructor() {
        this._count = 0;
        this._dim = 0;
        // get symbols(): Array<string> {
        //   return this._syms;
        // }
        // set symbols(val: Array<string>) {
        //   this._syms = val;
        // }
    }
    // protected _syms: Array<string> = [];
    get count() {
        return this._count;
    }
    set count(val) {
        this._count = val;
    }
    get dim() {
        return this._dim;
    }
    set dim(val) {
        this._dim = val;
    }
}
exports.BaseToken = BaseToken;
class QuadToken extends BaseToken {
    constructor() {
        super();
        this._count = 4;
        this._dim = 2;
    }
}
exports.QuadToken = QuadToken;
class OctToken extends BaseToken {
    constructor() {
        super();
        this._count = 8;
        this._dim = 3;
    }
}
exports.OctToken = OctToken;
