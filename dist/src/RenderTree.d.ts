import { HyperRegistry } from "./HyperRegistry";
import { Address } from "./Address";
import { AddressedTreeNode } from "./AddressedTreeNode";
import { HyperData } from "./HyperData";
import { AddressedTree } from "./AddressedTree";
export declare enum TraversalMethods {
    DepthFirst = 0,
    TopFirst = 1
}
export declare class RenderTree extends AddressedTree<HyperData> {
    constructor();
    refocus(reg: HyperRegistry, target: Address): void;
    protected loadDescendantsFor(current: AddressedTreeNode<HyperData>, inLimit: number, reg: HyperRegistry): void;
    protected loadAncestorsFor(child: AddressedTreeNode<HyperData>, outLimit: number, reg: HyperRegistry): AddressedTreeNode<HyperData>;
}
