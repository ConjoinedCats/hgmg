"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ServerRoot_1 = require("./ServerRoot");
const Address_1 = require("./Address");
class RootAddress {
    constructor() {
        this.sr = new ServerRoot_1.ServerRoot();
        this.addr = new Address_1.Address();
    }
    isEqual(x) {
        return false;
    }
    contains(other) {
        return (this.sr == other.sr && other.addr.startsWith(this.addr));
    }
}
exports.RootAddress = RootAddress;
