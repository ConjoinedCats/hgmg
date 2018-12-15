export declare class Node<T> {
    private data;
    private neighbors;
    private parent?;
    constructor(data: T, neighbors?: NodeList<T>, parent?: Node<T>);
    readonly Value: T;
    readonly Neighbors: NodeList<T> | undefined;
    readonly Parent: Node<T> | undefined;
}
export declare class NodeList<T> extends Array<Node<T>> {
    constructor();
}
