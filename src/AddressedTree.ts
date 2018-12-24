import { AddressedTreeNode } from "./AddressedTreeNode";

export class AddressedTree<T> {
  private _x: Array<T>;
  // events for subscriptions...

  constructor() {
    this._x = [];
  }

  protected deleteOutsideHeight(node: AddressedTreeNode<T>, height: number) {

  }
}
