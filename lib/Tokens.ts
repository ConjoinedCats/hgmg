export class BaseToken {
  protected _count: number = 0;
  protected _dim: number = 0;

  get count(): number {
    return this._count;
  }

  set count(val: number) {
    this._count = val;
  }

  get dim(): number {
    return this._dim;
  }

  set dim(val: number) {
    this._dim = val;
  }
}

export class QuadToken extends BaseToken {
  constructor() {
    super();
    this._count = 4;
    this._dim = 2;
  }
}

export class OctToken extends BaseToken {
  constructor() {
    super();
    this._count = 8;
    this._dim = 3;
  }
}
