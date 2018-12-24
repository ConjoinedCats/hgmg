import { HyperRegistry } from "./HyperRegistry";
import { Address } from "./Address";
import { AddressedTreeNode } from "./AddressedTreeNode";
import { HyperData } from "./HyperData";
import { RootAddress } from "./RootAddress";

export enum TraversalMethods {
  DepthFirst,
  TopFirst
}

export class RenderTree extends AddressedTree<HyperData> {

  constructor() {

  }

  refocus(reg: HyperRegistry, target: Address) {

  }

  protected loadDescendantsFor(current: AddressedTreeNode<HyperData>, inLimit: number, reg: HyperRegistry) {

  }

  protected loadAncestorsFor(child: AddressedTreeNode<HyperData>, outLimit: number, reg: HyperRegistry): AddressedTreeNode<HyperData> {
    return child;
  }

  protected firstNodeContaining(focus: RootAddress, method: TraversalMethods = TraversalMethods.TopFirst): AddressedTreeNode<HyperData> {
    let retval: AddressedTreeNode<HyperData> = null;
    ForEachChildNode(Top, x => { if (retval == null && x.Value.addr.Contains(focus)) { retval = x; } }, method);
    return retval;
  }
}
