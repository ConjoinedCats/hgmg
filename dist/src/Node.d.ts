export declare class Node<T> {
    private _value;
    private _children;
    private _parent?;
    constructor(value: T, children?: NodeList<T>, parent?: Node<T>);
    readonly value: T;
    readonly children: NodeList<T> | undefined;
    readonly parent: Node<T> | undefined;
}
export declare class NodeList<T> extends Array<Node<T>> {
    constructor();
}
