"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HyperData_1 = require("./HyperData");
const RootAddress_1 = require("./RootAddress");
const AddressedTree_1 = require("./AddressedTree");
var TraversalMethods;
(function (TraversalMethods) {
    TraversalMethods[TraversalMethods["DepthFirst"] = 0] = "DepthFirst";
    TraversalMethods[TraversalMethods["TopFirst"] = 1] = "TopFirst";
})(TraversalMethods = exports.TraversalMethods || (exports.TraversalMethods = {}));
class RenderTree extends AddressedTree_1.AddressedTree {
    constructor() {
        const data = new HyperData_1.HyperData(new RootAddress_1.RootAddress());
        super(data);
    }
    refocus(reg, target) { }
    loadDescendantsFor(current, inLimit, reg) { }
    loadAncestorsFor(child, outLimit, reg) {
        return child;
    }
}
exports.RenderTree = RenderTree;
