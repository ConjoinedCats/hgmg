"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value, children, parent) {
        this._value = value;
        this._children = children || new NodeList();
        this._parent = parent;
    }
    get value() {
        return this.value;
    }
    get children() {
        return this._children;
    }
    get parent() {
        return this._parent;
    }
}
exports.Node = Node;
class NodeList extends Array {
    constructor() {
        super();
    }
}
exports.NodeList = NodeList;
