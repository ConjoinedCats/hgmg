
export class Branch {
  private _n: Array<any>;

  constructor() {
    this._n = new Array<any>();
  }

  get count(): number {
    return this._n.length;
  }

  get leafCount(): number {
    return this._n.length;
  }

  get branchCount(): number {
    return this._n.length;
  }
}