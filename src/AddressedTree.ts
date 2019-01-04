import { AddressedTreeNode } from "./AddressedTreeNode";
import { TraversalMethods } from "./RenderTree";

export class AddressedTree<T> {
  private _x: Array<T>;
  // events for subscriptions...

  constructor() {
    this._x = [];
  }

  protected deleteOutsideHeight(node: AddressedTreeNode<T>, height: number) {

  }

  // protected forEachChildNode(node: AddressedTreeNode<T>, callback: any, tm: TraversalMethods) {

  // }

  protected *forEachChild(node: AddressedTreeNode<T>, tm: TraversalMethods = TraversalMethods.DepthFirst): IterableIterator<AddressedTreeNode<T>> {
    if (tm === TraversalMethods.TopFirst) {
      yield node;
    }
    // execute a delegate on the payload of each node in a specific traversal order, starting at a specific node
    if (node && node.Neighbors) {
      node.Neighbors.forEach((kid: AddressedTreeNode<T>) => {
        this.forEachChild(kid, tm);
      })
    }
    if (tm === TraversalMethods.DepthFirst) {
      yield node;
    }
  }
}
