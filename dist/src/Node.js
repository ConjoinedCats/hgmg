"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(data, neighbors, parent) {
        this.data = data;
        this.neighbors = neighbors || new NodeList();
        this.parent = parent;
    }
    get Value() {
        return this.data;
    }
    get Neighbors() {
        return this.neighbors;
    }
    get Parent() {
        return this.parent;
    }
}
exports.Node = Node;
class NodeList extends Array {
    constructor() {
        super();
    }
}
exports.NodeList = NodeList;
