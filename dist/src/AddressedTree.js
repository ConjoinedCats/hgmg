"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressedTreeNode_1 = require("./AddressedTreeNode");
const RenderTree_1 = require("./RenderTree");
class AddressedTree {
    // events for subscriptions...
    constructor(focus) {
        this._top = this._focus = new AddressedTreeNode_1.AddressedTreeNode(focus);
    }
    get focus() {
        return this._focus;
    }
    get top() {
        return this._top;
    }
    get count() {
        let k = 0;
        // this.forEachChild(<AddressedTreeNode<T>>this.top, (node: AddressedTreeNode<T>) => {
        //   k = k + 1;
        // });
        var it = this.forEachChild(this.top);
        var res = it.next();
        while (!res.done) {
            console.log(res.value);
            res = it.next();
        }
        return k;
    }
    // public
    // RemoveAtIndex()
    // RemoveParent()
    // RemoveAtAddress()
    // ForEachParentNode()
    // ForEachChildNode()
    // ForEachChildNodeUntil()
    // ForNodesBelowDepth()
    // ForFocusToRoot()
    // EnumerateNodes()
    // get focus
    // get top
    // get count
    deleteOutsideHeight(node, height) { }
    // protected forEachChildNode(node: AddressedTreeNode<T>, callback: any, tm: TraversalMethods) {
    // }
    *forEachChild(node, tm = RenderTree_1.TraversalMethods.DepthFirst) {
        if (tm === RenderTree_1.TraversalMethods.TopFirst) {
            yield node;
        }
        // execute a delegate on the payload of each node in a specific traversal order, starting at a specific node
        if (node && node.children) {
            node.children.forEach((kid) => {
                this.forEachChild(kid, tm);
            });
        }
        if (tm === RenderTree_1.TraversalMethods.DepthFirst) {
            yield node;
        }
    }
}
exports.AddressedTree = AddressedTree;
