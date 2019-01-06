export class Node<T> {
  private _value: T;
  private _children: NodeList<T>;
  private _parent?: Node<T>;

  constructor(value: T, children?: NodeList<T>, parent?: Node<T>) {
    this._value = value;
    this._children = children || new NodeList<T>();
    this._parent = parent;
  }

  get value(): T {
    return this.value;
  }

  get children(): NodeList<T> | undefined {
    return this._children;
  }

  get parent(): Node<T> | undefined {
    return this._parent;
  }

  //   protected void DeleteChild(Node < T > node) {
  //     this.children.Remove(node);
  //   }

  //   protected void DeleteExcept(Node < T > node) {
  //     if(this.children.Contains(node)) {
  //   this.children = new NodeList<T>() { node };
  // } else {
  //   this.children = new NodeList<T>();
  // }
  //   }
}


export class NodeList<T> extends Array<Node<T>> {
  constructor() {
    super();
  }

  // public NodeList(initialSize: number) {
  //   // Add the specified number of items
  //   for (let i = 0; i < initialSize; i++) {
  //     this.push(new Node<T>());
  //   }
  // }

  // FindByValue(value: T): Node<T> {
  //   this.forEach(n => {
  //     if (n.Value === value) {
  //       return n;
  //     }
  //   })
  //   return undefined; // throw?
  // }
}