import { AddressedTreeNode } from "./AddressedTreeNode";
import { TraversalMethods } from "./RenderTree";

export class AddressedTree<T> {
  private _focus?: AddressedTreeNode<T>;
  private _top?: AddressedTreeNode<T>;

  // events for subscriptions...

  constructor(focus: T) {
    this._top = this._focus = new AddressedTreeNode<T>(focus);
  }

  get focus(): AddressedTreeNode<T> | undefined {
    return this._focus;
  }
  get top(): AddressedTreeNode<T> | undefined {
    return this._top;
  }
  get count(): number {
    let k = 0;
    this.forEachChild(<AddressedTreeNode<T>>this.top, (node: AddressedTreeNode<T>) => {
      k = k + 1;
    });
    var it = this.forEachChild(<AddressedTreeNode<T>>this.top);
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

  protected deleteOutsideHeight(node: AddressedTreeNode<T>, height: number) {

  }

  // protected forEachChildNode(node: AddressedTreeNode<T>, callback: any, tm: TraversalMethods) {

  // }

  protected *forEachChild(node: AddressedTreeNode<T>, tm: TraversalMethods = TraversalMethods.DepthFirst): IterableIterator<AddressedTreeNode<T>> {
    if (tm === TraversalMethods.TopFirst) {
      yield node;
    }
    // execute a delegate on the payload of each node in a specific traversal order, starting at a specific node
    if (node && node.children) {
      node.children.forEach((kid: AddressedTreeNode<T>) => {
        this.forEachChild(kid, tm);
      })
    }
    if (tm === TraversalMethods.DepthFirst) {
      yield node;
    }
  }
}
