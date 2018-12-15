"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServerRoot {
    constructor(s, r) {
        this._server = s || "";
        this._root = r || "";
    }
    get server() {
        return this._server;
    }
    get root() {
        return this._root;
    }
    isEqual(x) {
        return (this.server === x.server && this.root === x.root);
    }
}
exports.ServerRoot = ServerRoot;
