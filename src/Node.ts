export class Node<T> {
  private data: T;
  private neighbors: NodeList<T>;
  private parent?: Node<T>;

  constructor(data: T, neighbors?: NodeList<T>, parent?: Node<T>) {
    this.data = data;
    this.neighbors = neighbors || new NodeList<T>();
    this.parent = parent;
  }

  get Value(): T {
    return this.data;
  }

  get Neighbors(): NodeList<T> | undefined {
    return this.neighbors;
  }

  get Parent(): Node<T> | undefined {
    return this.parent;
  }

  //   protected void DeleteChild(Node < T > node) {
  //     this.neighbors.Remove(node);
  //   }

  //   protected void DeleteExcept(Node < T > node) {
  //     if(this.neighbors.Contains(node)) {
  //   this.neighbors = new NodeList<T>() { node };
  // } else {
  //   this.neighbors = new NodeList<T>();
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