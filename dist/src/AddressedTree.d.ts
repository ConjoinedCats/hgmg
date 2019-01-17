import { AddressedTreeNode } from "./AddressedTreeNode";
import { TraversalMethods } from "./RenderTree";
export declare class AddressedTree<T> {
    private _focus?;
    private _top?;
    constructor(focus: T);
    readonly focus: AddressedTreeNode<T> | undefined;
    readonly top: AddressedTreeNode<T> | undefined;
    readonly count: number;
    protected deleteOutsideHeight(node: AddressedTreeNode<T>, height: number): void;
    protected forEachChild(node: AddressedTreeNode<T>, tm?: TraversalMethods): IterableIterator<AddressedTreeNode<T>>;
}
